/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import { useState } from 'react';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { SummaryForm } from './components/SummaryForm';
import { ExperienceForm } from './components/ExperienceForm';
import { EducationForm } from './components/EducationForm';
import { SkillsForm } from './components/SkillsForm';
import { CustomSectionForm } from './components/CustomSectionForm';
import { SectionManager } from './components/SectionManager';
import { ResumePreview } from './components/ResumePreview';
import { printResume } from './utils/pdfExport';
import { FileText, Printer, Settings, Plus, Check } from 'lucide-react';

const ResumeBuilder = () =>{
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      website: '',
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    certifications: [],
    projects: [],
    customSections: [],
    template: 'modern',
    sectionOrder: ['personal', 'summary', 'experience', 'education', 'skills'],
  });

  const [sections, setSections] = useState([
    { id: 'personal', label: 'Personal Info', type: 'default', isVisible: true },
    { id: 'summary', label: 'Summary', type: 'default', isVisible: true },
    { id: 'experience', label: 'Experience', type: 'default', isVisible: true },
    { id: 'education', label: 'Education', type: 'default', isVisible: true },
    { id: 'skills', label: 'Skills', type: 'default', isVisible: true },
  ]);

  const [activeSection, setActiveSection] = useState('personal');
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);

  const updatePersonalInfo = (data) => {
    setResumeData({ ...resumeData, personalInfo: data });
  };

  const updateSummary = (data) => {
    setResumeData({ ...resumeData, summary: data });
  };

  const updateExperience = (data) => {
    setResumeData({ ...resumeData, experience: data });
  };

  const updateEducation = (data) => {
    setResumeData({ ...resumeData, education: data });
  };

  const updateSkills = (data) => {
    setResumeData({ ...resumeData, skills: data });
  };

  const updateCertifications = (data) => {
    setResumeData({ ...resumeData, certifications: data });
  };

  const updateProjects = (data) => {
    setResumeData({ ...resumeData, projects: data });
  };

  const addCustomSection = () => {
    const newSection = {
      id: `custom-${Date.now()}`,
      title: 'Custom Section',
      items: [],
    };
    setResumeData({
      ...resumeData,
      customSections: [...resumeData.customSections, newSection],
    });

    const newSectionConfig = {
      id: newSection.id,
      label: 'Custom Section',
      type: 'custom',
      isVisible: true,
    };
    setSections([...sections, newSectionConfig]);
    setActiveSection(newSection.id);
  };

  const updateCustomSection = (sectionId, updatedSection) => {
    setResumeData({
      ...resumeData,
      customSections: resumeData.customSections.map((s) =>
        s.id === sectionId ? updatedSection : s
      ),
    });

    setSections(
      sections.map((s) =>
        s.id === sectionId ? { ...s, label: updatedSection.title } : s
      )
    );
  };

  const deleteCustomSection = (sectionId) => {
    setResumeData({
      ...resumeData,
      customSections: resumeData.customSections.filter((s) => s.id !== sectionId),
    });
    setSections(sections.filter((s) => s.id !== sectionId));
    setActiveSection('personal');
  };

  const handleReorderSections = (newSections) => {
    setSections(newSections);
    setResumeData({
      ...resumeData,
      sectionOrder: newSections.map((s) => s.id),
    });
  };

  const handleToggleVisibility = (id) => {
    setSections(
      sections.map((s) =>
        s.id === id ? { ...s, isVisible: !s.isVisible } : s
      )
    );
  };

  const changeTemplate = (template) => {
    setResumeData({ ...resumeData, template });
    setShowTemplateSelector(false);
  };

  const templates = [
    {
      id: 'modern',
      name: 'Modern',
      description: 'Clean and professional with blue accents',
      preview: '📄',
      color: 'bg-blue-600'
    },
    {
      id: 'classic',
      name: 'Classic',
      description: 'Traditional serif style',
      preview: '📃',
      color: 'bg-gray-700'
    },
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Simple and elegant',
      preview: '📋',
      color: 'bg-slate-600'
    },
  ];

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalInfoForm data={resumeData.personalInfo} onChange={updatePersonalInfo} />;
      case 'summary':
        return <SummaryForm data={resumeData.summary} onChange={updateSummary} />;
      case 'experience':
        return <ExperienceForm data={resumeData.experience} onChange={updateExperience} />;
      case 'education':
        return <EducationForm data={resumeData.education} onChange={updateEducation} />;
      case 'skills':
        return <SkillsForm data={resumeData.skills} onChange={updateSkills} />;
      default:
        const customSection = resumeData.customSections.find((s) => s.id === activeSection);
        if (customSection) {
          return (
            <CustomSectionForm
              section={customSection}
              onChange={(updated) => updateCustomSection(activeSection, updated)}
              onDelete={() => deleteCustomSection(activeSection)}
            />
          );
        }
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <header className="bg-white border-b border-blue-100 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">ATS Resume Builder</h1>
                <p className="text-xs text-gray-600">Professional, ATS-friendly resumes</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowTemplateSelector(!showTemplateSelector)}
                className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                <Settings className="w-4 h-4" />
                Template: {resumeData.template.charAt(0).toUpperCase() + resumeData.template.slice(1)}
              </button>

              <button
                onClick={printResume}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Printer className="w-4 h-4" />
                Print / Save PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      {showTemplateSelector && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose a Template</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => changeTemplate(template.id)}
                  className={`relative p-6 border-2 rounded-lg text-left transition-all ${
                    resumeData.template === template.id
                      ? 'border-blue-600 bg-blue-50 shadow-lg'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-16 h-20 ${template.color} rounded flex items-center justify-center text-3xl shadow-md`}>
                      {template.preview}
                    </div>
                    {resumeData.template === template.id && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold">
                        <Check className="w-3 h-3" />
                        Active
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">{template.name}</h3>
                  <p className="text-sm text-gray-600">{template.description}</p>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowTemplateSelector(false)}
              className="w-full py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-[1800px] mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Resume Sections</h2>
                <button
                  onClick={addCustomSection}
                  className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  <Plus className="w-4 h-4" />
                  Add Section
                </button>
              </div>

              <SectionManager
                sections={sections}
                onReorder={handleReorderSections}
                onToggleVisibility={handleToggleVisibility}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
              <div className="space-y-6">
                {renderSectionContent()}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl border border-blue-200 p-5">
              <h3 className="font-bold text-blue-900 mb-2">ATS Tips</h3>
              <ul className="text-sm text-blue-800 space-y-1.5">
                <li>• Use standard section headings like "Work Experience" and "Education"</li>
                <li>• Include relevant keywords from the job description</li>
                <li>• Use bullet points to describe achievements and responsibilities</li>
                <li>• Quantify your accomplishments with numbers and metrics</li>
                <li>• Keep formatting simple and avoid images or graphics</li>
              </ul>
            </div>
          </div>

          <div className="lg:sticky lg:top-6 lg:self-start">
            <div className="bg-gray-100 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Live Preview</h2>
                <div className="text-sm text-gray-600">
                  Template: <span className="font-semibold text-blue-600">{resumeData.template}</span>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-xl overflow-hidden" style={{ aspectRatio: '8.5/11' }}>
                <div className="w-full h-full overflow-auto">
                  <ResumePreview data={resumeData} />
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-500 text-center">
                Use Print/Save PDF button to download your resume
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-preview,
          #resume-preview * {
            visibility: visible;
          }
          #resume-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default ResumeBuilder;

