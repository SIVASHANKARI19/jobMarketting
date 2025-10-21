import React, { useState } from 'react';
import { ResumeAnalysisService } from '../../services/resumeAnalysisService';
import ResumeUpload from './ResumeUpload';
import JobMatching from './JobMatching';
import LearningRecommendations from './LearningRecommentdations';

const SkillGapAnalyser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleResumeUpload = async (file) => {
    try {
      setLoading(true);
      setError(null);
      
      // Upload the resume
      const uploadResult = await ResumeAnalysisService.uploadResume(file);
      
      if (uploadResult.success) {
        // Get the analysis results
        const results = await ResumeAnalysisService.getAnalysisResults();
        setAnalysisResult(results);
      } else {
        throw new Error(uploadResult.message || 'Failed to analyze resume');
      }
    } catch (err) {
      setError(err.message);
      console.error('Analysis failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Skill Gap Analysis
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your resume to get AI insights on your skills, job matches, and learning paths.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <ResumeUpload 
            onResumeUpload={handleResumeUpload}
            isLoading={loading}
          />

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600">❌ {error}</p>
            </div>
          )}
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin h-12 w-12 mx-auto border-4 border-blue-500 border-t-transparent rounded-full mb-4"></div>
            <p className="text-lg text-gray-600">Analyzing your resume...</p>
          </div>
        )}

        {analysisResult && !loading && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">Analysis Results</h2>
              
              {/* Skills Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-medium mb-3">Strong Skills</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {analysisResult.strongSkills?.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Skills to Improve</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {analysisResult.skillGaps?.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Job Matches - Pass empty array as fallback */}
              <JobMatching matches={analysisResult.matchingJobs || []} />
              
              {/* Learning Recommendations */}
              <LearningRecommendations 
                recommendations={analysisResult.recommendations || []}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillGapAnalyser;
