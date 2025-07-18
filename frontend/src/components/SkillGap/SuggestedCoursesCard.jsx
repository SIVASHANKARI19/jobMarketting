import React from "react";

export default function MissingSkillCard({ missingSkills = [] }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-blue-300 col-span-1 p-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">Missing Skills</h2>
      {missingSkills.length > 0 ? (
        <ul className="list-disc list-inside text-blue-800 space-y-1 text-sm">
          {missingSkills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500 italic">No skill gaps detected.</p>
      )}
    </div>
  );
}
