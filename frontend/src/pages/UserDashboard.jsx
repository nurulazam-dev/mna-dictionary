import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const UserDashboard = () => {
  const [user, setUser] = useState({});
  const [searchHistory, setSearchHistory] = useState([]);
  const [bookmarkedWords, setBookmarkedWords] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Fetch user data and related information
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(`${BASE_URL}/user/profile`);
        setUser(userResponse.data);

        const historyResponse = await axios.get(
          `${BASE_URL}/user/search-history`
        );
        setSearchHistory(historyResponse.data);

        const bookmarkResponse = await axios.get(`${BASE_URL}/user/bookmarks`);
        setBookmarkedWords(bookmarkResponse.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <div
      className={`p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>

      {/* Profile Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Profile</h2>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </div>

      {/* Search History Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Search History</h2>
        {searchHistory.length > 0 ? (
          <ul className="list-disc pl-4">
            {searchHistory.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        ) : (
          <p>No search history found.</p>
        )}
      </div>

      {/* Bookmarked Words Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Bookmarked Words</h2>
        {bookmarkedWords.length > 0 ? (
          <ul className="list-disc pl-4">
            {bookmarkedWords.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        ) : (
          <p>No bookmarks found.</p>
        )}
      </div>

      {/* Settings Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Settings</h2>
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
      </div>

      {/* Logout Button */}
      <div>
        <button
          className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-700"
          onClick={() => {
            axios.post("/api/user/logout").then(() => {
              window.location.href = "/login";
            });
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
