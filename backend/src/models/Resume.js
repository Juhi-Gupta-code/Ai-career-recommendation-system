const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    fileName: {
      type: String,
      required: true,
    },

    filePath: {
      type: String,
      required: true,
    },

    // Data extracted by the Python resume parser
    category: {
      type: String,
      default: "",
    },

    skills: {
      type: String,
      default: "",
    },

    education: {
      type: String,
      default: "",
    },

    experience: {
      type: String,
      default: "",
    },

    certifications: {
      type: String,
      default: "",
    },

    resumeText: {
      type: String,
      default: "",
    },

    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resume", resumeSchema);