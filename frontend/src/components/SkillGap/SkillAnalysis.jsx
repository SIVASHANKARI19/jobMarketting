import React, { useEffect, useState } from "react";
import ResumeUpload from "./ResumeUpload";
import JobMatching from "./JobMatching";
import LearningRecommendations from "./LearningRecommentdations";
import SkillAnalysis from "./SkillAnalysis";
import ChatbotCard from "./ChatbotCard";
import { ResumeAnalysisService } from "../../services/resumeAnalysisService";

const SkillGapAnalyser = () => {
  const [currentResume, setCurrentResume] = useState(null);
  const [analysisResult, setAnalysisResult] = useState({
    overallScore: 0,
    skillGaps: [],
    matchingJobs: [],
    recommendations: [],
    strongSkills: [],
    improvementAreas: []
  });
  const [loading, setLoading] = useState(false);

  // ✅ Load result.json from backend
  const loadAnalysisData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/data/result.json");
      const data = await res.json();

      // Map data into analysisResult format
      setAnalysisResult({
        overallScore: data.overallScore || 0,
        skillGaps: data.skillGaps || [],
        matchingJobs: data.output || [],
        recommendations: data.recommended_learning || [],
        strongSkills: data.strongSkills || [],
        improvementAreas: data.improvementAreas || []
      });
    } catch (err) {
      console.error("Error loading result.json:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle resume upload
  const handleResumeUpload = async (file) => {
    try {
      setLoading(true);
      const result = await ResumeAnalysisService.uploadResume(file);
      if (result.success) {
        setCurrentResume(file);
        await loadAnalysisData();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Skill Gap Analysis Dashboard
        </h1>

        {/* Resume Upload */}
        <ResumeUpload onResumeUpload={handleResumeUpload} />

        {/* Loading */}
        {loading && (
          <p className="text-center text-blue-600 mb-6">Analyzing resume...</p>
        )}

        {/* Skill Analysis */}
        {currentResume && !loading && (
          <>
            <SkillAnalysis analysis={analysisResult} />
            <JobMatching
              matchingJobs={analysisResult.matchingJobs}
              jobAnalysisData={analysisResult.matchingJobs}
            />
            <LearningRecommendations
              recommendations={analysisResult.recommendations}
            />
          </>
        )}
      </div>

      <ChatbotCard accent="indigo" />
    </div>
  );
};

export default SkillGapAnalyser;
