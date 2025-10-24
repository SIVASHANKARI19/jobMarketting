import React from 'react';
import { BookOpen, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseRecommendationsGrid from './CourseRecommendationsGrid';
import priorityRecommendations from './courseData';

const LearningRecommendations = () => {
  // priorityRecommendations moved to shared `courseData` and imported

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend': return '🎨';
      case 'Backend': return '⚡';
      case 'Data Science': return '📊';
      case 'Cloud': return '☁️';
      case 'Database': return '🗄️';
      case 'DevOps': return '🔧';
      default: return '📚';
    }
  };

  return (
    <div id="learning" className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Recommendations</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Personalized course recommendations to close your skill gaps and advance your career
        </p>
        <div className="mt-4">
          <Link to="/courses-feed" className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
            View all course recommendations
          </Link>
        </div>
      </div>

      {/* Priority Skills Section */}
      <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
          <h3 className="text-xl font-semibold text-gray-900">Priority Skills to Develop</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {priorityRecommendations.filter(rec => rec.priority === 'high').map((rec, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-blue-200">
              <div className="text-2xl mb-2">{getCategoryIcon(rec.category)}</div>
              <h4 className="font-semibold text-gray-900 mb-1">{rec.category}</h4>
              <p className="text-sm text-gray-600">High demand skill</p>
            </div>
          ))}
        </div>
      </div>


      {/* Learning Path */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Recommended Learning Path</h3>
        <div className="space-y-4">
          {priorityRecommendations.slice(0, 4).map((course, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                index === 0 ? 'bg-red-500' : index === 1 ? 'bg-yellow-500' : 'bg-green-500'
              }`}>
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{course.title}</h4>
                <p className="text-sm text-gray-600">{course.provider} • {course.duration}</p>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(course.priority)}`}>
                {course.priority}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Total Learning Time</p>
              <p className="text-sm text-gray-600">Estimated completion: 4-6 months</p>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Start Learning Path
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningRecommendations;


