import express from "express";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";
import { getUsers, deleteUser } from "../controllers/adminController.js";
const router = express.Router();

// Admin routes
router.get("/users", isAuthenticated, isAdmin, getUsers);
router.delete("/users/:id", isAuthenticated, isAdmin, deleteUser);

export default router;
