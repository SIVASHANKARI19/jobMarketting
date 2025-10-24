const {
  uploadAndAnalyzeResume,
  getResults,
  getStatus,
} = require("../services/resumeAnalysis.service");

const uploadResume = async (req, res) => {
  try {
    if (!req.files || !req.files.resume)
      return res.status(400).json({ success: false, message: "No resume uploaded" });

    const resumeFile = req.files.resume;
    const result = await uploadAndAnalyzeResume(resumeFile);

    res.json({ success: true, message: "Resume analyzed successfully", resultPath: result.resultPath });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message || "Failed to analyze resume" });
  }
};

const getAnalysisResults = (req, res) => {
  const data = getResults();
  if (!data) return res.status(404).json({ success: false, message: "No results found" });
  res.json({ success: true, data });
};

const getAnalysisStatus = (req, res) => {
  res.json({ status: getStatus() });
};

module.exports = { uploadResume, getAnalysisResults, getAnalysisStatus };
