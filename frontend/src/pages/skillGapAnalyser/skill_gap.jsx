import React, { useState } from 'react';
import Header from '../../components/SkillGap/Header';
import ResumeUpload from '../../components/SkillGap/ResumeUpload';
import SkillAnalysis from '../../components/SkillGap/SkillAnalysis';
import JobMatching from '../../components/SkillGap/JobMatching';
import LearningRecommendations from '../../components/SkillGap/LearningRecommentdations';
import  {generateMockAnalysis} from '../../utils/mockData';

function App() {
  const [currentResume, setCurrentResume] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(generateMockAnalysis());

  const handleResumeUpload = (resume) => {
    setCurrentResume(resume);
    // In a real app, this would trigger actual analysis
    setAnalysisResult(generateMockAnalysis());
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Analyze Your <span className="text-blue-600">Skill Gap</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Upload your resume and get instant insights on skill gaps, job matches, 
            and personalized learning recommendations to advance your career.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>ATS Resume Builder</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>AI-Powered Analysis</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Certified Learning Paths</span>
            </span>
          </div>
        </section>

        {/* Resume Upload Section */}
        <section>
          <ResumeUpload onResumeUpload={handleResumeUpload} />
        </section>

        {/* Analysis Results - Only show if resume is uploaded */}
        {currentResume && (
          <>
            <section>
              <SkillAnalysis analysis={analysisResult} />
            </section>

            <section>
              <JobMatching matchingJobs={analysisResult.matchingJobs} />
            </section>

            <section>
              <LearningRecommendations recommendations={analysisResult.recommendations} />
            </section>
          </>
        )}

        {/* Features Section - Show when no resume uploaded */}
        {!currentResume && (
          <section className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-lg text-gray-600">
                Get comprehensive career insights in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Upload Resume</h3>
                <p className="text-gray-600">
                  Upload your existing resume or create a new ATS-optimized one using our builder
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Analysis</h3>
                <p className="text-gray-600">
                  Receive detailed skill gap analysis and job matching recommendations
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Learn & Grow</h3>
                <p className="text-gray-600">
                  Follow personalized learning paths with verified certifications
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Close Your Skill Gap?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have advanced their careers with our AI-powered skill analysis
            </p>
            <button 
              onClick={() => document.querySelector('input[type="file"]')?.click()}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Start Your Analysis
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


