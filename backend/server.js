const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");
const resumeAnalysisRoutes = require("./routes/resumeAnalysis.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload());

// Routes
app.use("/api/resume-analysis", resumeAnalysisRoutes);

// Ensure Resume_Analyser folder exists
const resultFolder = path.join(__dirname, "Resume_Analyser");
if (!fs.existsSync(resultFolder)) {
    fs.mkdirSync(resultFolder, { recursive: true });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
