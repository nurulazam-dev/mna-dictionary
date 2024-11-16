const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
  word: { type: String, required: true, unique: true },
  definition: { type: String, required: true },
  partOfSpeech: { type: String },
  examples: [String],
  synonyms: [String],
  antonyms: [String],
  pronunciation: { type: String },
});

module.exports = mongoose.model("Word", wordSchema);
