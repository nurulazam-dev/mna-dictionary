import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              DictionaryApp
            </h2>
            <p className="text-sm">
              Discover, learn, and grow with the most comprehensive dictionary
              at your fingertips.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-100 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dictionary"
                  className="hover:text-gray-100 transition"
                >
                  Dictionary
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-100 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-100 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="hover:text-gray-100 transition"
                >
                  Favorites
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscription Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Subscribe</h3>
            <p className="text-sm mb-4">
              Get the latest updates and features straight to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-500 transition">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-100 transition"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-100 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-100 transition"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-100 transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:support@dictionaryapp.com"
                className="text-gray-400 hover:text-gray-100 transition"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} DictionaryApp. All Rights
            Reserved.
          </p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gray-100">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-100">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
