const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");
const resumeAnalysisRoutes = require("./routes/resumeAnalysis.routes");

const app = express();
<<<<<<< HEAD
app.use(express.json());
=======

// Middleware
>>>>>>> 553b45a276abc22758aa5b3752085055b232a6e5
app.use(cors());
app.use(express.json());
app.use(fileUpload());

// Routes
app.use("/api/resume-analysis", resumeAnalysisRoutes);

<<<<<<< HEAD
// Optional other routes if ready
// const jobRoutes = require("./routes/jobPosting.routes");
// const skillGapRoutes = require("./routes/skillGap.routes");
// app.use("/api/jobs", jobRoutes);
// app.use("/api/skills", skillGapRoutes);

const chatbotRoutes = require("./routes/chatbot.routes");
app.use("/api/chat", chatbotRoutes);

const trendsRoutes = require("./routes/trends.routes");
app.use("/api/trends", trendsRoutes);

const PORT = 3000;
<<<<<<< HEAD
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
=======
// Ensure Resume_Analyser folder exists
const resultFolder = path.join(__dirname, "Resume_Analyser");
if (!fs.existsSync(resultFolder)) {
    fs.mkdirSync(resultFolder, { recursive: true });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> 553b45a276abc22758aa5b3752085055b232a6e5
=======
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> 65052d0618a0bd45dc0beeb3d504dbfaec352e7c
