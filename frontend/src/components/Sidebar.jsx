
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  PlusCircle,
  BarChart3,
  Mail,
  Info,
  FileCheck,
  TrendingUp,
  Newspaper,
  BookOpen
} from 'lucide-react';

const Sidebar = ({ currentUser }) => {
  const location = useLocation();

  const getMenuItems = () => {
    if (currentUser?.role === 'jobseeker') {
      return [
        { path: '/feed', icon: Home, label: 'Job Feed' },
        { path: '/job-trends', icon: TrendingUp, label: 'Job Trends' },
        { path: '/resume' ,icon : Newspaper , label : 'Resume'},
        { path: '/courses' ,icon : BookOpen , label : 'Courses'},

      ];
    } else if (currentUser?.role === 'client') {
      return [
        { path: '/feed', icon: Home, label: 'Dashboard' },
        { path: '/courses' ,icon : BookOpen , label : 'Courses'},
        { path: '/post-job', icon: PlusCircle, label: 'Post Job' },

      ];
    } else if (currentUser?.role === 'admin') {
      return [
        { path: '/admin-dashboard', icon: BarChart3, label: 'Dashboard' },
      ];
    }
    
    // return [{ path: '/feed', icon: Home, label: 'Home' }];
  };

  const bottomItems = [
    { path: '/contact', icon: Mail, label: 'Contact Us' },
    { path: '/about', icon: Info, label: 'About Us' },
    { path: '/terms', icon: FileCheck, label: 'Terms' },
  ];

  return (
    <div className="w-64 bg-white shadow-xl h-full fixed left-0 top-16 z-40 border-r border-gray-100">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
          <img
            src={
              currentUser?.avatar ||
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
            }
            alt="Profile"
            className="w-14 h-14 rounded-full border-3 border-white shadow-md"
          />
          <div>
            <h3 className="font-bold text-gray-800 text-lg">{currentUser?.name || 'Guest'}</h3>
            <p className="text-sm text-blue-600 capitalize font-medium">
              {currentUser?.role || 'jobseeker'}
            </p>
            {currentUser?.role === 'jobseeker' && (
              <div className="flex items-center mt-1">
                <div className="w-16 bg-gray-200 rounded-full h-1.5 mr-2">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full"
                    style={{ width: '75%' }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">75%</span>
              </div>
            )}
          </div>
        </div>

        <nav className="space-y-1">
          {getMenuItems().map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:transform hover:scale-105'
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? 'text-white' : 'group-hover:text-blue-600'
                  }`}
                />
                <span className="font-semibold">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
            Support
          </h4>
          <nav className="space-y-1">
            {bottomItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {currentUser?.role === 'jobseeker' && (
          <div className="mt-8 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
            <h4 className="font-semibold text-gray-800 mb-3">This Week</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Profile Views</span>
                <span className="font-bold text-green-600">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Applications</span>
                <span className="font-bold text-blue-600">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Responses</span>
                <span className="font-bold text-purple-600">1</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
