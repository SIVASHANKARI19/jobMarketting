import React from "react";
import PropTypes from "prop-types";

const JobMatching = ({ matches }) => {
  // Early return if matches is undefined or empty
  if (!matches || matches.length === 0) {
    return (
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900">Job Matches</h3>
        <p className="mt-2 text-gray-600">No job matches available yet.</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Matching Jobs</h3>
      <div className="grid gap-6">
        {Array.isArray(matches) && matches.map((job, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <h4 className="text-lg font-medium text-blue-600">
              {job?.job_title || "Untitled Position"}
            </h4>

            <div className="mt-2 text-gray-600">
              {job?.company && (
                <p className="font-medium">{job.company}</p>
              )}
              {job?.location && (
                <p className="text-sm">{job.location}</p>
              )}
            </div>

            {job?.required_skills && job.required_skills.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700">Required Skills:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {job.required_skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700"
                    >
                      {skill?.skill} {skill?.level && `(${skill.level})`}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {job?.experience && (
              <p className="mt-4 text-sm text-gray-600">
                Experience: {job.experience}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

JobMatching.propTypes = {
  matches: PropTypes.arrayOf(
    PropTypes.shape({
      job_title: PropTypes.string,
      company: PropTypes.string,
      location: PropTypes.string,
      experience: PropTypes.string,
      required_skills: PropTypes.arrayOf(
        PropTypes.shape({
          skill: PropTypes.string,
          level: PropTypes.string
        })
      )
    })
  )
};

JobMatching.defaultProps = {
  matches: []
};

export default JobMatching;
