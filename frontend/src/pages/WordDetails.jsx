import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";

const WordDetails = () => {
  const { word } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await api.get(`/words/${word}`);
        setDetails(data);
      } catch (error) {
        console.error(
          "Error fetching word details:",
          error.response.data.message
        );
      }
    };
    fetchDetails();
  }, [word]);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold">{details.word}</h2>
      <p>
        <strong>Part of Speech:</strong> {details.partOfSpeech}
      </p>
      <p>
        <strong>Definition:</strong> {details.definition}
      </p>
      <p>
        <strong>Example:</strong> {details.example}
      </p>
      <p>
        <strong>Synonyms:</strong> {details.synonyms?.join(", ")}
      </p>
      <p>
        <strong>Antonyms:</strong> {details.antonyms?.join(", ")}
      </p>
    </div>
  );
};

export default WordDetails;
