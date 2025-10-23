import React from 'react';
import { ResumeData } from '../../types/resume';

interface MinimalTemplateProps {
  data: ResumeData;
}

export const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ data }) => {
  const formatDate = (date: string, current: boolean) => {
    if (current) return 'Present';
    if (!date) return '';
    const [year, month] = date.split('-');
    return `${month}/${year}`;
  };

  return (
    <div className="w-full h-full p-12 bg-white text-gray-900" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-5xl font-light text-gray-900 tracking-tight">
            {data.personalInfo.name || 'Your Name'}
          </h1>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
            {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
            {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
            {data.personalInfo.linkedin && <span>{data.personalInfo.linkedin}</span>}
            {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
          </div>
        </div>

        {/* Summary */}
        {data.summary && (
          <div className="border-l-2 border-blue-600 pl-4">
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div>
            <h2 className="text-xs font-bold text-blue-900 mb-4 uppercase tracking-widest">
              Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l border-gray-200">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">{exp.position}</h3>
                      <p className="text-sm text-gray-600">{exp.company}</p>
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      {exp.location && <div>{exp.location}</div>}
                      <div>
                        {formatDate(exp.startDate, false)} - {formatDate(exp.endDate, exp.current)}
                      </div>
                    </div>
                  </div>
                  {exp.description && (
                    <div className="mt-2 text-gray-700 text-sm whitespace-pre-line leading-relaxed">
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
            <h2 className="text-xs font-bold text-blue-900 mb-4 uppercase tracking-widest">
              Education
            </h2>
            <div className="space-y-5">
              {data.education.map((edu) => (
                <div key={edu.id} className="relative pl-4 border-l border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">{edu.institution}</h3>
                      <p className="text-sm text-gray-600">
                        {edu.degree}
                        {edu.field && ` in ${edu.field}`}
                      </p>
                      {edu.gpa && (
                        <p className="text-xs text-gray-500 mt-1">GPA: {edu.gpa}</p>
                      )}
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      {edu.location && <div>{edu.location}</div>}
                      <div>
                        {formatDate(edu.startDate, false)} - {formatDate(edu.endDate, edu.current)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xs font-bold text-blue-900 mb-4 uppercase tracking-widest">
              Skills
            </h2>
            <div className="space-y-2 pl-4 border-l border-gray-200">
              {data.skills.map((skill) => (
                <div key={skill.id} className="flex gap-4">
                  {skill.category && (
                    <span className="text-sm font-medium text-gray-900 min-w-28">{skill.category}</span>
                  )}
                  <span className="text-sm text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <div>
            <h2 className="text-xs font-bold text-blue-900 mb-4 uppercase tracking-widest">
              Certifications
            </h2>
            <div className="space-y-3 pl-4 border-l border-gray-200">
              {data.certifications.map((cert) => (
                <div key={cert.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{cert.name}</h3>
                      <p className="text-xs text-gray-600">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-gray-500">
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
            <h2 className="text-xs font-bold text-blue-900 mb-4 uppercase tracking-widest">
              Projects
            </h2>
            <div className="space-y-4 pl-4 border-l border-gray-200">
              {data.projects.map((project) => (
                <div key={project.id}>
                  <h3 className="text-sm font-semibold text-gray-900">{project.name}</h3>
                  <p className="text-xs text-gray-700 mt-1">{project.description}</p>
                  {project.technologies && (
                    <p className="text-xs text-gray-600 mt-1">
                      {project.technologies}
                    </p>
                  )}
                  {project.link && (
                    <p className="text-xs text-blue-600 mt-1">{project.link}</p>
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
              <h2 className="text-xs font-bold text-blue-900 mb-4 uppercase tracking-widest">
                {section.title}
              </h2>
              <div className="space-y-2 pl-4 border-l border-gray-200">
                {section.items.map((item) => (
                  <div key={item.id} className="text-xs text-gray-700 whitespace-pre-line leading-relaxed">
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
