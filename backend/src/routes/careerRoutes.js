const express = require("express");
const { getCareers } = require("../controllers/careerController");

const router = express.Router();

// Get all careers
router.get("/", getCareers);

module.exports = router;