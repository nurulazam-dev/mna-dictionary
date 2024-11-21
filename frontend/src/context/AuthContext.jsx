import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    setUser(response.data.user);
  };

  const logout = () => {
    setUser(null);
    axios.post(`${BASE_URL}/auth/logout`);
  };

  useEffect(() => {
    // Check if user is logged in on app load
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/auth/me`);
        setUser(response.data.user);
      } catch {
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
