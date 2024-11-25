import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WordSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const API = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    withCredentials: true,
  });
  // const fetchWord = (word) => API.get(`/words/${word}`);

  // Debounce function to optimize search
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const fetchWord = async (value) => {
    try {
      if (!value) {
        setSearchResults([]); // Clear results if input is empty
        return;
      }

      const { data } = await API.get(`/words`);
      const results = data.filter((word) =>
        word.word.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching words", error);
    }
  };

  // Debounced version of the fetchWords function
  const debouncedFetchWords = debounce(fetchWord, 300);

  // Handle search input changes
  const handleSearch = (value) => {
    setSearchInput(value); // Update the search input state

    debouncedFetchWords(value); // Trigger the debounced fetch

    /* if (value) {
      fetchWord(value); // Fetch filtered results when input has value
    } else {
      setSearchResults([]); // Clear results when input is empty
    } */
  };

  const handleSearchWordDetails = (_id) => {
    navigate(`words/${_id}`);
  };

  return (
    <div className="container px-5 py-3">
      {/* Header */}
      <div className="lg:flex justify-center items-center mb-2 text-center">
        <div className="px-5">
          <h1 className="lg:text-4xl text-2xl font-bold">MNA Dictionary</h1>
          <p className="text-lg">Look up definitions and more!</p>
        </div>

        {/* Search Input */}
        <div className="px-5">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for a word..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Results Table */}
      <div className="flex justify-center w-full">
        <table className="table-auto w-full">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="border py-2 text-xl">Word</th>
              <th className="border py-2 text-xl">Spelling</th>
              <th className="border py-2 text-xl">Meaning</th>
              <th className="border py-2 text-xl">Word Details</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.length > 0 ? (
              searchResults.map((w) => (
                <tr key={w._id}>
                  <td className="border px-5">{w.word}</td>
                  <td className="border px-5">{w.pronunciation}</td>
                  <td className="border px-5">{w.meanings[0]}</td>
                  <td className="border px-5 py-1">
                    <button
                      onClick={() => handleSearchWordDetails(w._id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WordSearch;
