import express from "express";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";
import {
  addWord,
  deleteWord,
  getWord,
  getWords,
  updateWord,
} from "../controllers/wordController.js";

const router = express.Router();

router.get("/:word", getWord); // Get word details

// Admin routes
// router.get("/", isAuthenticated, isAdmin, getWords);
router.get("/", getWords);
router.post("/", isAuthenticated, isAdmin, addWord);
router.delete("/:id", isAuthenticated, isAdmin, deleteWord);
router.put("/:id", isAuthenticated, isAdmin, updateWord);

export default router;
