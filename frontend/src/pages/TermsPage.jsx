import React from 'react';
import { FileText, Shield, Users, AlertTriangle } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center space-x-3 mb-3">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Terms & Privacy</h1>
          </div>
          <p className="text-gray-600">Last updated: January 2025</p>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <nav className="flex flex-wrap gap-4 text-sm font-medium">
            <a href="#terms" className="text-blue-600 hover:text-blue-800">Terms</a>
            <a href="#privacy" className="text-blue-600 hover:text-blue-800">Privacy</a>
            <a href="#cookies" className="text-blue-600 hover:text-blue-800">Cookies</a>
            <a href="#data" className="text-blue-600 hover:text-blue-800">Data Protection</a>
          </nav>
        </div>

        {/* Terms */}
        <div id="terms" className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-3">
            <Shield className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Terms of Service</h2>
          </div>
          <p className="text-gray-700 mb-3">
            By using <strong>JobPortal</strong>, you agree to our terms. Please use the site responsibly and avoid
            any unlawful, harmful, or disruptive activities.
          </p>
          <p className="text-gray-700 mb-3">
            Users must provide accurate details and protect their account credentials. We reserve the right to
            suspend accounts for violations.
          </p>
          <p className="text-gray-700">
            Content posted by users remains their responsibility. We may remove inappropriate or offensive material.
          </p>
        </div>

        {/* Privacy */}
        <div id="privacy" className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-3">
            <Users className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Privacy Policy</h2>
          </div>
          <p className="text-gray-700 mb-3">
            We collect only necessary details like name, email, and profile information to provide our services.
          </p>
          <p className="text-gray-700 mb-3">
            Your data is used solely for improving user experience, processing requests, and communicating updates.
          </p>
          <p className="text-gray-700">
            We do not sell or share personal data without your consent.
          </p>
        </div>

        {/* Cookies */}
        <div id="cookies" className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-3">
            <AlertTriangle className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Cookie Policy</h2>
          </div>
          <p className="text-gray-700 mb-3">
            We use cookies to enhance performance and understand user activity. You can disable cookies anytime
            in your browser settings.
          </p>
        </div>

        {/* Data Protection */}
        <div id="data" className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Data Protection</h2>
          <p className="text-gray-700 mb-3">
            We follow standard security practices to safeguard your data. You can request data correction or deletion
            anytime by contacting us.
          </p>
          <p className="text-gray-700">
            All data handling complies with basic privacy and protection standards.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-700 mb-2">For questions regarding our Terms or Privacy Policy:</p>
          <div className="text-gray-700 text-sm space-y-1">
            <p>Email: support@jobportal.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: 123 Tech Street, Chennai, Tamil Nadu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
