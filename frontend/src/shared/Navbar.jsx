import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulating user login state
  const [username, setUsername] = useState("John Doe"); // Simulating logged-in user's name

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <nav className="bg-slate-50 text-black font-bold shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          DictionaryApp
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200 transition">
            About
          </Link>
          <Link to="/dictionary" className="hover:text-gray-200 transition">
            Dictionary
          </Link>
          <Link to="/contact" className="hover:text-gray-200 transition">
            Contact
          </Link>
          <Link to="/favorites" className="hover:text-gray-200 transition">
            Favorites
          </Link>

          {/* User Authentication Links */}
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="px-4 py-2 bg-violet-600 rounded hover:bg-green-600 transition text-white"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="font-medium">Hello, {username}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-blue-600 text-white">
          <li>
            <Link
              to="/"
              className="block px-4 py-3 hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block px-4 py-3 hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/dictionary"
              className="block px-4 py-3 hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Dictionary
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 py-3 hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="block px-4 py-3 hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Favorites
            </Link>
          </li>
          {!isLoggedIn ? (
            <li>
              <Link
                to="/login"
                className="block px-4 py-3 hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-3 hover:bg-red-600"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
