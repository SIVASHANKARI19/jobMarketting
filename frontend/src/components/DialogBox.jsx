// components/JobDialog.jsx
import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Building2, 
  Clock, 
  Send, 
  Bookmark, 
  Share2, 
  CheckCircle,
  BookmarkPlus,
  Calendar,
  Users,
  Star,
  Eye
} from 'lucide-react';

// Custom CSS for hiding scrollbar
const scrollbarStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

const JobDialog = ({ open, onClose, job, type }) => {
  const [applicationData, setApplicationData] = useState({
    coverLetter: '',
    experience: '',
    availability: '',
  });
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  if (!job || !open) return null;

  const handleApplicationSubmit = () => {
    setApplicationSubmitted(true);
    setTimeout(() => {
      setApplicationSubmitted(false);
      onClose();
    }, 1000);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const getJobTypeStyles = (jobType) => {
    switch (jobType?.toLowerCase()) {
      case 'full-time':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'part-time':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'contract':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'internship':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div>
      {/* Inject custom scrollbar styles */}
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
      
      <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {applicationSubmitted ? (
          <div className="p-12 text-center">
            <CheckCircle className="mx-auto mb-4 h-16 w-16 text-emerald-500" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Application Submitted Successfully!
            </h3>
            <p className="text-gray-600">
              We'll review your application and get back to you soon.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  {type === 'view' ? 'Job Details' : 'Apply for Position'}
                </h2>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleBookmark}
                    className={`p-2 rounded-lg transition-colors ${
                      isBookmarked 
                        ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' 
                        : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                    }`}
                  >
                    {isBookmarked ? <Bookmark className="h-5 w-5" /> : <BookmarkPlus className="h-5 w-5" />}
                  </button>
                  <button 
                    onClick={onClose}
                    className="p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="max-h-[calc(90vh-120px)] overflow-y-auto scrollbar-hide">
              {/* Job Header */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200">
                      <Building2 className="h-8 w-8 text-gray-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h1>
                    <div className="flex items-center gap-1 mb-3">
                      <span className="text-lg font-medium text-blue-600">{job.company}</span>
                      <div className="flex items-center gap-1 ml-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{job.rating || '4.2'}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">{job.applicants || '12'} applicants</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Eye className="h-4 w-4" />
                        <span className="text-sm">{job.views || '234'} views</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getJobTypeStyles(job.type)}`}>
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        <Clock className="h-3 w-3" />
                        Posted {job.posted || '2 days ago'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-6 space-y-8">
                {/* Salary Card */}
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-emerald-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Salary Range</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{job.salary}</p>
                  <p className="text-sm text-gray-600 mt-1">Per annum • Negotiable based on experience</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <Briefcase className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Employment Type</p>
                    <p className="font-semibold text-gray-900">{job.type}</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold text-gray-900">{job.location}</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Start Date</p>
                    <p className="font-semibold text-gray-900">Immediate</p>
                  </div>
                </div>

                {/* Job Description */}
                <div className="bg-white">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">About this role</h3>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {job.description}
                    </p>
                  </div>
                </div>

                {/* Requirements */}
                <div className="bg-white">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Requirements</h3>
                  <div className="space-y-3">
                    {[
                      'Bachelor\'s degree in relevant field or equivalent experience',
                      '3+ years of professional experience in the field',
                      'Strong communication and collaboration skills',
                      'Proficiency in relevant tools and technologies',
                      'Problem-solving mindset and attention to detail'
                    ].map((req, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Application Form */}
                {type === 'apply' && (
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Submit Your Application</h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <p className="text-sm text-blue-800">
                        💡 <strong>Pro tip:</strong> Highlight your relevant experience and skills that match this position to increase your chances.
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cover Letter *
                        </label>
                        <textarea
                          value={applicationData.coverLetter}
                          onChange={(e) => setApplicationData({ 
                            ...applicationData, 
                            coverLetter: e.target.value 
                          })}
                          placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Relevant Experience *
                        </label>
                        <textarea
                          value={applicationData.experience}
                          onChange={(e) => setApplicationData({ 
                            ...applicationData, 
                            experience: e.target.value 
                          })}
                          placeholder="Describe your relevant work experience and achievements..."
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Availability
                        </label>
                        <select
                          value={applicationData.availability}
                          onChange={(e) => setApplicationData({ 
                            ...applicationData, 
                            availability: e.target.value 
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select your availability</option>
                          <option value="immediate">Immediate</option>
                          <option value="2weeks">2 weeks notice</option>
                          <option value="1month">1 month notice</option>
                          <option value="negotiable">Negotiable</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Application deadline: 30 days from posting</span>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={onClose}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Close
                  </button>
                  {type === 'apply' && (
                    <button
                      onClick={handleApplicationSubmit}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Submit Application
                    </button>
                  )}
                
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default JobDialog;