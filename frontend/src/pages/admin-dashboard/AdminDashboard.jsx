import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className="w-5/6 bg-gray-100 p-6">
        {/* The nested route output */}
        <Outlet />
      </div>
      {/* Sidebar */}
      <div className="w-1/6 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-600">
          Dashboard
        </h2>
        <ul className="space-y-4">
          <li>
            <Link to="add-word" className="hover:underline">
              Add Word
            </Link>
          </li>
          <li>
            <Link to="manage-words" className="hover:underline">
              Manage Words
            </Link>
          </li>
          <li>
            <Link to="manage-users" className="hover:underline">
              Manage Users
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
