import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold">
          DictionaryApp
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/dictionary" className="hover:text-blue-300">
              Dictionary
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-300">
              Contact
            </Link>
          </li>
        </ul>

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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-blue-600 shadow-md md:hidden">
            <li className="border-b border-blue-500">
              <Link
                to="/"
                className="block px-4 py-3 hover:bg-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="border-b border-blue-500">
              <Link
                to="/about"
                className="block px-4 py-3 hover:bg-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="border-b border-blue-500">
              <Link
                to="/dictionary"
                className="block px-4 py-3 hover:bg-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Dictionary
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-3 hover:bg-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
