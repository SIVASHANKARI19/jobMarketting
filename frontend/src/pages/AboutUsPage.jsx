import React from 'react';
import { Target, Users, Award, Zap, Heart, Globe } from 'lucide-react';

const AboutUsPage= () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former tech recruiter with 10+ years experience in connecting talent with opportunity.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'David Chen',
      role: 'CTO',
      bio: 'Full-stack developer passionate about building scalable platforms that make a difference.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      bio: 'Operations expert focused on creating seamless experiences for job seekers and employers.',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Michael Thompson',
      role: 'Head of Marketing',
      bio: 'Marketing strategist dedicated to connecting the right people with the right opportunities.',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We exist to democratize access to career opportunities and help people find work they love.'
    },
    {
      icon: Users,
      title: 'People-First',
      description: 'Every decision we make is centered around creating value for job seekers and employers.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly evolve our platform using the latest technology to improve user experience.'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We understand the challenges of job searching and hiring, and we design solutions with care.'
    },
    {
      icon: Globe,
      title: 'Inclusivity',
      description: 'We believe everyone deserves equal access to opportunities, regardless of background.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We set high standards for ourselves and strive to exceed expectations in everything we do.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to revolutionize job searching' },
    { year: '2021', title: '10,000 Users', description: 'Reached our first major milestone of registered users' },
    { year: '2022', title: 'Series A Funding', description: 'Raised $5M to expand our platform and team' },
    { year: '2023', title: '50,000 Jobs Posted', description: 'Facilitated thousands of successful job placements' },
    { year: '2024', title: 'AI Integration', description: 'Launched intelligent job matching algorithms' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About JobPortal</h1>
            <p className="text-xl text-blue-100 mb-6">
              Connecting talent with opportunity since 2020
            </p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              We're on a mission to make job searching and hiring more efficient, transparent, and accessible for everyone. 
              Our platform leverages cutting-edge technology to match the right candidates with the right opportunities.
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
              To democratize access to career opportunities by creating a platform where talent meets opportunity, 
              regardless of background, location, or connections. We believe everyone deserves the chance to find 
              meaningful work that aligns with their skills and aspirations.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become the world's most trusted and efficient job platform, where every job seeker finds their 
              perfect role and every employer discovers exceptional talent. We envision a future where career 
              growth is limitless and opportunities are accessible to all.
            </p>
          </div>
        </div>

        {/* Company Values */}
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

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold mr-6">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Active Job Seekers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,000+</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25,000+</div>
              <div className="text-gray-600">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
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