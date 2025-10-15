// Load environment variables from .env
require('dotenv').config();

const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");
const OpenAI = require("openai");
const { v4: uuidv4 } = require("uuid");

// Configure OpenAI
const openai = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

// Result folder setup
const resultFolder = path.join(__dirname, "../Resume_Analyser");
if (!fs.existsSync(resultFolder)) {
    fs.mkdirSync(resultFolder, { recursive: true });
}

// Status tracking
let analysisStatus = { isProcessing: false, lastFile: null };

const uploadAndAnalyzeResume = async (resumeFile) => {
    try {
        const uniqueName = `${uuidv4()}_${resumeFile.name}`;
        const filePath = path.join(resultFolder, uniqueName);

        // Save uploaded file
        await resumeFile.mv(filePath);
        
        analysisStatus.isProcessing = true;
        analysisStatus.lastFile = uniqueName;

        // Read result.json template if exists
        const resultPath = path.join(resultFolder, 'result.json');
        let analysisResult = {
            input: { resume_pdf: uniqueName },
            output: []
        };

        if (fs.existsSync(resultPath)) {
            analysisResult = JSON.parse(fs.readFileSync(resultPath, 'utf8'));
        }

        // Save analysis result
        fs.writeFileSync(resultPath, JSON.stringify(analysisResult, null, 2));
        
        analysisStatus.isProcessing = false;
        return analysisResult;
    } catch (error) {
        analysisStatus.isProcessing = false;
        throw error;
    }
};

const getResults = async () => {
    const resultPath = path.join(resultFolder, 'result.json');
    if (!fs.existsSync(resultPath)) {
        return { error: 'No analysis results available' };
    }
    return JSON.parse(fs.readFileSync(resultPath, 'utf8'));
};

const getStatus = () => {
    return analysisStatus;
};

module.exports = { uploadAndAnalyzeResume, getResults, getStatus };
