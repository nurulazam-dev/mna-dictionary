const Word = require("../models/Word");

const searchWord = async (req, res) => {
  const { query } = req.query;

  if (!query) return res.status(400).json({ message: "Search query missing" });

  const words = await Word.find({ word: { $regex: query, $options: "i" } });
  res.json(words);
};

const addWord = async (req, res) => {
  const {
    word,
    definition,
    partOfSpeech,
    examples,
    synonyms,
    antonyms,
    pronunciation,
  } = req.body;

  const wordExists = await Word.findOne({ word });
  if (wordExists)
    return res.status(400).json({ message: "Word already exists" });

  const newWord = await Word.create({
    word,
    definition,
    partOfSpeech,
    examples,
    synonyms,
    antonyms,
    pronunciation,
  });
  res.status(201).json({ message: "Word added successfully", newWord });
};

module.exports = { searchWord, addWord };
