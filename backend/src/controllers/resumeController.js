const Resume = require("../models/Resume");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

// Upload resume
const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Please upload a PDF resume",
      });
    }

    // Prepare the PDF for the Python resume parser
    const formData = new FormData();

    formData.append("resume", fs.createReadStream(req.file.path), {
      filename: req.file.originalname,
      contentType: "application/pdf",
    });

    // Send resume to Python parser
    const parserResponse = await axios.post(
      "http://localhost:8000/parse-resume",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    );

    const parsedData = parserResponse.data;

    // Save uploaded file + parsed resume data
    const resume = await Resume.create({
      userId: req.userId,
      fileName: req.file.originalname,
      filePath: req.file.path,

      category: parsedData.Category || "",
      skills: parsedData.Skills || "",
      education: parsedData.Education || "",
      experience: parsedData.Experience || "",
      certifications: parsedData.Certifications || "",
      resumeText: parsedData.Resume_Text || "",
    });

    res.status(201).json({
      message: "Resume uploaded and parsed successfully",
      resume,
    });
  } catch (error) {
    console.error("Resume upload error:", error);

    res.status(500).json({
      message: "Resume upload or parsing failed",
      error: error.message,
    });
  }
};

module.exports = {
  uploadResume,
};