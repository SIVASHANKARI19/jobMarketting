import React from 'react';
import { FileText } from 'lucide-react';

interface SummaryFormProps {
  data: string;
  onChange: (data: string) => void;
}

export const SummaryForm: React.FC<SummaryFormProps> = ({ data, onChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
        <FileText className="w-5 h-5" />
        Professional Summary
      </h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Summary
        </label>
        <textarea
          value={data}
          onChange={(e) => onChange(e.target.value)}
          placeholder="A brief professional summary highlighting your key achievements, skills, and career objectives. Keep it concise and impactful (2-3 sentences)."
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
        <p className="mt-1 text-xs text-gray-500">
          Tip: Focus on your unique value proposition and what makes you stand out
        </p>
      </div>
    </div>
  );
};
