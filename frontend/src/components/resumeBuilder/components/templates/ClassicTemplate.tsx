import React from 'react';
import { ResumeData } from '../../types/resume';

interface ClassicTemplateProps {
  data: ResumeData;
}

export const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ data }) => {
  const formatDate = (date: string, current: boolean) => {
    if (current) return 'Present';
    if (!date) return '';
    const [year, month] = date.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="w-full h-full p-12 bg-white text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center border-b-2 border-gray-800 pb-5">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {data.personalInfo.name || 'Your Name'}
          </h1>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-700">
            {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
            {data.personalInfo.phone && <span>•</span>}
            {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
            {data.personalInfo.location && <span>•</span>}
            {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
          </div>
          {(data.personalInfo.linkedin || data.personalInfo.website) && (
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-700 mt-1">
              {data.personalInfo.linkedin && <span>{data.personalInfo.linkedin}</span>}
              {data.personalInfo.website && data.personalInfo.linkedin && <span>•</span>}
              {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
            </div>
          )}
        </div>

        {/* Summary */}
        {data.summary && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-400 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-gray-800 leading-relaxed text-justify">{data.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-400 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-5">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-base font-bold text-gray-900">{exp.position}</h3>
                    <span className="text-sm text-gray-700 italic">
                      {formatDate(exp.startDate, false)} - {formatDate(exp.endDate, exp.current)}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <p className="text-base italic text-gray-800">{exp.company}</p>
                    {exp.location && <span className="text-sm text-gray-700">{exp.location}</span>}
                  </div>
                  {exp.description && (
                    <div className="text-gray-800 text-sm whitespace-pre-line leading-relaxed">
                      {exp.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-400 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-base font-bold text-gray-900">{edu.institution}</h3>
                    <span className="text-sm text-gray-700 italic">
                      {formatDate(edu.startDate, false)} - {formatDate(edu.endDate, edu.current)}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <p className="text-base text-gray-800">
                      {edu.degree}
                      {edu.field && ` in ${edu.field}`}
                    </p>
                    {edu.location && <span className="text-sm text-gray-700">{edu.location}</span>}
                  </div>
                  {edu.gpa && (
                    <p className="text-sm text-gray-700 mt-0.5">GPA: {edu.gpa}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-400 pb-1">
              SKILLS
            </h2>
            <div className="space-y-2">
              {data.skills.map((skill) => (
                <div key={skill.id} className="flex gap-3">
                  {skill.category && (
                    <span className="font-bold text-gray-900 min-w-32">{skill.category}:</span>
                  )}
                  <span className="text-gray-800">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-400 pb-1">
              CERTIFICATIONS
            </h2>
            <div className="space-y-3">
              {data.certifications.map((cert) => (
                <div key={cert.id}>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h3 className="font-bold text-gray-900">{cert.name}</h3>
                      <p className="text-sm text-gray-800 italic">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-700">
                      {cert.date}
                      {cert.expiryDate && ` - ${cert.expiryDate}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-400 pb-1">
              PROJECTS
            </h2>
            <div className="space-y-4">
              {data.projects.map((project) => (
                <div key={project.id}>
                  <h3 className="font-bold text-gray-900">{project.name}</h3>
                  <p className="text-sm text-gray-800 mt-1">{project.description}</p>
                  {project.technologies && (
                    <p className="text-sm text-gray-800 mt-1">
                      <span className="font-bold">Technologies:</span> {project.technologies}
                    </p>
                  )}
                  {project.link && (
                    <p className="text-sm text-gray-700 mt-1">{project.link}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Custom Sections */}
        {data.customSections.map((section) => (
          section.items.length > 0 && (
            <div key={section.id}>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-400 pb-1">
                {section.title.toUpperCase()}
              </h2>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <div key={item.id} className="text-gray-800 text-sm whitespace-pre-line leading-relaxed">
                    {item.content}
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};
