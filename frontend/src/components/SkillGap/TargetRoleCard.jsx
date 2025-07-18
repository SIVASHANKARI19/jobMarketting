// src/components/SkillGap/TargetRoleCard.jsx
import React from "react";

export default function TargetRoleCard({ targetRole, setTargetRole }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-blue-300 col-span-1 p-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">Target Role</h2>

      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="target-role">
        Enter your desired job role
      </label>

      <input
        id="target-role"
        type="text"
        placeholder="e.g., Frontend Developer"
        value={targetRole}
        onChange={(e) => setTargetRole(e.target.value)}
        className="p-2 w-full border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}
