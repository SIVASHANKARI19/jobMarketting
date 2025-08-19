import React, { useState } from 'react';
import { Bookmark, MapPin, Clock, ExternalLink, Trash2 } from 'lucide-react';
import jobsData from '../data/jobs.json';
import companiesData from '../data/companies.json';

const SavedJobsPage: React.FC = () => {
  const [savedJobs, setSavedJobs] = useState(jobsData.filter(job => job.saved));
  const companies = companiesData;

  const removeSavedJob = (jobId: number) => {
    setSavedJobs(prev => prev.filter(job => job.id !== jobId));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Saved Jobs</h1>
              <p className="text-gray-600 mt-1">
                {savedJobs.length} {savedJobs.length === 1 ? 'job' : 'jobs'} saved
              </p>
            </div>
            <Bookmark className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {savedJobs.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Bookmark className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Saved Jobs</h3>
            <p className="text-gray-600 mb-6">
              You haven't saved any jobs yet. Start exploring and save jobs you're interested in.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Browse Jobs
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {savedJobs.map(job => {
              const company = companies.find(c => c.id === job.companyId);
              return (
                <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <img
                          src={company?.logo}
                          alt={company?.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                          <p className="text-gray-600 mb-2">{company?.name}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {job.posted}
                            </span>
                            {job.remote && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                Remote
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 mb-3">
                            {job.tags.map(tag => (
                              <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p className="text-gray-700 mb-3">{job.description}</p>
                          <p className="text-lg font-semibold text-blue-600">{job.salary}</p>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <button
                          onClick={() => removeSavedJob(job.id)}
                          className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
                          title="Remove from saved jobs"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{job.experience}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                      <div className="flex space-x-3">
                        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                          View Details
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedJobsPage;