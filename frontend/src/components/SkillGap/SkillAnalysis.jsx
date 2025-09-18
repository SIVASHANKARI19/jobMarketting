import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts';
import { TrendingUp, TrendingDown, Award, AlertTriangle } from 'lucide-react';

const SkillAnalysis = ({ analysis }) => {
  const COLORS = ['#0077B5', '#00A0DC', '#40E0D0', '#87CEEB', '#B0E0E6'];

  const skillGapData = analysis.skillGaps.map(gap => ({
    skill: gap.skill,
    current: gap.currentLevel,
    required: gap.requiredLevel,
    gap: gap.gap
  }));

  const overallScoreData = [
    {
      name: 'Score',
      value: analysis.overallScore,
      fill: analysis.overallScore >= 70 ? '#10B981' : analysis.overallScore >= 50 ? '#F59E0B' : '#EF4444'
    }
  ];



  const getScoreColor = (score) => {
    if (score >= 70) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score) => {
    if (score >= 70) return 'bg-green-100';
    if (score >= 50) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div id="analysis" className="max-w-7xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Skill Gap Analysis</h2>
        <p className="text-lg text-gray-600">
          Comprehensive analysis of your skills vs market requirements
        </p>
      </div>

      {/* Overall Score Card */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getScoreBg(analysis.overallScore)} mb-4`}>
          <span className={`text-2xl font-bold ${getScoreColor(analysis.overallScore)}`}>
            {analysis.overallScore}%
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Overall Resume Score</h3>
        <p className="text-gray-600 mb-6">
          Based on current market demands and job requirements
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
              <span className="font-semibold text-green-800">Strong Skills</span>
            </div>
            <div className="space-y-1">
              {analysis.strongSkills.slice(0, 3).map((skill, index) => (
                <span key={index} className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-2 mb-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
              <span className="font-semibold text-yellow-800">Improvement Areas</span>
            </div>
            <div className="space-y-1">
              {analysis.improvementAreas.slice(0, 3).map((area, index) => (
                <span key={index} className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm mr-2 mb-1">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Award className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-semibold text-blue-800">Matching Jobs</span>
            </div>
            <p className="text-2xl font-bold text-blue-600">
              {analysis.matchingJobs.length}
            </p>
            <p className="text-blue-600 text-sm">positions available</p>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Skill Gap Bar Chart */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Skill Gap Analysis</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillGapData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="skill" 
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  fontSize={12}
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey="current" fill="#0077B5" name="Current Level" />
                <Bar dataKey="required" fill="#00A0DC" name="Required Level" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Overall Score Radial Chart */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Resume Score Breakdown</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" data={overallScoreData}>
                <RadialBar
                  minAngle={15}
                  label={{ position: 'insideStart', fill: '#fff', fontSize: 16 }}
                  background
                  clockWise
                  dataKey="value"
                />
                <Legend iconSize={18} layout="vertical" verticalAlign="middle" align="right" />
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-gray-900 font-bold text-2xl">
                  {analysis.overallScore}%
                </text>
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detailed Skill Gaps */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Detailed Skill Gap Breakdown</h3>
        <div className="grid gap-4">
          {analysis.skillGaps.map((gap, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-gray-900">{gap.skill}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    gap.priority === 'high' ? 'bg-red-100 text-red-700' :
                    gap.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {gap.priority} priority
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-600">Gap: </span>
                  <span className="font-semibold text-red-600">{gap.gap} levels</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Current Level</span>
                    <span>{gap.currentLevel}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(gap.currentLevel / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Required Level</span>
                    <span>{gap.requiredLevel}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${(gap.requiredLevel / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillAnalysis;

