import React from 'react';
import { Target, Users, Zap, Heart, Globe, Award } from 'lucide-react';

const AboutUsPage = () => {
 

  const values = [
    {
      icon: Target,
      title: 'Completed Project',
      description: 'JobPortal is fully built and functional, demonstrating our skills in full-stack development.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Our team collaborated effectively to deliver a complete and polished project.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We implemented modern technologies and features to make the platform dynamic and interactive.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our dedication and effort brought this project from concept to a finished application.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'We focused on making the platform user-friendly and accessible for all.'
    },
    {
      icon: Award,
      title: 'Achievement',
      description: 'Completing JobPortal as a student project is a proud milestone for our team.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About JobPortal</h1>
            <p className="text-xl text-blue-100 mb-6">
              A fully built student project demonstrating our skills in web development
            </p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              JobPortal is a complete application that connects job seekers with opportunities, featuring a fully functional front-end and back-end, along with interactive dashboards and smooth user experience.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To create a complete, functional job portal as a student project and showcase practical skills in full-stack development.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To demonstrate the power of teamwork, coding, and design by delivering a polished, functional web application that can be expanded in the future.
            </p>
          </div>
        </div>

       

        {/* Values Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
         <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Whether you're looking for your next opportunity or searching for top talent, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Start Job Search
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Post a Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
