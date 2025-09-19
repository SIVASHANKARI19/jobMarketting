import React from 'react';
import { BarChart3, FileText, TrendingUp } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Skill Gap Analysis</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#analysis" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Analysis
            </a>
            <a href="#jobs" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Job Matching
            </a>
            <a href="#learning" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Learning
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

