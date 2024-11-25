/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AuthForm = ({ formData, setFormData, onSubmit, isRegister }) => {
  return (
    <section className="w-full max-w-[420px] mx-auto lg:p-10 lg:pt-2 p-4 mt-6">
      <form onSubmit={onSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-xl text-center font-bold mb-4">
          {isRegister ? "Sign Up" : "Login"}
        </h2>
        {isRegister && (
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mb-4 w-full px-3 py-2 border rounded"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mb-4 w-full px-3 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="mb-4 w-full px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isRegister ? "Sign Up" : "Login"}
        </button>

        {isRegister ? (
          <p className="mt-5 text-textColor text-center lg:text-[15px] text-[13px]">
            Already have an account?{" "}
            <Link to="/login" className="text-violet-800 font-medium">
              Please Login
            </Link>
          </p>
        ) : (
          <p className="mt-5 text-textColor text-center lg:text-[15px] text-[13px]">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-violet-800 font-medium">
              Please Register
            </Link>
          </p>
        )}
      </form>
    </section>
  );
};

export default AuthForm;
