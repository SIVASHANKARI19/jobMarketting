import React from 'react';
import { FileText, Shield, Users, AlertTriangle } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Terms of Service & Privacy Policy</h1>
          </div>
          <p className="text-gray-600">Last updated: January 15, 2024</p>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <nav className="flex flex-wrap gap-4">
            <a href="#terms" className="text-blue-600 hover:text-blue-800 font-medium">Terms of Service</a>
            <a href="#privacy" className="text-blue-600 hover:text-blue-800 font-medium">Privacy Policy</a>
            <a href="#cookies" className="text-blue-600 hover:text-blue-800 font-medium">Cookie Policy</a>
            <a href="#data" className="text-blue-600 hover:text-blue-800 font-medium">Data Protection</a>
          </nav>
        </div>

        {/* Terms of Service */}
        <div id="terms" className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Terms of Service</h2>
          </div>
          
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h3>
            <p className="text-gray-700 mb-6">
              By accessing and using JobPortal ("we," "us," or "our"), you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Use License</h3>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials on JobPortal's website for 
              personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>attempt to decompile or reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. User Accounts</h3>
            <p className="text-gray-700 mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current 
              at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Prohibited Uses</h3>
            <p className="text-gray-700 mb-4">You may not use our service:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Content</h3>
            <p className="text-gray-700 mb-6">
              Our service allows you to post, link, store, share and otherwise make available certain information, text, 
              graphics, videos, or other material. You are responsible for the content that you post to the service, 
              including its legality, reliability, and appropriateness.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Termination</h3>
            <p className="text-gray-700 mb-6">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason 
              whatsoever, including without limitation if you breach the Terms.
            </p>
          </div>
        </div>

        {/* Privacy Policy */}
        <div id="privacy" className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
          </div>
          
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect</h3>
            <p className="text-gray-700 mb-4">We collect information you provide directly to us, such as when you:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Create an account</li>
              <li>Apply for jobs</li>
              <li>Post job listings</li>
              <li>Contact us for support</li>
              <li>Subscribe to our newsletter</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">How We Use Your Information</h3>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Information Sharing</h3>
            <p className="text-gray-700 mb-6">
              We may share your information in certain situations. We will not sell, rent, or share your personal 
              information with third parties without your consent, except as described in this policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Security</h3>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Rights</h3>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Request transfer of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>
        </div>

        {/* Cookie Policy */}
        <div id="cookies" className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Cookie Policy</h2>
          </div>
          
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">What Are Cookies</h3>
            <p className="text-gray-700 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of Cookies We Use</h3>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Essential Cookies</h4>
                <p className="text-gray-700">These cookies are necessary for the website to function and cannot be disabled.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Analytics Cookies</h4>
                <p className="text-gray-700">These cookies help us understand how visitors interact with our website.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Marketing Cookies</h4>
                <p className="text-gray-700">These cookies are used to track visitors across websites for marketing purposes.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Managing Cookies</h3>
            <p className="text-gray-700 mb-6">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your 
              computer and you can set most browsers to prevent them from being placed.
            </p>
          </div>
        </div>

        {/* Data Protection */}
        <div id="data" className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Data Protection & GDPR Compliance</h2>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              We are committed to protecting your personal data and respecting your privacy rights. Under the General 
              Data Protection Regulation (GDPR), you have specific rights regarding your personal information.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Legal Basis for Processing</h3>
            <p className="text-gray-700 mb-6">
              We process your personal data on the following legal bases: consent, contract performance, legitimate 
              interests, and legal compliance.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Retention</h3>
            <p className="text-gray-700 mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in 
              this privacy policy, unless a longer retention period is required by law.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">International Transfers</h3>
            <p className="text-gray-700 mb-6">
              Your information may be transferred to and processed in countries other than your own. We ensure 
              appropriate safeguards are in place to protect your data.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Questions About Our Terms or Privacy Policy?</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms of Service or our Privacy Policy, please contact us:
          </p>
          <div className="space-y-2 text-gray-700">
            <p>Email: legal@jobportal.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Address: 123 Tech Street, Koramangala, Bangalore, Karnataka 560034</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;