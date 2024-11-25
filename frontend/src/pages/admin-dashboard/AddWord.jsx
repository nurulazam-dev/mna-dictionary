import { useState } from "react";
import { addWord } from "../../api/api.js";
import { toast } from "react-toastify";

const AddWord = () => {
  const [word, setWord] = useState("");
  const [pronunciation, setPronunciation] = useState("");
  const [wordDefinition, setWordDefinition] = useState("");
  const [partOfSpeech, setPartOfSpeech] = useState("");
  const [meanings, setMeanings] = useState("");
  const [synonyms, setSynonyms] = useState("");
  const [antonyms, setAntonyms] = useState("");
  const [exampleSentences, setExampleSentences] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addWord({
        word,
        pronunciation,
        wordDefinition,
        partOfSpeech,
        meanings: meanings.split(",").map((m) => m.trim()),
        synonyms: synonyms.split(",").map((s) => s.trim()),
        antonyms: antonyms.split(",").map((a) => a.trim()),
        exampleSentences: exampleSentences.split(",").map((e) => e.trim()),
      });

      toast.success("Word added successfully!");
      setWord("");
      setPronunciation(""), setWordDefinition("");
      setPartOfSpeech("");
      setMeanings(""), setSynonyms("");
      setAntonyms("");
      setExampleSentences("");
    } catch (error) {
      toast.error("Failed to add word.", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add Word</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Pronunciation"
            value={pronunciation}
            onChange={(e) => setPronunciation(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <input
          placeholder="Definition"
          value={wordDefinition}
          onChange={(e) => setWordDefinition(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Part of Speech"
            value={partOfSpeech}
            onChange={(e) => setPartOfSpeech(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Meanings (comma-separated)"
            value={meanings}
            onChange={(e) => setMeanings(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Synonyms (comma-separated)"
            value={synonyms}
            onChange={(e) => setSynonyms(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Antonyms (comma-separated)"
            value={antonyms}
            onChange={(e) => setAntonyms(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <input
          type="text"
          placeholder="Example Sentences (comma-separated)"
          value={exampleSentences}
          onChange={(e) => setExampleSentences(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Word
        </button>
      </form>
    </div>
  );
};

export default AddWord;
