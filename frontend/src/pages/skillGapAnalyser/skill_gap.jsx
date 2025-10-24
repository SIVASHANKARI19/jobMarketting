import React, { useState } from 'react';
import ResumeUpload from '../../components/SkillGap/ResumeUpload';
import SkillAnalysis from '../../components/SkillGap/SkillAnalysis';
import JobMatching from '../../components/SkillGap/JobMatching';
import LearningRecommendations from '../../components/SkillGap/LearningRecommentdations';
import  {generateMockAnalysis} from '../../utils/mockData';
// CourseRecommendationsGrid is available on its own page; use LearningRecommendations component below

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
      
      <main className="py-12 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl ml-0">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6  text-left">
            Analyze Your <span className="text-blue-600">Skill Gap</span>
          </h1>
         
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

            {/* Button to jump to Course Recommendations */}

            <section>
              <LearningRecommendations/>
            </section>
          </>
        )}

       
      </main>

    </div>
  );
}

export default SkillGap;
