import React from 'react';
import { ResumeData } from '../types/resume';
import { ModernTemplate } from './templates/ModernTemplate';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { MinimalTemplate } from './templates/MinimalTemplate';

interface ResumePreviewProps {
  data: ResumeData;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  const renderTemplate = () => {
    switch (data.template) {
      case 'modern':
        return <ModernTemplate data={data} />;
      case 'classic':
        return <ClassicTemplate data={data} />;
      case 'minimal':
        return <MinimalTemplate data={data} />;
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <div className="bg-white shadow-lg" id="resume-preview">
      {renderTemplate()}
    </div>
  );
};
