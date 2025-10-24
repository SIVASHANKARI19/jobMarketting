const express = require("express");
const app = express();
app.use(express.json());

// Middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload());

// Routes
app.use("/api/resume-analysis", resumeAnalysisRoutes);

const cors = require("cors");
app.use(cors());
const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

const jobPostingRoutes = require("./routes/jobPosting.routes");
app.use("/api/jobs", jobPostingRoutes);

const chatbotRoutes = require("./routes/chatbot.routes");
app.use("/api/chat", chatbotRoutes);

const trendsRoutes = require("./routes/trends.routes");
app.use("/api/trends", trendsRoutes);

const PORT = 3000;
// Ensure Resume_Analyser folder exists
const resultFolder = path.join(__dirname, "Resume_Analyser");
if (!fs.existsSync(resultFolder)) {
    fs.mkdirSync(resultFolder, { recursive: true });
}

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
