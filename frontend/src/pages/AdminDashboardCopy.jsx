import { useState, useEffect } from "react";
import {
  fetchWord,
  addWord,
  deleteWord,
  fetchUsers,
  deleteUser,
} from "../api/api.js";

const AdminDashboardCopy = () => {
  const [words, setWords] = useState([]);
  const [users, setUsers] = useState([]);
  const [newWord, setNewWord] = useState({
    word: "",
    pronunciation: "",
    wordDefinition: "",
    partOfSpeech: "",
    meanings: [],
    synonyms: [],
    antonyms: [],
    exampleSentences: [],
  });

  const [editingWord, setEditingWord] = useState(null);

  useEffect(() => {
    loadWords();
    loadUsers();
  }, []);

  const loadWords = async () => {
    try {
      const { data } = await fetchWord(); // Fetch all words
      setWords(data);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  const loadUsers = async () => {
    try {
      const { data } = await fetchUsers(); // Fetch all users
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleAddWord = async (e) => {
    e.preventDefault();
    try {
      await addWord(newWord);
      setNewWord({
        word: "",
        pronunciation: "",
        wordDefinition: "",
        partOfSpeech: "",
        meanings: [],
        synonyms: [],
        antonyms: [],
        exampleSentences: [],
      });
      loadWords();
    } catch (error) {
      console.error("Error adding word:", error);
    }
  };

  const handleDeleteWord = async (id) => {
    try {
      await deleteWord(id);
      loadWords();
    } catch (error) {
      console.error("Error deleting word:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEditWord = (word) => {
    setEditingWord(word);
    setNewWord(word);
  };

  const handleUpdateWord = async (e) => {
    e.preventDefault();
    try {
      await addWord(editingWord._id, newWord);
      setEditingWord(null);
      setNewWord({
        word: "",
        pronunciation: "",
        wordDefinition: "",
        partOfSpeech: "",
        meanings: [],
        synonyms: [],
        antonyms: [],
        exampleSentences: [],
      });
      loadWords();
    } catch (error) {
      console.error("Error updating word:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Admin Dashboard</h2>

      {/* Word Management */}
      <section className="mt-6">
        <h3 className="text-2xl font-bold">Manage Words</h3>
        <form
          onSubmit={editingWord ? handleUpdateWord : handleAddWord}
          className="mb-4"
        >
          <input
            type="text"
            placeholder="Word"
            value={newWord.word}
            onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
            className="border rounded px-3 py-2 mr-2"
          />
          <input
            type="text"
            placeholder="Pronunciation"
            value={newWord.pronunciation}
            onChange={(e) =>
              setNewWord({ ...newWord, pronunciation: e.target.value })
            }
            className="border rounded px-3 py-2 mr-2"
          />
          <input
            type="text"
            placeholder="Definition"
            value={newWord.wordDefinition}
            onChange={(e) =>
              setNewWord({ ...newWord, wordDefinition: e.target.value })
            }
            className="border rounded px-3 py-2 mr-2"
          />
          <input
            type="text"
            placeholder="Part of Speech"
            value={newWord.partOfSpeech}
            onChange={(e) =>
              setNewWord({ ...newWord, partOfSpeech: e.target.value })
            }
            className="border rounded px-3 py-2 mr-2"
          />
          {/* meanings */}
          <input
            type="text"
            placeholder="meanings"
            value={newWord.meanings}
            onChange={(e) =>
              setNewWord({ ...newWord, meanings: e.target.value })
            }
            className="border rounded px-3 py-2 mr-2"
          />
          {/* synonyms */}
          <input
            type="text"
            placeholder="synonyms"
            value={newWord.synonyms}
            onChange={(e) =>
              setNewWord({ ...newWord, synonyms: e.target.value })
            }
            className="border rounded px-3 py-2 mr-2"
          />
          {/* antonyms */}
          <input
            type="text"
            placeholder="antonyms"
            value={newWord.antonyms}
            onChange={(e) =>
              setNewWord({ ...newWord, antonyms: e.target.value })
            }
            className="border rounded px-3 py-2 mr-2"
          />
          {/* exampleSentences */}
          <input
            type="text"
            placeholder="exampleSentences"
            value={newWord.exampleSentences}
            onChange={(e) =>
              setNewWord({ ...newWord, exampleSentences: e.target.value })
            }
            className="border rounded px-3 py-2 mr-2"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {editingWord ? "Update Word" : "Add Word"}
          </button>
        </form>

        <ul>
          {words.map((word) => (
            <li key={word._id} className="mb-2">
              <strong>{word.word}</strong>: {word.wordDefinition}
              <button
                onClick={() => handleEditWord(word)}
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

      {/* User Management */}
      <section className="mt-6">
        <h3 className="text-2xl font-bold">Manage Users</h3>
        <ul>
          {users?.map((user) => (
            <li key={user?._id} className="mb-2">
              <strong>{user?.name}</strong> ({user?.email})
              <button
                onClick={() => handleDeleteUser(user._id)}
                className="bg-red-500 text-white px-3 py-1 ml-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboardCopy;
