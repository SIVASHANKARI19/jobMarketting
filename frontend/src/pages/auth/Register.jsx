import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check, User, FileText, Target, MapPin, DollarSign, Calendar, Award } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
const [activeStep, setActiveStep] = useState(() => {
  const savedStep = localStorage.getItem("activeStep");
  return savedStep !== null ? parseInt(savedStep, 10) : 0;
});

   useEffect(() => {
  localStorage.setItem("activeStep", activeStep);
}, [activeStep]);
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    
    // Location Info
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    
    // Professional Info
    qualification: "",
    institution: "",
    graduationYear: "",
    skills: "",
    experience: "",
    currentCompany: "",
    currentPosition: "",
    
    // Job Preferences
    desiredPosition: "",
    preferredLocation: "",
    expectedSalary: "",
    noticePeriod: "",
    workType: "",
    
    // Additional Info
    languages: "",
    certifications: "",
    achievements: "",
    portfolio: "",
    linkedIn: "",
    resume: ""
  });

  const steps = [
    {
      id: 1,
      label: "User Type",
      icon: User,
      shortLabel: "Type"
    },
    {
      id: 2,
      label: "Basic Info",
      icon: FileText,
      shortLabel: "Basic"
    },
    {
      id: 3,
      label: "Location",
      icon: MapPin,
      shortLabel: "Location"
    },
    {
      id: 4,
      label: "Professional",
      icon: Award,
      shortLabel: "Education"
    },
    {
      id: 5,
      label: "Job Preferences",
      icon: Target,
      shortLabel: "Preferences"
    },
    {
      id: 6,
      label: "Additional Info",
      icon: DollarSign,
      shortLabel: "Additional"
    },
    {
      id: 7,
      label: "Review",
      icon: Check,
      shortLabel: "Review"
    }
  ];

  function handleInputChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleNext() {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  }

  function handleBack() {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  }

  function handleReset() {
    setActiveStep(0);
    setUserType("");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      qualification: "",
      institution: "",
      graduationYear: "",
      skills: "",
      experience: "",
      currentCompany: "",
      currentPosition: "",
      desiredPosition: "",
      preferredLocation: "",
      expectedSalary: "",
      noticePeriod: "",
      workType: "",
      languages: "",
      certifications: "",
      achievements: "",
      portfolio: "",
      linkedIn: "",
      resume: ""
    });
  }

  function handleSubmit() {
    console.log("Submitted Data:", { userType, ...formData });
    navigate("/dashboard");
    alert("Registration completed successfully!");
  }

  function isStepValid(stepIndex) {
    switch (stepIndex) {
      case 0:
        return userType !== "";
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.address && formData.city && formData.state && formData.zipCode && formData.country;
      case 3:
        return formData.skills && formData.experience;
      case 4:
        return formData.desiredPosition;
      case 5:
        return true; // Optional step
      case 6:
        return true; // Review step
      default:
        return false;
    }
  }

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Profile Type</h2>
              <p className="text-gray-600">Select the category that best describes your professional background</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  userType === "white-collar" 
                    ? "border-blue-500 bg-blue-50 shadow-md" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setUserType("white-collar")}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    userType === "white-collar" ? "border-blue-500" : "border-gray-300"
                  }`}>
                    {userType === "white-collar" && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">White-Collar Professional</h3>
                </div>
                <p className="text-gray-600 mt-2 ml-7">Office workers, managers, executives, IT professionals, consultants</p>
              </div>
              
              <div 
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  userType === "blue-collar" 
                    ? "border-blue-500 bg-blue-50 shadow-md" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setUserType("blue-collar")}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    userType === "blue-collar" ? "border-blue-500" : "border-gray-300"
                  }`}>
                    {userType === "blue-collar" && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Blue-Collar Worker</h3>
                </div>
                <p className="text-gray-600 mt-2 ml-7">Skilled trades, technicians, operators, craftspeople, laborers</p>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Basic Information</h2>
              <p className="text-gray-600">Tell us about yourself</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Location Information</h2>
              <p className="text-gray-600">Where are you located?</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Street Address *</label>
                <input
                  type="text"
                  name="address"
                  placeholder="123 Main Street, Apt 4B"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">City *</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="New York"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">State/Province *</label>
                  <input
                    type="text"
                    name="state"
                    placeholder="NY"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">ZIP/Postal Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="10001"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select Country</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="au">Australia</option>
                    <option value="in">India</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Professional Background</h2>
              <p className="text-gray-600">Tell us about your education and experience</p>
            </div>
            
            <div className="space-y-6">
              {userType === "white-collar" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Highest Qualification *</label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select Qualification</option>
                      <option value="high-school">High School</option>
                      <option value="associate">Associate Degree</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">PhD</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Institution</label>
                    <input
                      type="text"
                      name="institution"
                      placeholder="University/College Name"
                      value={formData.institution}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Graduation Year</label>
                    <input
                      type="number"
                      name="graduationYear"
                      placeholder="2020"
                      min="1960"
                      max="2030"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Key Skills *</label>
                <textarea
                  name="skills"
                  placeholder="List your key skills (e.g., JavaScript, Project Management, Data Analysis)"
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Total Experience *</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select Experience</option>
                    <option value="fresher">Fresher (0 years)</option>
                    <option value="1-2">1-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Current Company</label>
                  <input
                    type="text"
                    name="currentCompany"
                    placeholder="Company Name"
                    value={formData.currentCompany}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Current Position</label>
                <input
                  type="text"
                  name="currentPosition"
                  placeholder="Your current job title"
                  value={formData.currentPosition}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Job Preferences</h2>
              <p className="text-gray-600">What kind of opportunities are you looking for?</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Desired Position *</label>
                <input
                  type="text"
                  name="desiredPosition"
                  placeholder="Job title you're seeking"
                  value={formData.desiredPosition}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Preferred Location</label>
                  <input
                    type="text"
                    name="preferredLocation"
                    placeholder="City or Remote"
                    value={formData.preferredLocation}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Expected Salary</label>
                  <input
                    type="text"
                    name="expectedSalary"
                    placeholder="e.g., $60,000 - $80,000"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Notice Period</label>
                  <select
                    name="noticePeriod"
                    value={formData.noticePeriod}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select Notice Period</option>
                    <option value="immediate">Immediate</option>
                    <option value="1-week">1 Week</option>
                    <option value="2-weeks">2 Weeks</option>
                    <option value="1-month">1 Month</option>
                    <option value="2-months">2 Months</option>
                    <option value="3-months">3 Months</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Work Type Preference</label>
                  <select
                    name="workType"
                    value={formData.workType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select Work Type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="freelance">Freelance</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Additional Information</h2>
              <p className="text-gray-600">Help us know you better</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Languages</label>
                <input
                  type="text"
                  name="languages"
                  placeholder="e.g., English (Native), Spanish (Fluent), French (Basic)"
                  value={formData.languages}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Certifications</label>
                <textarea
                  name="certifications"
                  placeholder="List any relevant certifications"
                  value={formData.certifications}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Key Achievements</label>
                <textarea
                  name="achievements"
                  placeholder="Highlight your major accomplishments"
                  value={formData.achievements}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Portfolio URL</label>
                  <input
                    type="url"
                    name="portfolio"
                    placeholder="https://yourportfolio.com"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">LinkedIn Profile</label>
                  <input
                    type="url"
                    name="linkedIn"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Review Your Information</h2>
              <p className="text-gray-600">Please review all details before submitting</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Personal Information</h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
                    <p><span className="font-medium">Email:</span> {formData.email}</p>
                    <p><span className="font-medium">Phone:</span> {formData.phone}</p>
                    <p><span className="font-medium">User Type:</span> {userType}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">City:</span> {formData.city}</p>
                    <p><span className="font-medium">State:</span> {formData.state}</p>
                    <p><span className="font-medium">Country:</span> {formData.country}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Professional</h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Experience:</span> {formData.experience}</p>
                    <p><span className="font-medium">Skills:</span> {formData.skills}</p>
                    <p><span className="font-medium">Current Role:</span> {formData.currentPosition}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Preferences</h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Desired Position:</span> {formData.desiredPosition}</p>
                                        <p><span className="font-medium">Expected Salary:</span> {formData.expectedSalary}</p>
                    <p><span className="font-medium">Notice Period:</span> {formData.noticePeriod}</p>
                    <p><span className="font-medium">Work Type:</span> {formData.workType}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Additional Info</h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Languages:</span> {formData.languages}</p>
                    <p><span className="font-medium">Certifications:</span> {formData.certifications}</p>
                    <p><span className="font-medium">Achievements:</span> {formData.achievements}</p>
                    <p><span className="font-medium">Portfolio:</span> {formData.portfolio}</p>
                    <p><span className="font-medium">LinkedIn:</span> {formData.linkedIn}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;

}}
  return (
 <div className="max-w-5xl mx-auto px-4 pb-32"> {/* Add enough bottom padding */}
  {/* Stepper Header */}
  <div className="flex items-center justify-between mb-10 overflow-x-auto space-x-2 md:space-x-4">
    {steps.map((step, index) => {
      const Icon = step.icon;
      return (
        <div
          key={step.id}
          className={`flex flex-col items-center text-sm font-medium transition-all ${
            activeStep === index
              ? "text-blue-600"
              : index < activeStep
              ? "text-green-600"
              : "text-gray-400"
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-1 ${
              activeStep === index
                ? "border-blue-600 bg-blue-50"
                : index < activeStep
                ? "border-green-600 bg-green-50"
                : "border-gray-300"
            }`}
          >
            <Icon className="w-5 h-5" />
          </div>
          <span className="hidden md:block">{step.shortLabel}</span>
        </div>
      );
    })}
  </div>

  {/* Step Content */}
  <div className="bg-white rounded-xl shadow p-6 md:p-8 mb-6">
    {renderStepContent()}
  </div>

  {/* Reset Button */}
  {activeStep === steps.length - 1 && (
    <div className="mt-6 text-center">
      <button
        onClick={handleReset}
        className="text-blue-600 hover:underline text-sm"
      >
        Reset Form
      </button>
    </div>
  )}

  {/* Navigation Buttons - Fixed Bottom */}
  <div className="fixed bottom-1 left-0 w-full bg-white border-t border-gray-200 shadow-md">
    <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between">
      <button
        onClick={handleBack}
        disabled={activeStep === 0}
        className="px-6 py-2 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 disabled:opacity-50"
      >
        Back
      </button>

      {activeStep < steps.length - 1 ? (
        <button
          onClick={handleNext}
          disabled={!isStepValid(activeStep)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          Next
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Submit
        </button>
      )}
    </div>
  </div>
</div>

  );};

    

export default Register;
