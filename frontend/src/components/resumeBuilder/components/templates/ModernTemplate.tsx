import React from 'react';
import { ResumeData } from '../../types/resume';
import { Mail, Phone, MapPin, Linkedin, Globe, Calendar } from 'lucide-react';

interface ModernTemplateProps {
  data: ResumeData;
}

export const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  const formatDate = (date: string, current: boolean) => {
    if (current) return 'Present';
    if (!date) return '';
    const [year, month] = date.split('-');
    return `${month}/${year}`;
  };

  return (
    <div className="w-full h-full p-12 bg-white text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div className="space-y-6">
        {/* Header */}
        <div className="border-b-4 border-blue-600 pb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {data.personalInfo.name || 'Your Name'}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            {data.personalInfo.email && (
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>{data.personalInfo.email}</span>
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>{data.personalInfo.location}</span>
              </div>
            )}
            {data.personalInfo.linkedin && (
              <div className="flex items-center gap-1.5">
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span className="truncate">{data.personalInfo.linkedin}</span>
              </div>
            )}
            {data.personalInfo.website && (
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-blue-600" />
                <span className="truncate">{data.personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {data.summary && (
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-3 uppercase tracking-wide">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide">
              Work Experience
            </h2>
            <div className="space-y-5">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-base font-semibold text-blue-700">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      {exp.location && <div>{exp.location}</div>}
                      <div className="flex items-center gap-1 justify-end">
                        <Calendar className="w-3.5 h-3.5" />
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
            <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide">
              Education
            </h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{edu.institution}</h3>
                      <p className="text-base text-gray-700">
                        {edu.degree}
                        {edu.field && ` in ${edu.field}`}
                      </p>
                      {edu.gpa && (
                        <p className="text-sm text-gray-600 mt-0.5">GPA: {edu.gpa}</p>
                      )}
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      {edu.location && <div>{edu.location}</div>}
                      <div className="flex items-center gap-1 justify-end">
                        <Calendar className="w-3.5 h-3.5" />
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
            <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide">
              Skills
            </h2>
            <div className="space-y-2">
              {data.skills.map((skill) => (
                <div key={skill.id} className="flex gap-3">
                  {skill.category && (
                    <span className="font-semibold text-gray-900 min-w-32">{skill.category}:</span>
                  )}
                  <span className="text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide">
              Certifications
            </h2>
            <div className="space-y-3">
              {data.certifications.map((cert) => (
                <div key={cert.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{cert.name}</h3>
                      <p className="text-sm text-gray-700">{cert.issuer}</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      {cert.date}
                      {cert.expiryDate && ` - ${cert.expiryDate}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide">
              Projects
            </h2>
            <div className="space-y-4">
              {data.projects.map((project) => (
                <div key={project.id}>
                  <h3 className="font-bold text-gray-900">{project.name}</h3>
                  <p className="text-sm text-gray-700 mt-1">{project.description}</p>
                  {project.technologies && (
                    <p className="text-sm text-blue-700 mt-1">
                      <span className="font-semibold">Technologies:</span> {project.technologies}
                    </p>
                  )}
                  {project.link && (
                    <p className="text-sm text-blue-600 mt-1">{project.link}</p>
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
              <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide">
                {section.title}
              </h2>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <div key={item.id} className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
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
