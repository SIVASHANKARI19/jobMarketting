
import React, { useState } from 'react';
import {
  MapPin, Clock, Bookmark, ExternalLink, Filter, ToggleLeft, ToggleRight, Heart,
  MessageSquare, Share2, Eye, TrendingUp, Star, Users, Building2, FileText, Check,X
} from 'lucide-react';
import jobsData from '../data/jobs.json';
import companiesData from '../data/companies.json';
import JobDialog from "../components/DialogBox";

const FeedPage = () => {
  const [jobs] = useState(jobsData);
  const [followStates, setFollowStates] = useState({});
  const [companies] = useState(companiesData);
  const [filters, setFilters] = useState({
    location: '',
    minSalary: '',
    maxSalary: '',
    remote: false,
    type: ''
  });
  const [savedJobs, setSavedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalType, setModalType] = useState(null);

  const toggleFollow = (companyId) => {
    setFollowStates(prev => ({
      ...prev,
      [companyId]: !prev[companyId]
    }));
  };

  const [selectedCompany, setSelectedCompany] = useState(null);

  const openModal = (company) => setSelectedCompany(company);
  const closeModal = () => setSelectedCompany(null);

  const handleOpenModal = (job, type) => {
    setSelectedJob(job);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setModalType(null);
  };

  const toggleSaveJob = (jobId) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  const filteredJobs = jobs.filter((job) => {
    const company = companies.find((c) => c.id === job.companyId);
    return (
      (!filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.remote || job.remote === filters.remote) &&
      (!filters.type || job.type === filters.type)
    );
  });

  const trendingCompanies = companies.slice(0, 5);

  return (
    <div className="min-h-screen  bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
       <div className="flex flex-col lg:flex-row gap-8 custom-scrollbar h-[calc(100vh-4rem)] overflow-hidden">

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar h-[calc(100vh-4rem)]">

            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24" />
              <div className="relative z-10">
                <h1 className="text-3xl font-bold mb-2">Good morning! 👋</h1>
                <p className="text-blue-100 text-lg">Ready to find your next opportunity?</p>
                <div className="flex items-center space-x-6 mt-6">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100">24 profile views</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-300" />
                    <span className="text-blue-100">3 new matches</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Jobs for you</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Personalized recommendations</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    placeholder="Enter location"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Job Type</label>
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                  >
                    <option value="">All Types</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Salary Range</label>
                  <select
                    value={filters.minSalary}
                    onChange={(e) => setFilters({ ...filters, minSalary: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                  >
                    <option value="">Any Salary</option>
                    <option value="5">₹5+ LPA</option>
                    <option value="10">₹10+ LPA</option>
                    <option value="15">₹15+ LPA</option>
                    <option value="20">₹20+ LPA</option>
                  </select>
                </div>
                <div className="flex items-center pt-5 pl-2 space-x-2">
                  <label className="text-sm font-semibold text-gray-700">Remote Work</label>
                  <button
                    onClick={() => setFilters({ ...filters, remote: !filters.remote })}
                    className={`p-2  rounded-full ${filters.remote ? 'text-blue-600' : 'text-gray-400'}`}
                  >
                    {filters.remote ? <ToggleRight className="w-6 h-6" /> : <ToggleLeft className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Job Cards */}
            <div className="space-y-6">
               {filteredJobs.map((job) => {
          const company = companies.find((c) => c.id === job.companyId);
          return (
            <div key={job.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl group transition-all">
              {/* Card content same as before */}
              <div className="p-8">
                {/* Top Section */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <img
                      src={company?.logo}
                      alt={company?.name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-gray-100 group-hover:border-blue-200"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600">
                        {job.title}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700">
                        {company?.name}
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-2">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.posted}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {job.tags.map((tag) => (
                          <span key={tag} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      <p className="text-xl font-bold text-blue-600">{job.salary}</p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => toggleSaveJob(job.id)}
                      className={`p-3 rounded-full ${
                        savedJobs.includes(job.id)
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Bookmark className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-gray-100 text-gray-600 rounded-full hover:text-green-600">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div className="flex items-center text-sm space-x-4 text-gray-600">
                    <span>{job.experience}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span className="flex items-center">
                      <Building2 className="w-4 h-4 mr-1" />
                      {company?.employees} employees
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      className="px-4 py-2 border border-blue-600 text-blue-600 rounded-xl"
                      onClick={() => handleOpenModal(job, "view")}
                    >
                      View Details
                    </button>
                    <button
                      className="px-6 py-2 bg-blue-600 text-white rounded-xl"
                      onClick={() => handleOpenModal(job, "apply")}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
            </div>
          </div>

          {/* Sidebar */}
     {/* Sidebar */}
<div className="w-full lg:w-80 space-y-6 overflow-y-auto h-[calc(100vh-4rem)] pr-2 custom-scrollbar">

            {/* Trending Companies */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">Trending Companies</h3>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="space-y-3">
      {trendingCompanies.map((company) => (
        <div
          key={company.id}
          onClick={() => openModal(company)}
          className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-200 cursor-pointer group"
        >
          <img
            src={company.logo}
            alt={company.name}
            className="w-14 h-14 rounded-xl object-cover border-2 border-gray-100 group-hover:border-blue-200 transition-colors flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            {/* Removed truncate — full name visible in modal */}
            <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors truncate">
              {company.name}
            </h4>
            <p className="text-sm text-gray-600 mb-1 truncate">{company.industry}</p>
            <p className="text-xs text-green-600 font-semibold">5 new jobs</p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent modal opening when clicking Follow
              toggleFollow(company.id);
            }}
            className={`transform transition-all duration-300 ease-out px-3 py-2 rounded-lg text-sm font-medium flex-shrink-0 ${
              followStates[company.id]
                ? "bg-blue-600 text-white scale-105"
                : "opacity-0 group-hover:opacity-100 bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            }`}
          >
            {followStates[company.id] ? (
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">Following</span>
              </span>
            ) : (
              "Follow"
            )}
          </button>
        </div>
      ))}

      {/* Modal */}
      {selectedCompany && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md relative animate-in fade-in duration-200">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center space-y-3">
              <img
                src={selectedCompany.logo}
                alt={selectedCompany.name}
                className="w-16 h-16 rounded-xl object-cover border"
              />
              <h3 className="text-xl font-bold text-gray-800">{selectedCompany.name}</h3>
              <p className="text-gray-600 text-sm">{selectedCompany.industry}</p>
              <p className="text-green-600 text-sm font-semibold">5 new jobs</p>

              <button
                onClick={() => toggleFollow(selectedCompany.id)}
                className={`mt-3 px-4 py-2 rounded-lg font-medium text-white ${
                  followStates[selectedCompany.id]
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-500 hover:bg-gray-600"
                }`}
              >
                {followStates[selectedCompany.id] ? "Following" : "Follow"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
            </div>

            {/* Job Alerts */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Job Alerts</h3>
              <p className="text-sm text-gray-700 mb-6">
                Get notified when jobs matching your preferences are posted.
              </p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold shadow-lg">
                Set Job Alert
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Your Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Profile Views</p>
                      <p className="text-sm text-gray-600">This week</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">24</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Applications</p>
                      <p className="text-sm text-gray-600">This month</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-green-600">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <JobDialog
        open={!!selectedJob}
        onClose={handleCloseModal}
        job={selectedJob}
        type={modalType}
      />
    </div>
  );
};

export default FeedPage;