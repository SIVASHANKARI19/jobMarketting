// Load environment variables from .env
require('dotenv').config();

const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");
const OpenAI = require("openai");
const { v4: uuidv4 } = require("uuid");

// Configure OpenAI
const openai = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY,
});

// Result folder setup
const resultFolder = path.join(__dirname, "../Resume_Analyser");
if (!fs.existsSync(resultFolder)) {
  fs.mkdirSync(resultFolder, { recursive: true });
}

// Status tracking
let analysisStatus = { isProcessing: false, lastFile: null };

/**
 * Upload and Analyze Resume
 */
const uploadAndAnalyzeResume = async (resumeFile) => {
  try {
    const uniqueName = `${uuidv4()}_${resumeFile.name}`;
    const filePath = path.join(resultFolder, uniqueName);

    // ✅ Save uploaded file
    await resumeFile.mv(filePath);

    analysisStatus.isProcessing = true;
    analysisStatus.lastFile = uniqueName;

    // ✅ Step 1: Extract text from resume
    const resumeBuffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(resumeBuffer);
    const resumeText = pdfData.text || "";

    // ✅ Step 2: Load job templates (like your existing sample jobs)
    const jobs = [
      {
        job_id: "JOB1",
        job_title: "Business Analyst",
        required_skills: [
          { skill: "Excel", level: "Intermediate" },
          { skill: "Deep Learning", level: "Advanced" },
          { skill: "Statistics", level: "Beginner" },
          { skill: "AWS", level: "Intermediate" },
          { skill: "Kubernetes", level: "Advanced" },
          { skill: "Data Visualization", level: "Intermediate" },
        ],
      },
      {
        job_id: "JOB2",
        job_title: "Cloud Engineer",
        required_skills: [
          { skill: "Docker", level: "Beginner" },
          { skill: "Power BI", level: "Intermediate" },
          { skill: "Cloud Computing", level: "Intermediate" },
          { skill: "Data Visualization", level: "Beginner" },
          { skill: "Excel", level: "Advanced" },
          { skill: "Deep Learning", level: "Advanced" },
        ],
      },
      {
        job_id: "JOB3",
        job_title: "Data Scientist",
        required_skills: [
          { skill: "Machine Learning", level: "Advanced" },
          { skill: "NLP", level: "Intermediate" },
          { skill: "Kubernetes", level: "Beginner" },
          { skill: "Node.js", level: "Intermediate" },
          { skill: "Data Visualization", level: "Intermediate" },
        ],
      },
    ];

    // ✅ Step 3: Simple skill matching (no AI needed for now)
    const matchedJobs = jobs.map((job) => {
      const matching_skills = [];
      const missing_skills = [];

      job.required_skills.forEach((req) => {
        if (resumeText.toLowerCase().includes(req.skill.toLowerCase())) {
          matching_skills.push(req.skill);
        } else {
          missing_skills.push(req.skill);
        }
      });

      const accuracyRate = Math.round(
        (matching_skills.length / job.required_skills.length) * 100
      );

      return {
        job_id: job.job_id,
        job_title: job.job_title,
        matching_skills,
        missing_skills,
        level_variance: [],
        accuracy_rate: `${accuracyRate}%`,
        recommended_learning: missing_skills.map((skill) => ({
          skill,
          platform: "Coursera",
          course: `${skill} Fundamentals`,
        })),
      };
    });

    // ✅ Step 4: Build final JSON output
    const analysisResult = {
      input: {
        resume_pdf: uniqueName,
        jobs_applied: jobs,
      },
      output: matchedJobs,
    };

    // ✅ Step 5: Save result.json
    const resultPath = path.join(resultFolder, "result.json");
    fs.writeFileSync(resultPath, JSON.stringify(analysisResult, null, 2));

    analysisStatus.isProcessing = false;
    return { resultPath };
  } catch (error) {
    analysisStatus.isProcessing = false;
    throw error;
  }
};

/**
 * Get last analysis results
 */
const getResults = async () => {
  const resultPath = path.join(resultFolder, "result.json");
  if (!fs.existsSync(resultPath)) {
    return { error: "No analysis results available" };
  }
  return JSON.parse(fs.readFileSync(resultPath, "utf8"));
};

/**
 * Get current analysis status
 */
const getStatus = () => {
  return analysisStatus;
};

module.exports = { uploadAndAnalyzeResume, getResults, getStatus };
