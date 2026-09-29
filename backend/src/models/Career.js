const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    requiredSkills: {
      type: [String],
      default: [],
    },

    interests: {
      type: [String],
      default: [],
    },

    education: {
      type: String,
      default: "",
    },

    experienceLevel: {
      type: String,
      default: "Beginner",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Career", careerSchema);