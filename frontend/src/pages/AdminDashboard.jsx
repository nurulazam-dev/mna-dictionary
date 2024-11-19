import { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [words, setWords] = useState([]);
  const [users, setUsers] = useState([]);
  const [newWord, setNewWord] = useState({
    word: "",
    pronunciation: "",
    wordDefinition: "",
    partOfSpeech: "",
    meanings: "",
    synonyms: "",
    antonyms: "",
    exampleSentences: "",
  });

  // Fetch words and users when component mounts
  useEffect(() => {
    const fetchWordsAndUsers = async () => {
      try {
        const wordResponse = await axios.get("/api/admin/words");
        setWords(wordResponse.data);

        const userResponse = await axios.get("/api/admin/users");
        setUsers(userResponse.data);
      } catch (err) {
        console.error("Error fetching words and users", err);
      }
    };

    fetchWordsAndUsers();
  }, []);

  // Add new word
  const handleAddWord = async () => {
    try {
      await axios.post("/api/admin/add-word", newWord);
      setWords((prevWords) => [newWord, ...prevWords]);
      setNewWord({
        word: "",
        pronunciation: "",
        wordDefinition: "",
        partOfSpeech: "",
        meanings: "",
        synonyms: "",
        antonyms: "",
        exampleSentences: "",
      });
    } catch (err) {
      console.error("Error adding word:", err);
    }
  };

  // Deactivate user
  const handleDeactivateUser = async (userId) => {
    try {
      await axios.put(`/api/admin/deactivate-user/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (err) {
      console.error("Error deactivating user:", err);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      {/* Word Management Section */}
      <div>
        <h2>Manage Words</h2>
        <input
          type="text"
          placeholder="Word"
          value={newWord.word}
          onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
        />
        <textarea
          placeholder="Definition"
          value={newWord.wordDefinition}
          onChange={(e) =>
            setNewWord({ ...newWord, wordDefinition: e.target.value })
          }
        />
        {/* Add additional fields for partOfSpeech, synonyms, etc. */}
        <button onClick={handleAddWord}>Add Word</button>

        <div>
          <h3>Existing Words</h3>
          {words.map((word) => (
            <div key={word._id}>
              <h4>{word.word}</h4>
              <p>{word.wordDefinition}</p>
              {/* Add buttons for Edit and Delete here */}
            </div>
          ))}
        </div>
      </div>

      {/* User Management Section */}
      <div>
        <h2>Manage Users</h2>
        {users.map((user) => (
          <div key={user._id}>
            <p>{user.email}</p>
            <button onClick={() => handleDeactivateUser(user._id)}>
              Deactivate User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
