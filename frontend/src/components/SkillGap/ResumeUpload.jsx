import React, { useState } from "react";
import PropTypes from "prop-types";
import { ResumeAnalysisService } from "../../services/resumeAnalysisService.js"; // Adjust path
// import LoadingSpinner from "../common/LoadingSpinner"; // Optional spinner component

const ResumeUpload = ({ onResumeUpload }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Please upload a valid PDF resume.");
    }
  };

  const waitForAnalysis = async () => {
    const maxAttempts = 10;
    const delay = 2000; // 2 seconds
    for (let i = 0; i < maxAttempts; i++) {
      const status = await ResumeAnalysisService.getAnalysisStatus();
      if (status.status === "done") {
        return await ResumeAnalysisService.getAnalysisResults();
      }
      await new Promise((res) => setTimeout(res, delay));
    }
    throw new Error("Analysis timed out");
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF file first!");
      return;
    }

    if (typeof onResumeUpload !== "function") {
      console.error("onResumeUpload is not a function");
      return;
    }

    setUploading(true);
    setLoadingAnalysis(true);

    try {
      // Upload the resume and call the parent handler
      const uploadResult = await ResumeAnalysisService.uploadResume(file);
      if (!uploadResult.success) throw new Error(uploadResult.message);

      // Call the parent handler with the file
      onResumeUpload(file);
    } catch (error) {
      console.error("Error during upload:", error);
      alert(`Upload failed: ${error.message}`);
    } finally {
      setUploading(false);
      setLoadingAnalysis(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">
        Upload Your Resume
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full"
        />
        <button
          onClick={handleUpload}
          disabled={uploading || loadingAnalysis}
          className={`bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md transition ${
            uploading || loadingAnalysis
              ? "opacity-70 cursor-not-allowed"
              : "hover:bg-indigo-700"
          }`}
        >
          {uploading
            ? "Uploading..."
            : loadingAnalysis
            ? "Analyzing..."
            : "Upload"}
        </button>
      </div>

      {file && (
        <p className="mt-3 text-gray-600 text-sm">
          📄 Selected File: <span className="font-medium">{file.name}</span>
        </p>
      )}
    </div>
  );
};

ResumeUpload.propTypes = {
  onResumeUpload: PropTypes.func.isRequired,
};

export default ResumeUpload;
