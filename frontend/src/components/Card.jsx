import React, { useState } from "react";
import {
  Heart,
  MapPin,
  TrendingUp,
  Star,
  Bookmark,
  ArrowRight,
  Users,
  Clock
} from "lucide-react";

const JobCard = ({
  title,
  avgSalary,
  tags,
  imageSrc,
  onCheckReadiness,
  onKnowMore,
  maxVisibleTags = 3,
  company = "TechCorp",
  location = "Remote",
  postedTime = "2 days ago",
  applicants = "127",
  rating = 4.8
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const visibleTags = tags.slice(0, maxVisibleTags);
  const hiddenTagsCount = tags.length - maxVisibleTags;

  return (
    <div className="flex max-w-fit justify-center">
      <div
        className={`group relative w-80 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
          isHovered ? "scale-105" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Header */}
        <div className="relative">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-1.5 rounded-full backdrop-blur-sm transition-all duration-200 ${
                isBookmarked
                  ? "bg-blue-500 text-white"
                  : "bg-white/80 text-gray-600 hover:bg-white"
              }`}
            >
              <Bookmark size={14} fill={isBookmarked ? "white" : "none"} />
            </button>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-1.5 rounded-full backdrop-blur-sm transition-all duration-200 ${
                isLiked
                  ? "bg-red-500 text-white"
                  : "bg-white/80 text-gray-600 hover:bg-white"
              }`}
            >
              <Heart size={14} fill={isLiked ? "white" : "none"} />
            </button>
          </div>
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-lg">
            <span className="text-green-600 font-semibold text-sm flex items-center gap-1">
              <TrendingUp size={12} />
              {avgSalary}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-3">
            <h2 className="text-md md:text-lg text-left font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
              {title}
            </h2>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="font-medium">{company}</span>
              <div className="flex items-center gap-1">
                <MapPin size={12} />
                {location}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-3 text-xs">
            <div className="flex items-center gap-1 text-amber-600">
              <Star size={12} fill="currentColor" />
              <span className="font-medium">{rating}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Users size={12} />
              {applicants} applied
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Clock size={12} />
              {postedTime}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {visibleTags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium border border-blue-100 hover:bg-blue-100 transition-colors"
              >
                {tag}
              </span>
            ))}
            {hiddenTagsCount > 0 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium">
                +{hiddenTagsCount} more
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={onCheckReadiness}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 rounded-xl font-medium text-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Check Readiness
            </button>
            <button
              onClick={onKnowMore}
              className="flex items-center gap-1 border-2 border-blue-600 text-blue-600 px-3 py-2 rounded-xl font-medium text-sm hover:bg-blue-600 hover:text-white transition-all duration-200 group"
            >
              Know More
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
