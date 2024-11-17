import { useState, useEffect } from "react";
import api from "../utils/api";

const Profile = () => {
  const [user, setUser] = useState({});
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get("/auth/profile");
        setUser(data.user);
        setSearchHistory(data.searchHistory);
      } catch (error) {
        console.error("Error fetching profile:", error.response.data.message);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">My Profile</h2>
      <div className="mt-4">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <h3 className="mt-4 font-bold">Search History:</h3>
        <ul>
          {searchHistory.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
