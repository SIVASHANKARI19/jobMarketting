import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search as SearchIcon,
  Work,
  Login,
  Logout,
  AccountCircle,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const Header = ({ currentUser, onLogout }) => {
  const isLoggedIn = !!currentUser;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b h-fit border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="px-6 py-3 items-center">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
              <Work className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              JobPortal
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 justify-between">
            {isLoggedIn && (
              <div className="flex-1 max-w-xl mx-8">
                <div className="relative">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search jobs, companies..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center space-x-3">
                    <img
                      src={currentUser.avatar || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"}
                      alt="Profile"
                      className="w-10 h-10 rounded-full border-2 border-gray-200"
                    />
                    <div className="hidden md:block">
                      <p className="text-sm font-medium text-gray-800">{currentUser.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{currentUser.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={onLogout}
                    className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <Logout className="w-5 h-5" />
                    <span className="hidden md:inline">Logout</span>
                  </button>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/register"
                    className="text-sm font-medium text-gray-700 hover:text-blue-600"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {isLoggedIn && (
              <div className="mb-4">
                <div className="relative">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search jobs, companies..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
            <div className="flex flex-col space-y-4">
              {isLoggedIn ? (
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Logout className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              ) : (
                <>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
