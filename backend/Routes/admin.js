const express = require("express");
const Word = require("../models/Word.js");
const User = require("../models/User.js");
const router = express.Router();

// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  } else {
    return res.status(403).json({ message: "Access denied" });
  }
};

// Add a new word (Admin only)
router.post("/add-word", isAdmin, async (req, res) => {
  const { word, definition, partOfSpeech, synonyms, antonyms, examples } =
    req.body;

  try {
    const newWord = new Word({
      word,
      definition,
      partOfSpeech,
      synonyms,
      antonyms,
      examples,
    });
    await newWord.save();
    res.status(201).json({ message: "Word added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to add word" });
  }
});

// Edit a word (Admin only)
router.put("/edit-word/:id", isAdmin, async (req, res) => {
  const { word, definition, partOfSpeech, synonyms, antonyms, examples } =
    req.body;
  try {
    const updatedWord = await Word.findByIdAndUpdate(
      req.params.id,
      { word, definition, partOfSpeech, synonyms, antonyms, examples },
      { new: true }
    );
    res.status(200).json(updatedWord);
  } catch (err) {
    res.status(500).json({ message: "Failed to update word" });
  }
});

// Delete a word (Admin only)
router.delete("/delete-word/:id", isAdmin, async (req, res) => {
  try {
    await Word.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Word deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete word" });
  }
});

// Get all users (Admin only)
router.get("/users", isAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

// Deactivate a user (Admin only)
router.put("/deactivate-user/:id", isAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.active = false;
    await user.save();
    res.status(200).json({ message: "User deactivated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to deactivate user" });
  }
});

module.exports = router;
