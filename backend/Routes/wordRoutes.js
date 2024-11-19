import express from "express";
import { authenticate, adminOnly } from "../middleware/authMiddleware";
import { searchWord, addWord } from "../controllers/wordController";

const router = express.Router();

router.get("/search", authenticate, searchWord);
router.post("/add", authenticate, adminOnly, addWord);

export default router;
