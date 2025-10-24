import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check, User, FileText, Target, MapPin, DollarSign, Calendar, Award } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
const [activeStep, setActiveStep] = useState(() => {
  const savedStep = localStorage.getItem("activeStep");
  return savedStep !== null ? parseInt(savedStep, 10) : 1;
});

   useEffect(() => {
  localStorage.setItem("activeStep", activeStep);
}, [activeStep]);
  const [formData, setFormData] = useState({
    //page 1 Basic Info
    name : "",
    email: "",
    phone: "",
    dateOfBirth: "",
<<<<<<< HEAD
    city: "",
    
    // Page 2 Professional Background
=======
    password:"",
    role:"",
    
    // Location Info
    address: "",
    
    // Professional Info
>>>>>>> 34bc275bec8519787d78172ac14b5cb5c3695c86
    skills: "",
    experience: "",
    currentPosition: "",
    
    // Page 3 Job Preferences
    desiredPosition: "",
    expectedSalary: "",
<<<<<<< HEAD
    linkedin: "",
    github:"",
=======
    
    // Additional Info
    linkedIn: "",
    github:"",
    resume: ""
>>>>>>> 34bc275bec8519787d78172ac14b5cb5c3695c86
  });

  const steps = [
   
    {
      id: 1,
      label: "Basic Info",
      icon: FileText,
      shortLabel: "Basic"
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
    setFormData({
      name: "",
      email: "",
      phone: "",
<<<<<<< HEAD
      dateOfBirth: "",
      city: "",
       // Page 2 Professional Background
    skills: "",
    experience: "",
    currentCompany: "",
    currentPosition: "",
    
    // Page 3 Job Preferences
    desiredPosition: "",
    expectedSalary: "",
    linkedin: "",
    github:"",
=======
      gender: "",
      address: "",
      city: "",
      state: "",
      skills: "",
      experience: "",
      currentCompany: "",
      currentPosition: "",
      desiredPosition: "",
      preferredLocation: "",
      expectedSalary: "",
      linkedIn: "",
      github:"",
      resume: "",
      password:"",
      role:""
>>>>>>> 34bc275bec8519787d78172ac14b5cb5c3695c86
    });
  }

  function handleSubmit() {
    console.log("Submitted Data:", {formData });
    navigate("/dashboard");
    alert("Registration completed successfully!");
  }

  function isStepValid(stepIndex) {
    switch (stepIndex) {
      case 0:
<<<<<<< HEAD
        return formData.name && formData.email && formData.phone;
      case 1:
        return formData.skills && formData.experience;
      case 2:
        return formData.desiredPosition;
      case 3:
        return true;
      case 4:
=======
        return formData.firstName && formData.email && formData.phone;
      case 1:
        return formData.skills && formData.experience;
      case 2:
>>>>>>> 34bc275bec8519787d78172ac14b5cb5c3695c86
        return formData.desiredPosition;
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
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Basic Information</h2>
              <p className="text-gray-600">Tell us about yourself</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700"> Name *</label>
                <input
                  type="text"
<<<<<<< HEAD
                  name="name"
                  placeholder="Name"
                  value={formData.name}
=======
                  name="firstName"
                  placeholder="Name"
                  value={formData.firstName}
>>>>>>> 34bc275bec8519787d78172ac14b5cb5c3695c86
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
<<<<<<< HEAD
              
           
=======
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700"> Password *</label>
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
>>>>>>> 34bc275bec8519787d78172ac14b5cb5c3695c86
              
           <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Role *</label>
                  <select
                    name="experience"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select Role :</option>
                    <option value="fresher">Job Seeker</option>
                    <option value="1-2">Client</option>
                  </select>
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
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Professional Background</h2>
              <p className="text-gray-600">Tell us about your education and experience</p>
            </div>
            
            <div className="space-y-6">
              
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

      case 2:
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
                  <label className="text-sm font-medium text-gray-700">LinkedIn Profile</label>
                  <input
                    type="text"
<<<<<<< HEAD
                    name="linkedin"
                    placeholder="LinkedIn Profile"
                    value={formData.linkedin}
=======
                    name="LinkedIn Profile"
                    placeholder="LinkedIn Profile"
                    value={formData.linkedIn}
>>>>>>> 34bc275bec8519787d78172ac14b5cb5c3695c86
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Github Profile</label>
                  <input
                    type="text"
<<<<<<< HEAD
                    name="github"
=======
                    name="LinkedIn Profile"
>>>>>>> 34bc275bec8519787d78172ac14b5cb5c3695c86
                    placeholder="GitHub Profile"
                    value={formData.github}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
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

      
      case 3:
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
                    <p><span className="font-medium">Name:</span> {formData.Name} {formData.lastName}</p>
                    <p><span className="font-medium">Email:</span> {formData.email}</p>
                    <p><span className="font-medium">Phone:</span> {formData.phone}</p>
                  </div>
                </div>
                
              
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Professional</h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Experience:</span> {formData.experience}</p>
                    <p><span className="font-medium">Skills:</span> {formData.skills}</p>
                  </div>
                </div>
                
         

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Additional Info</h3>
                  <div className="space-y-1 text-sm">
                     <p><span className="font-medium">Desired Position:</span> {formData.desiredPosition}</p>
                    <p><span className="font-medium">Portfolio:</span> {formData.portfolio}</p>
<<<<<<< HEAD
                    <p><span className="font-medium">LinkedIn:</span> {formData.linkedin}</p>
=======
                    <p><span className="font-medium">LinkedIn:</span> {formData.linkedIn}</p>
>>>>>>> 34bc275bec8519787d78172ac14b5cb5c3695c86
                    <p><span className="font-medium">GitHub:</span> {formData.github}</p>
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