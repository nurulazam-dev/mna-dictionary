const express = require("express");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const { searchWord, addWord } = require("../controllers/wordController");

const router = express.Router();
router.get("/search", protect, searchWord);
router.post("/add", protect, adminOnly, addWord);

module.exports = router;
