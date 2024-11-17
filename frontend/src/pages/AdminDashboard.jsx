import { useState, useEffect } from "react";
import api from "../utils/api";

const AdminDashboard = () => {
  const [words, setWords] = useState([]);
  const [form, setForm] = useState({
    word: "",
    definition: "",
    partOfSpeech: "",
  });

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const { data } = await api.get("/words");
        setWords(data);
      } catch (error) {
        console.error("Error fetching words:", error.response.data.message);
      }
    };
    fetchWords();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/words", form);
      alert("Word added successfully!");
      setForm({ word: "", definition: "", partOfSpeech: "" });
    } catch (error) {
      console.error("Error adding word:", error.response.data.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          value={form.word}
          onChange={(e) => setForm({ ...form, word: e.target.value })}
          placeholder="Word"
          className="border p-2 w-full"
        />
        <input
          type="text"
          value={form.definition}
          onChange={(e) => setForm({ ...form, definition: e.target.value })}
          placeholder="Definition"
          className="border p-2 w-full"
        />
        <input
          type="text"
          value={form.partOfSpeech}
          onChange={(e) => setForm({ ...form, partOfSpeech: e.target.value })}
          placeholder="Part of Speech"
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Word
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Existing Words</h3>
        {words.map((word) => (
          <div key={word._id} className="p-2 border-b">
            <h4 className="font-bold">{word.word}</h4>
            <p>{word.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
