require("dotenv").config();
const express = require("express");
const cors = require("cors");

const careerRoutes = require("./src/routes/careerRoutes");
const userRoutes = require("./src/routes/userRoutes");
const resumeRoutes = require("./src/routes/resumeRoutes");
const personalityInterestRoutes = require("./src/routes/personalityInterestRoutes");

const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/resumes", resumeRoutes);
app.use("/api/personality-interest", personalityInterestRoutes);

connectDB();

app.get("/", (req, res) => {
    res.json({
        message: "AI Career Recommendation System Backend is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});