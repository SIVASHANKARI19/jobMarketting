import React from "react";

const LearningRecommendations = ({ recommendations }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">
        Learning Recommendations
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.length > 0 ? (
          recommendations.map((course, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {course.course}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Platform:</span> {course.platform}
              </p>
              {course.link ? (
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 text-sm hover:underline"
                >
                  Go to course →
                </a>
              ) : (
                <p className="text-sm text-gray-500">No link available</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-600">No recommendations available</p>
        )}
      </div>
    </div>
  );
};

export default LearningRecommendations;
