import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Users, Calendar, Globe, ExternalLink, Building } from 'lucide-react';
import companiesData from '../data/companies.json';
import jobsData from '../data/jobs.json';

const CompanyProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const company = companiesData.find(c => c.id === parseInt(id || '0'));
  const companyJobs = jobsData.filter(job => job.companyId === parseInt(id || '0'));

  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Company Not Found</h1>
          <p className="text-gray-600">The company you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Company Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start space-x-6">
            <img
              src={company.logo}
              alt={company.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{company.name}</h1>
              <p className="text-gray-600 mb-4">{company.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  {company.industry}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {company.employees} employees
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {company.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Founded {company.founded}
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <button className="flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                <Globe className="w-4 h-4 mr-2" />
                Visit Website
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Users className="w-4 h-4 mr-2" />
                Follow Company
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Company */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">About {company.name}</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  {company.name} is a leading company in the {company.industry} industry, dedicated to delivering 
                  innovative solutions and exceptional services to our clients worldwide. Since our founding in {company.founded}, 
                  we have grown to become a trusted partner for businesses looking to transform their operations and achieve 
                  sustainable growth.
                </p>
                <p className="text-gray-700 mb-4">
                  Our team of skilled professionals is passionate about leveraging cutting-edge technology and best practices 
                  to solve complex challenges and drive meaningful results. We believe in fostering a collaborative and 
                  inclusive work environment where every team member can thrive and contribute to our collective success.
                </p>
                <p className="text-gray-700">
                  At {company.name}, we are committed to continuous learning, innovation, and excellence in everything we do. 
                  We value integrity, transparency, and customer satisfaction, and we strive to make a positive impact in 
                  the communities we serve.
                </p>
              </div>
            </div>

            {/* Company Culture */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Company Culture</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Innovation First</h3>
                  <p className="text-blue-700 text-sm">We embrace new ideas and technologies to stay ahead of the curve.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Work-Life Balance</h3>
                  <p className="text-green-700 text-sm">We believe in maintaining a healthy balance between work and personal life.</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Continuous Learning</h3>
                  <p className="text-purple-700 text-sm">We invest in our team's professional development and growth.</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">Collaboration</h3>
                  <p className="text-orange-700 text-sm">We work together to achieve common goals and support each other.</p>
                </div>
              </div>
            </div>

            {/* Open Positions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Open Positions ({companyJobs.length})
              </h2>
              {companyJobs.length === 0 ? (
                <p className="text-gray-600">No open positions at the moment.</p>
              ) : (
                <div className="space-y-4">
                  {companyJobs.map(job => (
                    <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-1">{job.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </span>
                            <span>{job.type}</span>
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center space-x-2 mt-2">
                            {job.tags.slice(0, 3).map(tag => (
                              <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Company Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Employees</span>
                  <span className="font-semibold text-gray-800">{company.employees}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Open Positions</span>
                  <span className="font-semibold text-gray-800">{companyJobs.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Founded</span>
                  <span className="font-semibold text-gray-800">{company.founded}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Industry</span>
                  <span className="font-semibold text-gray-800">{company.industry}</span>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Benefits & Perks</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Health Insurance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Flexible Working Hours</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Remote Work Options</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Professional Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Competitive Salary</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Team Building Activities</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-gray-700 text-sm">{company.location}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-gray-700 text-sm">{company.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfilePage;