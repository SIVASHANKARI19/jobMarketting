import React from 'react';
import CourseRecommendationsGrid from '../components/SkillGap/CourseRecommendationsGrid';
import priorityRecommendations from '../components/SkillGap/courseData';

export default function CourseRecommendationsPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Course Recommendations</h1>
      <p className="text-sm text-gray-600 mb-6">All recommended courses curated to close your skill gaps.</p>
      <CourseRecommendationsGrid courses={priorityRecommendations} />
    </div>
  );
}
