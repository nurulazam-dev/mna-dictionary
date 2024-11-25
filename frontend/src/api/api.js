import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

export const register = (formData) => API.post("/auth/register", formData);
export const login = (formData) => API.post("/auth/login", formData);
export const logout = () => API.post("/auth/logout");

// Word Management
export const fetchWord = (word) => API.get(`/words/${word}`);
export const fetchWords = () => API.get("/words");
export const addWord = (data) => API.post("/words", data);
export const deleteWord = (id) => API.delete(`/words/${id}`);

// User Management
export const fetchUsers = () => API.get("/users");
export const deleteUser = (id) => API.delete(`/users/${id}`);
