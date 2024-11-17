import { useState } from "react";
import api from "../utils/api";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.get(`/words/search?query=${query}`);
      setResults(data);
    } catch (error) {
      console.error("Search failed:", error.response.data.message);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a word..."
          className="border rounded p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">
          Search
        </button>
      </form>
      <div className="mt-4">
        {results.map((word) => (
          <div key={word._id} className="p-2 border-b">
            <h3 className="font-bold">{word.word}</h3>
            <p>{word.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
