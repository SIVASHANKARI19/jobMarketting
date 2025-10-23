import React, { useState } from "react";
import PropTypes from "prop-types";

const ResumeUpload = ({ onResumeUpload, isLoading }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Please select a PDF file");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file first");
      return;
    }
    await onResumeUpload(file);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-300 rounded-lg bg-white">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
          id="resume-upload"
        />
        <label
          htmlFor="resume-upload"
          className="cursor-pointer py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Choose PDF File
        </label>

        {file && (
          <div className="mt-4 text-sm text-gray-600">
            📄 Selected File: {file.name}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={!file || isLoading}
        className={`w-full py-2 px-4 rounded ${
          !file || isLoading
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white transition-colors`}
      >
        {isLoading ? "Analyzing..." : "Upload & Analyze"}
      </button>
    </form>
  );
};

ResumeUpload.propTypes = {
  onResumeUpload: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

ResumeUpload.defaultProps = {
  isLoading: false,
};

export default ResumeUpload;
