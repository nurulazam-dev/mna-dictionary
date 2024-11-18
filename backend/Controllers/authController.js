import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "Email already in use" });
  }

  const user = await User.create({ name, email, password });
  const token = generateToken(user._id);

  res.cookie("token", token, { httpOnly: true });
  res.status(201).json({ message: "User registered", user });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user._id);
  res.cookie("token", token, { httpOnly: true });
  res.json({ message: "Login successful", user });
};

module.exports = { registerUser, loginUser };
