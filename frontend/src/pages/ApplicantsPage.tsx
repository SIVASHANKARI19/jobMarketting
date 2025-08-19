import React, { useState } from 'react';
import { Users, Download, Eye, MessageSquare, CheckCircle, XCircle, Clock } from 'lucide-react';
import applicationsData from '../data/applications.json';
import jobsData from '../data/jobs.json';
import usersData from '../data/users.json';

const ApplicantsPage: React.FC = () => {
  const [applications, setApplications] = useState(applicationsData);
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const jobs = jobsData.filter(job => job.postedBy === 2); // Client's jobs

  const updateApplicationStatus = (applicationId: number, newStatus: string) => {
    setApplications(prev => 
      prev.map(app => 
        app.id === applicationId ? { ...app, status: newStatus } : app
      )
    );
  };

  const getFilteredApplications = () => {
    return applications.filter(app => {
      const job = jobs.find(j => j.id === app.jobId);
      return job && (selectedJob === null || app.jobId === selectedJob);
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Applied':
        return <Clock className="w-4 h-4 text-blue-600" />;
      case 'Viewed':
        return <Eye className="w-4 h-4 text-yellow-600" />;
      case 'Shortlisted':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'Rejected':
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Applied':
        return 'bg-blue-100 text-blue-800';
      case 'Viewed':
        return 'bg-yellow-100 text-yellow-800';
      case 'Shortlisted':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredApplications = getFilteredApplications();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Job Applicants</h1>
                <p className="text-gray-600">
                  {filteredApplications.length} applicant{filteredApplications.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <select
                value={selectedJob || ''}
                onChange={(e) => setSelectedJob(e.target.value ? parseInt(e.target.value) : null)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Jobs</option>
                {jobs.map(job => (
                  <option key={job.id} value={job.id}>{job.title}</option>
                ))}
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Export List
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
              <div className="col-span-3">Applicant</div>
              <div className="col-span-2">Position</div>
              <div className="col-span-2">Applied Date</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-3">Actions</div>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {filteredApplications.map(application => {
              const job = jobs.find(j => j.id === application.jobId);
              const user = usersData.find(u => u.id === application.userId);
              
              return (
                <div key={application.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3">
                      <div className="flex items-center space-x-3">
                        <img
                          src={user?.avatar}
                          alt={user?.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-medium text-gray-800">{user?.name}</h3>
                          <p className="text-sm text-gray-600">{user?.email}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-2">
                      <p className="font-medium text-gray-800">{job?.title}</p>
                      <p className="text-sm text-gray-600">{job?.location}</p>
                    </div>
                    
                    <div className="col-span-2">
                      <p className="text-sm text-gray-600">{application.appliedDate}</p>
                    </div>
                    
                    <div className="col-span-2">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(application.status)}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                          {application.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="col-span-3">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors" title="View Resume">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 transition-colors" title="View Profile">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors" title="Message">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                        <select
                          value={application.status}
                          onChange={(e) => updateApplicationStatus(application.id, e.target.value)}
                          className="px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="Applied">Applied</option>
                          <option value="Viewed">Viewed</option>
                          <option value="Shortlisted">Shortlisted</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {filteredApplications.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Applicants Yet</h3>
            <p className="text-gray-600">
              {selectedJob 
                ? "This job hasn't received any applications yet." 
                : "You haven't received any applications for your jobs yet."}
            </p>
          </div>
        )}

        {/* Application Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold text-gray-800">{filteredApplications.length}</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Under Review</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {filteredApplications.filter(app => app.status === 'Applied' || app.status === 'Viewed').length}
                </p>
              </div>
              <Eye className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Shortlisted</p>
                <p className="text-2xl font-bold text-green-600">
                  {filteredApplications.filter(app => app.status === 'Shortlisted').length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Rejected</p>
                <p className="text-2xl font-bold text-red-600">
                  {filteredApplications.filter(app => app.status === 'Rejected').length}
                </p>
              </div>
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsPage;