import React from "react";

const JobCard = ({
  title,
  avgSalary,
  tags,
  imageSrc,
  onCheckReadiness,
  onKnowMore,
  maxVisibleTags = 3 // you can adjust this
}) => {
  const visibleTags = tags.slice(0, maxVisibleTags);
  const hiddenTagsCount = tags.length - maxVisibleTags;

  return (
    <div className="w-80 rounded-xl border border-gray-200 shadow-md p-4">
      <img
        src={imageSrc}
        alt={title}
        className="rounded-lg mb-4 w-full h-40 object-cover"
      />
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-gray-500 mb-3">Avg. salary {avgSalary}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {visibleTags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
        {hiddenTagsCount > 0 && (
          <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
            +{hiddenTagsCount}
          </span>
        )}
      </div>
      <div className="flex gap-3">
        <button
          onClick={onCheckReadiness}
          className="bg-blue-600 text-white px-4 py-2 rounded-full"
        >
          Check readiness
        </button>
        <button
          onClick={onKnowMore}
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full"
        >
          Know more
        </button>
      </div>
    </div>
  );
};

export default JobCard;
