import React from 'react';
import { Clock, Star, Award, ExternalLink } from 'lucide-react';

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

export default function CourseRecommendationsGrid({ courses = [] }) {
  return (
    <div className="grid lg:grid-cols-2 gap-6 mb-8">
      {courses.map((course, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{getCategoryIcon(course.category)}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
                  <p className="text-gray-600 text-sm">{course.provider}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(course.priority)}`}>
                {course.priority} priority
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>{course.rating}/5.0</span>
              </div>
            </div>

            {course.certification && (
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-blue-600 font-medium">Professional Certificate Included</span>
              </div>
            )}

            <button 
              onClick={() => window.open(course.url, '_blank')}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start Learning</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>

          <div className="bg-gray-50 px-6 py-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Career Impact:</span>
              <span className="font-medium text-gray-900">
                {course.priority === 'high' ? '+15% salary potential' : 
                 course.priority === 'medium' ? '+10% salary potential' : 
                 '+5% salary potential'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
