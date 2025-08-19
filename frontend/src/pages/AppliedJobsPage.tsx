import React, { useState } from 'react';
import { FileText, Clock, CheckCircle, XCircle, Eye } from 'lucide-react';
import applicationsData from '../data/applications.json';
import jobsData from '../data/jobs.json';
import companiesData from '../data/companies.json';

const AppliedJobsPage: React.FC = () => {
  const [applications] = useState(applicationsData);
  const jobs = jobsData;
  const companies = companiesData;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Applied':
        return <Clock className="w-5 h-5 text-blue-600" />;
      case 'Viewed':
        return <Eye className="w-5 h-5 text-yellow-600" />;
      case 'Shortlisted':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'Rejected':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Applied Jobs</h1>
              <p className="text-gray-600 mt-1">
                {applications.length} {applications.length === 1 ? 'application' : 'applications'} submitted
              </p>
            </div>
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
              <div className="col-span-4">Job & Company</div>
              <div className="col-span-2">Applied Date</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-4">Company Response</div>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {applications.map(application => {
              const job = jobs.find(j => j.id === application.jobId);
              const company = companies.find(c => c.id === job?.companyId);
              
              return (
                <div key={application.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={company?.logo}
                          alt={company?.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800">{job?.title}</h3>
                          <p className="text-sm text-gray-600">{company?.name}</p>
                          <p className="text-xs text-gray-500">{job?.location}</p>
                        </div>
                      </div>
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
                    
                    <div className="col-span-4">
                      <p className="text-sm text-gray-600">
                        {application.companyResponse || 'No response yet'}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Application Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold text-gray-800">{applications.length}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Under Review</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {applications.filter(app => app.status === 'Applied' || app.status === 'Viewed').length}
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
                  {applications.filter(app => app.status === 'Shortlisted').length}
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
                  {applications.filter(app => app.status === 'Rejected').length}
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

export default AppliedJobsPage;