import React from 'react';
import { Experience } from '../types/resume';
import { Briefcase, Plus, Trash2 } from 'lucide-react';

interface ExperienceFormProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({ data, onChange }) => {
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    onChange([...data, newExperience]);
  };

  const updateExperience = (id: string, field: keyof Experience, value: any) => {
    onChange(
      data.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const removeExperience = (id: string) => {
    onChange(data.filter((exp) => exp.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          Work Experience
        </h3>
        <button
          onClick={addExperience}
          className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {data.map((exp, index) => (
        <div key={exp.id} className="p-4 border border-gray-200 rounded-lg space-y-3 bg-gray-50">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Experience {index + 1}</span>
            <button
              onClick={() => removeExperience(exp.id)}
              className="text-red-600 hover:text-red-700 p-1"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Position *</label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                placeholder="Software Engineer"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                placeholder="Tech Corp"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              value={exp.location}
              onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
              placeholder="San Francisco, CA"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="month"
                value={exp.endDate}
                onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                disabled={exp.current}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm disabled:bg-gray-100"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id={`current-${exp.id}`}
              checked={exp.current}
              onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <label htmlFor={`current-${exp.id}`} className="ml-2 text-sm text-gray-700">
              I currently work here
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
              placeholder="• Developed and maintained web applications&#10;• Collaborated with cross-functional teams&#10;• Improved system performance by 30%"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
        </div>
      ))}

      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500 text-sm">
          No work experience added yet. Click "Add" to create one.
        </div>
      )}
    </div>
  );
};
