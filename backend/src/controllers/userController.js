const User = require("../models/User");

// Get logged-in user's profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Profile fetched successfully",
      user,
    });
  } catch (error) {
    console.error("Get profile error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
// Update logged-in user's profile
const updateProfile = async (req, res) => {
  try {
    const { name, skills, interests, education, experience } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Update only the fields provided
    if (name !== undefined) user.name = name;
    if (skills !== undefined) user.skills = skills;
    if (interests !== undefined) user.interests = interests;
    if (education !== undefined) user.education = education;
    if (experience !== undefined) user.experience = experience;

    await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        skills: user.skills,
        interests: user.interests,
        education: user.education,
        experience: user.experience,
      },
    });
  } catch (error) {
    console.error("Update profile error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  getProfile,
  updateProfile,
};