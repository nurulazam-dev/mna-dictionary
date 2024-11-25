import { useState, useEffect } from "react";
import { fetchWord, deleteWord } from "../../api/api.js";
import { toast } from "react-toastify";

const ManageWords = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    loadWords();
  }, []);

  const loadWords = async () => {
    try {
      const { data } = await fetchWord(); // Fetch all words
      setWords(data);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  const handleDeleteWord = async (id) => {
    try {
      await deleteWord(id);
      loadWords();
      toast.success("Word deleted");
    } catch (error) {
      toast.error("Error deleting word", error);
    }
  };

  return (
    <section>
      <h3 className="text-2xl font-bold">Manage Words</h3>

      <ul>
        {words.map((word) => (
          <li key={word._id} className="mb-2">
            <strong>{word?.word}</strong>: {word?.wordDefinition}
            <button
              // onClick={() => handleEditWord(word)}
              className="bg-yellow-500 text-white px-3 py-1 ml-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteWord(word._id)}
              className="bg-red-500 text-white px-3 py-1 ml-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ManageWords;
