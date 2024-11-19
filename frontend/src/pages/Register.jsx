import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validate password match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Send signup request to backend
    try {
      await axios.post("/api/auth/register", { email, password });
      setSuccess(true);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 text-center mb-4">
            Signup successful! You can now log in.
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="block w-full p-3 border rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="block w-full p-3 border rounded mb-4"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="block w-full p-3 border rounded mb-6"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-3 rounded hover:bg-blue-600 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
