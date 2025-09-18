import React from 'react';
import { MapPin, Building, Clock, ExternalLink, Star } from 'lucide-react';

const JobMatching = ({ matchingJobs }) => {
  const calculateMatchPercentage = () => {
    // Mock calculation - in real app, this would be based on actual skill matching
    return Math.floor(Math.random() * 30) + 70; // 70-100% match
  };

  const getMatchColor = (percentage) => {
    if (percentage >= 90) return 'text-green-600 bg-green-100';
    if (percentage >= 80) return 'text-blue-600 bg-blue-100';
    if (percentage >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div id="jobs" className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Job Matching Results</h2>
        <p className="text-lg text-gray-600">
          Based on your skills, here are the best job opportunities for you
        </p>
      </div>

      <div className="grid gap-6">
        {matchingJobs.map((job, index) => {
          const matchPercentage = calculateMatchPercentage(job);
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMatchColor(matchPercentage)}`}>
                      {matchPercentage}% Match
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Building className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 lg:mt-0">
                  <button className="w-full lg:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2">
                    <span>View Job</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Required Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requiredSkills.slice(0, 6).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                      >
                        {skill.name} (Level {skill.level})
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Preferred Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.preferredSkills.slice(0, 6).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                      >
                        {skill.name} (Level {skill.level})
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Match Visualization */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Match</span>
                  <span className="text-sm font-medium text-gray-900">{matchPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-500 ${
                      matchPercentage >= 90 ? 'bg-green-500' :
                      matchPercentage >= 80 ? 'bg-blue-500' :
                      matchPercentage >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${matchPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {matchingJobs.length === 0 && (
        <div className="text-center py-12">
          <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No matching jobs found</h3>
          <p className="text-gray-600">
            Upload your resume to see personalized job recommendations
          </p>
        </div>
      )}
    </div>
  );
};

export default JobMatching;

