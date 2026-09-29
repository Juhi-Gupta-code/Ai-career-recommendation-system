const PersonalityInterest = require("../models/PersonalityInterest");

// Save personality and interest responses
const saveResponses = async (req, res) => {
  try {
    const { personalityResponses, interestResponses } = req.body;

    const response = await PersonalityInterest.findOneAndUpdate(
      { userId: req.userId },
      {
        userId: req.userId,
        personalityResponses,
        interestResponses,
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.status(200).json({
      message: "Personality and interest responses saved successfully",
      response,
    });
  } catch (error) {
    console.error("Save responses error:", error);

    res.status(500).json({
      message: "Failed to save responses",
      error: error.message,
    });
  }
};

// Get user's responses
const getResponses = async (req, res) => {
  try {
    const response = await PersonalityInterest.findOne({
      userId: req.userId,
    });

    if (!response) {
      return res.status(404).json({
        message: "No personality or interest responses found",
      });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error("Get responses error:", error);

    res.status(500).json({
      message: "Failed to get responses",
      error: error.message,
    });
  }
};

module.exports = {
  saveResponses,
  getResponses,
};