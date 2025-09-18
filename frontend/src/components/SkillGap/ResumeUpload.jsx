import React, { useState, useCallback } from 'react';
import { Upload, FileText, ExternalLink, CheckCircle } from 'lucide-react';

const ResumeUpload = ({ onResumeUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('idle');
  const [fileName, setFileName] = useState('');

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    setFileName(file.name);
    setUploadStatus('uploading');
    
    // Simulate file processing
    setTimeout(() => {
      const mockResume = {
        id: Date.now().toString(),
        name: file.name.replace(/\.[^/.]+$/, ""),
        skills: [
          { name: 'React', level: 7, category: 'Frontend' },
          { name: 'JavaScript', level: 8, category: 'Programming' },
          { name: 'Node.js', level: 6, category: 'Backend' },
          { name: 'Python', level: 5, category: 'Programming' },
          { name: 'SQL', level: 6, category: 'Database' }
        ],
        experience: ['Frontend Developer at TechCorp', 'Junior Developer at StartupXYZ'],
        education: ['Computer Science Degree'],
        uploadDate: new Date()
      };
      
      setUploadStatus('success');
      onResumeUpload && onResumeUpload(mockResume);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Upload Your Resume</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Upload your existing resume or create a new ATS-optimized resume using our builder
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Upload Option */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Upload className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Upload Resume</h3>
            </div>
            
            <div
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive 
                  ? 'border-blue-500 bg-blue-50' 
                  : uploadStatus === 'success'
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 hover:border-blue-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={uploadStatus === 'uploading'}
              />
              
              {uploadStatus === 'idle' && (
                <>
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    Drop your resume here or click to browse
                  </p>
                  <p className="text-sm text-gray-500">
                    Supports PDF, DOC, DOCX files
                  </p>
                </>
              )}
              
              {uploadStatus === 'uploading' && (
                <>
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    Processing {fileName}...
                  </p>
                  <p className="text-sm text-gray-500">
                    Analyzing your skills and experience
                  </p>
                </>
              )}
              
              {uploadStatus === 'success' && (
                <>
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <p className="text-lg font-medium text-green-700 mb-2">
                    Resume uploaded successfully!
                  </p>
                  <p className="text-sm text-gray-600">
                    {fileName} is ready for analysis
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ATS Builder Option */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <ExternalLink className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">ATS Resume Builder</h3>
            </div>
            
            <div className="text-center py-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Create ATS-Optimized Resume</h4>
                <p className="text-gray-600 text-sm">
                  Build a professional resume that passes Applicant Tracking Systems
                </p>
              </div>
              
              <button
                onClick={() => window.open('/resume-builder', '_blank')}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Launch Resume Builder</span>
                <ExternalLink className="h-4 w-4" />
              </button>
              
              <p className="text-xs text-gray-500 mt-3">
                Creates ATS-friendly format • Download and upload here
              </p>
            </div>
          </div>
        </div>
      </div>

      {uploadStatus === 'success' && (
        <div className="text-center">
          <button
            onClick={() => document.getElementById('analysis')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center space-x-2"
          >
            <span>View Analysis Results</span>
            <CheckCircle className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;

