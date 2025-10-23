import React from 'react';
import { SectionConfig } from '../types/resume';
import { GripVertical, Eye, EyeOff } from 'lucide-react';

interface SectionManagerProps {
  sections: SectionConfig[];
  onReorder: (sections: SectionConfig[]) => void;
  onToggleVisibility: (id: string) => void;
  activeSection: string;
  onSectionChange: (id: string) => void;
}

export const SectionManager: React.FC<SectionManagerProps> = ({
  sections,
  onReorder,
  onToggleVisibility,
  activeSection,
  onSectionChange
}) => {
  const [draggedIndex, setDraggedIndex] = React.useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newSections = [...sections];
    const draggedSection = newSections[draggedIndex];
    newSections.splice(draggedIndex, 1);
    newSections.splice(index, 0, draggedSection);

    setDraggedIndex(index);
    onReorder(newSections);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="space-y-2">
      {sections.map((section, index) => (
        <div
          key={section.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragEnd={handleDragEnd}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all cursor-move ${
            activeSection === section.id
              ? 'bg-blue-600 text-white border-blue-600'
              : section.isVisible
              ? 'bg-white border-gray-200 hover:border-blue-300'
              : 'bg-gray-50 border-gray-200 opacity-60'
          } ${draggedIndex === index ? 'opacity-50' : ''}`}
        >
          <GripVertical className="w-4 h-4 flex-shrink-0" />

          <button
            onClick={() => onSectionChange(section.id)}
            className="flex-1 text-left font-medium text-sm"
          >
            {section.label}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleVisibility(section.id);
            }}
            className={`p-1 rounded hover:bg-opacity-20 hover:bg-gray-500 ${
              activeSection === section.id ? 'text-white' : 'text-gray-600'
            }`}
            title={section.isVisible ? 'Hide from resume' : 'Show in resume'}
          >
            {section.isVisible ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
          </button>
        </div>
      ))}
    </div>
  );
};
