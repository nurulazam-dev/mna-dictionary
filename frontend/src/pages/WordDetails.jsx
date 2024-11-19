/* eslint-disable react/prop-types */
import { useSpeechSynthesis } from "react-speech-kit";

const WordDetails = ({ word }) => {
  const { speak } = useSpeechSynthesis();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{word.word}</h1>
      <p>{word.definition}</p>
      <p>Part of Speech: {word.partOfSpeech}</p>
      <button
        onClick={() => speak({ text: word.definition })}
        className="bg-blue-500 text-white py-2 px-4 mt-4"
      >
        Listen to Pronunciation
      </button>
    </div>
  );
};

export default WordDetails;
