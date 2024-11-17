const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema({
  word: { type: String, required: true, unique: true },
  pronunciation: { type: String, required: true },
  wordDefinition: { type: String, required: true },
  partOfSpeech: { type: String, required: true },
  meanings: [String],
  synonyms: [String],
  antonyms: [String],
  exampleSentences: [String],
});

module.exports = mongoose.model("Word", WordSchema);
