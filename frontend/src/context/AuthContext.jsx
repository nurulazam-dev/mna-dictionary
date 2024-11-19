import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await axios.post("/api/auth/login", { email, password });
    setUser(response.data.user);
  };

  const logout = () => {
    setUser(null);
    axios.post("/api/auth/logout");
  };

  useEffect(() => {
    // Check if user is logged in on app load
    const checkAuth = async () => {
      try {
        const response = await axios.get("/api/auth/me");
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
