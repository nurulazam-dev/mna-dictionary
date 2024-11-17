const Word = require("../models/WordSchema");

const searchWord = async (req, res) => {
  const { query } = req.query;

  if (!query) return res.status(400).json({ message: "Search query missing" });

  const words = await Word.find({ word: { $regex: query, $options: "i" } });
  res.json(words);
};

const addWord = async (req, res) => {
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

  const wordExists = await Word.findOne({ word });
  if (wordExists)
    return res.status(400).json({ message: "Word already exists" });

  const newWord = await Word.create({
    word,
    pronunciation,
    wordDefinition,
    partOfSpeech,
    meanings,
    synonyms,
    antonyms,
    exampleSentences,
  });
  res.status(201).json({ message: "Word added successfully", newWord });
};

module.exports = { searchWord, addWord };
