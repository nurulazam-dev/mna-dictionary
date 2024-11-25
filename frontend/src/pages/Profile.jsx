import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user)
    return (
      <p className="text-center text-red-500">
        Please log in to view your profile.
      </p>
    );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Profile</h2>
      <div className="mt-4">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold">Search History</h3>
        <ul className="list-disc ml-6">
          {user.searchHistory?.length > 0 ? (
            user.searchHistory.map((word, index) => <li key={index}>{word}</li>)
          ) : (
            <p>No search history available.</p>
          )}
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold">Bookmarked Words</h3>
        <ul className="list-disc ml-6">
          {user.bookmarkedWords?.length > 0 ? (
            user.bookmarkedWords.map((word, index) => (
              <li key={index}>{word}</li>
            ))
          ) : (
            <p>No bookmarked words available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
