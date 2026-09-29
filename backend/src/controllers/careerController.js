const Career = require("../models/Career");

// Get all careers
const getCareers = async (req, res) => {
  try {
    const careers = await Career.find();

    res.status(200).json({
      message: "Careers fetched successfully",
      careers,
    });
  } catch (error) {
    console.error("Get careers error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  getCareers,
};