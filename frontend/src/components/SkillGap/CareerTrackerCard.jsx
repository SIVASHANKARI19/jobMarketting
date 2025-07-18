// src/components/SkillGap/CareerTrackerCard.jsx
import React from "react";
import { DocumentCheckIcon } from "@heroicons/react/24/outline";

export default function CareerTrackerCard({ skills, targetRole }) {
  const hasUploaded = skills.length > 0 && targetRole;

  return (
    <div className="bg-white rounded-xl shadow-md border border-blue-200 px-6 py-5 md:px-8 md:py-6 min-h-[250px] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-lg md:text-xl font-semibold text-blue-700 mb-3 flex items-center gap-2">
        <DocumentCheckIcon className="h-6 w-6 text-blue-600" />
        Career Progress Tracker
      </h2>

      <div className="text-sm text-gray-700 space-y-3">
        {hasUploaded ? (
          <>
            <p>Your resume and skills have been successfully analyzed for the role of <strong>{targetRole}</strong>.</p>

            <div className="w-full h-3 bg-blue-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-1/3 rounded-full transition-all duration-700"></div>
            </div>

            <p className="text-xs text-gray-500">Your progress towards becoming a {targetRole} is underway.</p>
          </>
        ) : (
          <>
            <p>
              Track your journey from where you are to your dream role. Upload your resume and target job role
              to begin analysis.
            </p>
            <div className="w-full h-3 bg-blue-100 rounded-full overflow-hidden">
              <div className="h-full bg-gray-300 w-0 rounded-full"></div>
            </div>
            <p className="text-xs text-gray-400">Waiting for input: resume & role info.</p>
          </>
        )}
      </div>
    </div>
  );
}
