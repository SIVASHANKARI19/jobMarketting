import React, { useState, useEffect } from 'react';
import ResumeUpload from '../../components/SkillGap/ResumeUpload';
import SkillAnalysis from '../../components/SkillGap/SkillAnalysis';
import JobMatching from '../../components/SkillGap/JobMatching';
import LearningRecommendations from '../../components/SkillGap/LearningRecommentdations.jsx';
import ChatbotCard from '../../components/SkillGap/ChatbotCard';
import ErrorBoundary from '../../components/ErrorBoundary';
import { ResumeAnalysisService } from '../../services/resumeAnalysisService.js';

function SkillGap() {
  const [currentResume, setCurrentResume] = useState(null);
  const [analysisResult, setAnalysisResult] = useState({
    overallScore: 0,
    skillGaps: [],
    matchingJobs: [],
    recommendations: [],
    strongSkills: [],
    improvementAreas: []
  });
  const [jobAnalysisData, setJobAnalysisData] = useState([]);
  const [jobInputData, setJobInputData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await ResumeAnalysisService.getAnalysisResults();
      if (data) {
        setAnalysisResult(data);
        setJobAnalysisData(data.output || []);
        setJobInputData(data.input || {});
      }
    } catch (err) {
      console.error('Error loading data:', err);
      setError('Failed to load analysis data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleResumeUpload = async (resume) => {
    setCurrentResume(resume);
    setLoading(true);
    setError(null);

    try {
      const uploadResult = await ResumeAnalysisService.uploadResume(resume);
      if (uploadResult.success) {
        await loadInitialData();
      } else {
        setError(uploadResult.message);
      }
    } catch (err) {
      console.error('Error uploading resume:', err);
      setError('Failed to upload resume.');
    } finally {
      setLoading(false);
    }
  };

  const matchingJobs =
    jobInputData?.jobs_applied?.map((job) => ({
      title: job.job_title,
      company: "TechCorp Pvt Ltd",
      location: "Remote",
      experience: "2-4 years",
      requiredSkills: job.required_skills.map((s) => ({
        name: s.skill,
        level: s.level,
      })),
    })) || analysisResult.matchingJobs || [];

  const allRecommendations =
    jobAnalysisData.flatMap((job) => job.recommended_learning || []) || analysisResult.recommendations || [];

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <main className="py-12 px-4 sm:px-6 lg:px-6">
          <section className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Analyze Your <span className="text-blue-600">Skill Gap</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Upload your resume to get AI insights on your skills, job matches, and learning paths.
            </p>
          </section>

          <section>
            <ResumeUpload onResumeUpload={handleResumeUpload} />
          </section>

          {error && (
            <div className="max-w-7xl mx-auto mb-8">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-700">{error}</p>
              </div>
            </div>
          )}

          {loading && (
            <div className="max-w-7xl mx-auto mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-700">Loading analysis data...</p>
              </div>
            </div>
          )}

          {(currentResume || jobAnalysisData.length > 0) && (
            <>
              <SkillAnalysis analysis={analysisResult} />
              <JobMatching matchingJobs={matchingJobs} jobAnalysisData={jobAnalysisData} />
              <LearningRecommendations recommendations={allRecommendations} />
            </>
          )}
        </main>

        <ChatbotCard
          title="Career AI Assistant"
          subtitle="Ask anything about resumes, skills, jobs, and learning"
          accent="blue"
          suggestions={[
            'How can I increase my resume score?',
            'What jobs match my skills?',
            'Recommend courses for React',
          ]}
        />
      </div>
    </ErrorBoundary>
  );
}

export default SkillGap;
