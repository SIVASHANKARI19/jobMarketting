import { Link } from "react-router-dom";
import {
  BarChart3,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Github,
  Linkedin,
} from "lucide-react";
import Footer from "../components/Footer";

const HomePage = () => {
  const features = [
    {
      icon: Users,
      title: "All-in-One Talent Hub",
      description:
        "Job seekers and small businesses connect directly—whether you’re hiring or looking for your next opportunity.",
    },
    {
      icon: Zap,
      title: "Instant Matching",
      description:
        "Our system instantly matches job seekers with suitable openings based on skills and preferences.",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Market Trends",
      description:
        "Stay ahead with live insights into industry demand, salary benchmarks, and trending job roles.",
    },
    {
      icon: BarChart3,
      title: "Smart Job Management",
      description:
        "Employers can post jobs, manage applications, and shortlist candidates easily—all in one place.",
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description:
        "All profiles and job posts are reviewed to ensure credibility, privacy, and data safety.",
    },
    {
      icon: Globe,
      title: "Local & Global Reach",
      description:
        "Opportunities for everyone—from small town industries to global enterprises and remote work.",
    },
  ];

  const stats = [
    { label: "Registered Users", value: "75K+" },
    { label: "Jobs Posted", value: "10K+" },
    { label: "Industries Covered", value: "40+" },
    { label: "Live Matches Made", value: "85K+" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering
              <span className="text-blue-600 block">India’s Job Market</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A platform where talent meets opportunity. From skilled job
              seekers to small-scale industries—everyone grows here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 inline" />
        

           </Link>
             <Link
                to="/skill-gap-analyzer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Try skillGapAnalyser
                <ArrowRight className="w-5 h-5 ml-2 inline" />
        

           </Link>
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 opacity-20">
          <Github className="w-16 h-16 text-blue-600" />
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <Linkedin className="w-12 h-12 text-blue-600" />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-20">
          <BarChart3 className="w-20 h-20 text-blue-600" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're looking for a job or hiring, our tools work
              seamlessly to support your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-blue-200"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Start your journey in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Register Your Profile
              </h3>
              <p className="text-gray-600">
                Whether you're a job seeker or a small business, create your
                free account to join the talent marketplace.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Complete Your Profile
              </h3>
              <p className="text-gray-600">
                Job seekers can add skills, resumes, and preferences. Employers
                can post job openings and describe company needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Connect & Hire
              </h3>
              <p className="text-gray-600">
                Get matched instantly. Job seekers apply directly. Small
                industries can track applicants and make quick hires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Future of Hiring
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Empower yourself or your business by joining our growing platform
            today.
          </p>
          <Link
            to="/register"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            Start Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;