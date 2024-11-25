import { useState, useEffect } from "react";
import { fetchUsers, deleteUser } from "../../api/api.js";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const { data } = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id} className="mb-2">
            <strong>{user.name}</strong> ({user.email})
            <button
              onClick={() => handleDeleteUser(user._id)}
              className="bg-red-500 text-white px-3 py-1 ml-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
