import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Dictionary App
      </Link>
      <div className="flex items-center space-x-4">
        <Link to="/profile" className="hover:underline">
          Profile
        </Link>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
