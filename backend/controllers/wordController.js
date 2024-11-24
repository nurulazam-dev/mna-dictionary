import Word from "../models/Word.js";

// Add Word (Admin)
export const addWord = async (req, res) => {
  try {
    const word = await Word.create(req.body);
    res.status(201).json({ message: "Word added", word });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all words (Admin only)
export const getWords = async (req, res) => {
  try {
    const words = await Word.find(); // Fetch all words from the database
    res.json(words);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch words" });
  }
};

// Get Word
export const getWord = async (req, res) => {
  try {
    const word = await Word.findOne({ word: req.params.word });
    if (!word) return res.status(404).json({ error: "Word not found" });
    res.json(word);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a word (Admin only)
export const deleteWord = async (req, res) => {
  try {
    const word = await Word.findByIdAndDelete(req.params.id); // Find and delete word by ID
    if (!word) {
      return res.status(404).json({ error: "Word not found" });
    }
    res.json({ message: "Word deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete word" });
  }
};

// Update a word (Admin only)
export const updateWord = async (req, res) => {
  try {
    const word = await Word.findByIdAndUpdate(
      req.params.id, // Find word by ID
      req.body, // Update with new data from request body
      { new: true } // Return the updated document
    );

    if (!word) {
      return res.status(404).json({ error: "Word not found" });
    }

    res.json({ message: "Word updated successfully", word });
  } catch (error) {
    res.status(500).json({ error: "Failed to update word" });
  }
};
