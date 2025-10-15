const express = require("express");
const router = express.Router();
const resumeAnalysisService = require("../services/resumeAnalysis.service");

// Upload and analyze resume
router.post("/upload", async (req, res) => {
  try {
    if (!req.files || !req.files.resume) {
      return res.status(400).json({ error: "No resume file uploaded" });
    }
    await resumeAnalysisService.uploadAndAnalyzeResume(req.files.resume);
    res.json({ message: "Resume uploaded and analysis started" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get analysis results
router.get("/results", async (req, res) => {
  try {
    const results = await resumeAnalysisService.getResults();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get analysis status
router.get("/status", (req, res) => {
  const status = resumeAnalysisService.getStatus();
  res.json(status);
});

module.exports = router;
