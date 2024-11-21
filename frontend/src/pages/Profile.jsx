import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome, {user?.email}</h1>
      <button
        onClick={toggleTheme}
        className="mt-4 bg-gray-700 text-white py-2 px-4"
      >
        Toggle to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default Profile;
