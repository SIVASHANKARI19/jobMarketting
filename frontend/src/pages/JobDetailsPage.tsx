import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Users, Building, Bookmark, Share2, ExternalLink } from 'lucide-react';
import jobsData from '../data/jobs.json';
import companiesData from '../data/companies.json';

const JobDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job = jobsData.find(j => j.id === parseInt(id || '0'));
  const company = companiesData.find(c => c.id === job?.companyId);
  const similarJobs = jobsData.filter(j => j.id !== job?.id && j.companyId === job?.companyId).slice(0, 3);

  if (!job || !company) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Job Not Found</h1>
          <p className="text-gray-600">The job you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Job Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-6">
              <img
                src={company.logo}
                alt={company.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h1>
                <p className="text-xl text-gray-600 mb-3">{company.name}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {job.posted}
                  </span>
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {job.salary}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {job.type}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Job Description</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">{job.description}</p>
                <p className="text-gray-700 mb-4">
                  We are seeking a talented {job.title} to join our growing team. In this role, you will be responsible for 
                  developing and maintaining high-quality software solutions that meet our clients' needs. You will work 
                  closely with our design and product teams to implement features that enhance user experience and drive 
                  business growth.
                </p>
                <p className="text-gray-700">
                  The ideal candidate should have strong technical skills, excellent problem-solving abilities, and a 
                  passion for creating exceptional software products. You should be comfortable working in a fast-paced, 
                  collaborative environment and be eager to learn new technologies and best practices.
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Requirements</h2>
              <ul className="space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Strong communication and teamwork skills</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Bachelor's degree in Computer Science or related field</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Experience with version control systems (Git)</span>
                </li>
              </ul>
            </div>

            {/* What We Offer */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">What We Offer</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Competitive salary and benefits package</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Flexible working hours and remote work options</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Professional development and learning opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Health insurance and wellness programs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Modern office space and latest technology</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">About {company.name}</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Building className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">{company.industry}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">{company.employees} employees</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">{company.location}</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-4">{company.description}</p>
              <button className="w-full mt-4 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Company Profile
              </button>
            </div>

            {/* Job Tags */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Skills & Tags</h3>
              <div className="flex flex-wrap gap-2">
                {job.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Similar Jobs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Similar Jobs</h3>
              <div className="space-y-4">
                {similarJobs.map(similarJob => (
                  <div key={similarJob.id} className="border-b border-gray-200 pb-3 last:border-b-0">
                    <h4 className="font-medium text-gray-800 mb-1">{similarJob.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{similarJob.location}</p>
                    <p className="text-sm text-blue-600 font-medium">{similarJob.salary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;