// src/components/SkillGap/UploadSkillsCard.jsx
import React from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

export default function UploadSkillCard({ setSkills }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-blue-300 p-6 col-span-1 md:col-span-2">
      <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
        <ArrowUpTrayIcon className="h-6 w-6 text-blue-600" />
        Upload Resume / Enter Skills
      </h2>

      {/* File Upload */}
      <div className="mb-4">
        <label className="block text-sm text-gray-700 font-medium mb-1">
          Upload Resume
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full text-sm p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-xs text-gray-500 mt-1">Supported formats: PDF, DOCX</p>
      </div>

      {/* Skills Input */}
      <div>
        <label className="block text-sm text-gray-700 font-medium mb-1">
          Or Manually Enter Skills
        </label>
        <input
          type="text"
          placeholder="e.g., HTML, CSS, Python"
          className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          onBlur={(e) => setSkills(e.target.value.split(",").map(skill => skill.trim()))}
        />
      </div>
    </div>
  );
}
