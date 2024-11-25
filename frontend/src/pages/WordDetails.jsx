/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { fetchWord } from "../api/api";

const WordDetails = ({ word }) => {
  const [details, setDetails] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWordDetails = async () => {
      try {
        const { data } = await fetchWord(word);
        setDetails(data);
      } catch (error) {
        console.error(
          "Failed to fetch word details",
          error.response?.data?.error || error.message
        );
        setDetails(null);
      } finally {
        // setLoading(false);
      }
    };

    if (word) getWordDetails();
  }, [word]);

  // if (loading) return <p className="text-center">Loading...</p>;

  if (!details) {
    return (
      <p className="text-center text-red-500">
        Word not found or an error occurred.
      </p>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">{details?.word || "Unknown Word"}</h2>
      <p>
        <strong>Definition:</strong>{" "}
        {details?.wordDefinition || "No definition available"}
      </p>
      <p>
        <strong>Part of Speech:</strong> {details?.partOfSpeech || "N/A"}
      </p>
      <p>
        <strong>Pronunciation:</strong> {details?.pronunciation || "N/A"}
      </p>

      <div className="mt-4">
        <h3 className="text-xl font-bold">Synonyms</h3>
        <ul className="list-disc ml-6">
          {details.synonyms && details.synonyms.length > 0 ? (
            details.synonyms.map((synonym, index) => (
              <li key={index}>{synonym}</li>
            ))
          ) : (
            <p>No synonyms available.</p>
          )}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold">Antonyms</h3>
        <ul className="list-disc ml-6">
          {details.antonyms && details.antonyms.length > 0 ? (
            details.antonyms.map((antonym, index) => (
              <li key={index}>{antonym}</li>
            ))
          ) : (
            <p>No antonyms available.</p>
          )}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold">Examples</h3>
        <ul className="list-disc ml-6">
          {details.examples && details.examples.length > 0 ? (
            details.examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))
          ) : (
            <p>No examples available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default WordDetails;
