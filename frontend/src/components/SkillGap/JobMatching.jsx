import React from "react";

const JobMatching = ({ matchingJobs, jobAnalysisData }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">
        Job Matching Results
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matchingJobs.map((job, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {job.title}
            </h3>
            <p className="text-sm text-gray-500 mb-1">{job.company}</p>
            <p className="text-sm text-gray-500 mb-2">
              {job.location} | {job.experience}
            </p>

            <p className="font-semibold text-gray-700 mb-2">Required Skills:</p>
            <ul className="text-sm text-gray-600 list-disc ml-5">
              {job.requiredSkills.map((skill, idx) => (
                <li key={idx}>
                  {skill.name} ({skill.level})
                </li>
              ))}
            </ul>

            <div className="mt-3">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Match Score:</span>{" "}
                {jobAnalysisData[index]?.match_score || "N/A"}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobMatching;
