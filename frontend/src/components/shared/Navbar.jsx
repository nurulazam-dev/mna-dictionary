import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  console.log(user?.role);

  return (
    <nav className="bg-blue-600 px-4 py-2 text-white flex items-center justify-between">
      <Link to="/" className="text-lg font-bold">
        MNA Dictionary
      </Link>
      <div>
        {user?.role === "admin" ? (
          <Link to="/admin-dashboard" className="mr-4">
            Dashboard
          </Link>
        ) : (
          ""
        )}
        {user ? (
          <>
            <Link to="/profile" className="mr-4">
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">
              Login
            </Link>
            <Link to="/register" className="bg-green-500 px-4 py-2 rounded">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
