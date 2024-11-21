import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const Home = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(`${BASE_URL}/words/search?query=${query}`);
    setResults(response.data);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for a word..."
        className="border p-2 w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-green-500 text-white py-2 px-4 mt-2"
      >
        Search
      </button>

      <ul className="mt-4">
        {results?.map((word) => (
          <li key={word._id} className="border-b py-2">
            {word.word}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
