/* eslint-disable react/prop-types */

const WordCard = ({ word, wordDefinition }) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <h3 className="text-lg font-bold">{word}</h3>
      <p>{wordDefinition}</p>
    </div>
  );
};

export default WordCard;
