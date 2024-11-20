import express from "express";
import jwt from "jsonwebtoken";
import Word from "../models/Word.js";
import User from "../models/User.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send("Not authenticated");

  const decoded = jwt.decode(token, JWT_SECRET);
  req.userId = decoded.userId;
  next();
};

// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  } else {
    return res.status(403).json({ message: "Access denied" });
  }
};

// Word Search
router.get("/search", isAuthenticated, async (req, res) => {
  const { query } = req.query;
  try {
    const words = await Word.find({ word: { $regex: query, $options: "i" } });
    res.status(200).json(words);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Word Details
router.get("/:id", isAuthenticated, async (req, res) => {
  try {
    const word = await Word.findById(req.params.id);
    res.status(200).json(word);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

/* ==============================
    Get all words (Admin only)
=================================*/
router.get("/", isAdmin, async (req, res) => {
  try {
    const words = await Word.find();
    res.status(200).json(words);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch words" });
  }
});

/* ==================================
    Word Add/Submission (Admin only)
====================================*/
router.post("/add-word", isAdmin, async (req, res) => {
  const {
    word,
    pronunciation,
    wordDefinition,
    partOfSpeech,
    meanings,
    synonyms,
    antonyms,
    exampleSentences,
  } = req.body;
  const newWord = new Word({
    word,
    pronunciation,
    wordDefinition,
    partOfSpeech,
    meanings,
    synonyms,
    antonyms,
    exampleSentences,
  });

  try {
    await newWord.save();
    res.status(201).send("Word added");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

/* ==============================
    Edit a word (Admin only)
=================================*/
router.put("/edit-word/:id", isAdmin, async (req, res) => {
  const {
    word,
    pronunciation,
    wordDefinition,
    partOfSpeech,
    meanings,
    synonyms,
    antonyms,
    exampleSentences,
  } = req.body;
  try {
    const updatedWord = await Word.findByIdAndUpdate(
      req.params.id,
      {
        word,
        pronunciation,
        wordDefinition,
        partOfSpeech,
        meanings,
        synonyms,
        antonyms,
        exampleSentences,
      },
      { new: true }
    );
    res.status(200).json(updatedWord);
  } catch (err) {
    res.status(500).json({ message: "Failed to update word" });
  }
});

/* ==============================
    Delete a word (Admin only)
=================================*/
router.delete("/delete-word/:id", isAdmin, async (req, res) => {
  try {
    await Word.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Word deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete word" });
  }
});

// fetching search history
router.get("/search-history", async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("searchHistory");
    res.status(200).json(user.searchHistory || []);
  } catch (err) {
    res.status(500).json({ message: "Error fetching search history." });
  }
});

// fetching bookmarks
router.get("/bookmarks", async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("bookmarks");
    res.status(200).json(user.bookmarks || []);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bookmarks." });
  }
});

export default router;
