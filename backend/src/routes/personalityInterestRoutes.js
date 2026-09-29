const express = require("express");

const {
  saveResponses,
  getResponses,
} = require("../controllers/personalityInterestController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Save or update personality and interest responses
router.post("/", protect, saveResponses);

// Get user's responses
router.get("/", protect, getResponses);

module.exports = router;