import React from 'react';
import { BarChart3, PieChart, TrendingUp, Users, Briefcase, Building } from 'lucide-react';

const ReportsPage: React.FC = () => {
  const industryData = [
    { name: 'Technology', jobs: 145, percentage: 42, applications: 1250 },
    { name: 'Finance', jobs: 67, percentage: 20, applications: 890 },
    { name: 'Healthcare', jobs: 45, percentage: 13, applications: 560 },
    { name: 'Education', jobs: 34, percentage: 10, applications: 420 },
    { name: 'Manufacturing', jobs: 28, percentage: 8, applications: 320 },
    { name: 'Others', jobs: 23, percentage: 7, applications: 280 }
  ];

  const topCompanies = [
    { name: 'TechCorp Solutions', jobs: 25, applications: 340, hires: 18 },
    { name: 'InnovateLabs', jobs: 18, applications: 280, hires: 12 },
    { name: 'DataMinds Analytics', jobs: 15, applications: 220, hires: 8 },
    { name: 'CloudTech Infrastructure', jobs: 12, applications: 180, hires: 7 },
    { name: 'DesignStudio Pro', jobs: 10, applications: 150, hires: 5 }
  ];

  const monthlyStats = [
    { month: 'Jan', jobs: 45, applications: 320, users: 120 },
    { month: 'Feb', jobs: 52, applications: 380, users: 140 },
    { month: 'Mar', jobs: 48, applications: 350, users: 110 },
    { month: 'Apr', jobs: 61, applications: 420, users: 160 },
    { month: 'May', jobs: 58, applications: 480, users: 180 },
    { month: 'Jun', jobs: 65, applications: 520, users: 200 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center space-x-3">
            <BarChart3 className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Reports & Analytics</h1>
              <p className="text-gray-600">Platform performance insights and statistics</p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-gray-800">1,247</p>
                <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Jobs</p>
                <p className="text-3xl font-bold text-gray-800">342</p>
                <p className="text-sm text-green-600 mt-1">+8.3% from last month</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Briefcase className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Applications</p>
                <p className="text-3xl font-bold text-gray-800">3,720</p>
                <p className="text-sm text-green-600 mt-1">+15.7% from last month</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Companies</p>
                <p className="text-3xl font-bold text-gray-800">89</p>
                <p className="text-sm text-green-600 mt-1">+5.1% from last month</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Building className="w-8 h-8 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Industry Distribution */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Jobs by Industry</h2>
            <div className="space-y-4">
              {industryData.map((industry, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{industry.name}</span>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-800">{industry.jobs} jobs</span>
                      <span className="text-xs text-gray-500 block">{industry.applications} applications</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${industry.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Trends */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Monthly Trends</h2>
            <div className="space-y-4">
              {monthlyStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-800">{stat.month}</span>
                  </div>
                  <div className="flex space-x-4 text-sm">
                    <div className="text-center">
                      <span className="block text-blue-600 font-medium">{stat.jobs}</span>
                      <span className="text-gray-500">Jobs</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-green-600 font-medium">{stat.applications}</span>
                      <span className="text-gray-500">Apps</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-purple-600 font-medium">{stat.users}</span>
                      <span className="text-gray-500">Users</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Companies */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Performing Companies</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Company</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Jobs Posted</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Applications</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Hires</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Success Rate</th>
                </tr>
              </thead>
              <tbody>
                {topCompanies.map((company, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 font-medium text-sm">{company.name.charAt(0)}</span>
                        </div>
                        <span className="font-medium text-gray-800">{company.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-700">{company.jobs}</td>
                    <td className="py-3 px-4 text-gray-700">{company.applications}</td>
                    <td className="py-3 px-4 text-gray-700">{company.hires}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {Math.round((company.hires / company.applications) * 100)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chart Placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">User Growth Chart</h2>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-2" />
                <p className="text-gray-500">Interactive chart placeholder</p>
                <p className="text-sm text-gray-400">Shows user registration trends over time</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Application Success Rate</h2>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <PieChart className="w-16 h-16 text-gray-300 mx-auto mb-2" />
                <p className="text-gray-500">Interactive pie chart placeholder</p>
                <p className="text-sm text-gray-400">Shows application to hire conversion rates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;