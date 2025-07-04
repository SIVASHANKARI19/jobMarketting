import React, { useRef } from "react";
import JobCard from "./../../components/Card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Dashboard = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // adjust scroll distance
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const jobs = [
    {
      title: "Frontend Developer",
      avgSalary: "$80,000",
      tags: ["React", "JavaScript", "CSS"],
      imageSrc: "https://via.placeholder.com/300",
      onCheckReadiness: () => alert("Check readiness!"),
      onKnowMore: () => alert("Know more!"),
    },
     {
      title: "Frontend Developer",
      avgSalary: "$80,000",
      tags: ["React", "JavaScript", "CSS"],
      imageSrc: "https://via.placeholder.com/300",
      onCheckReadiness: () => alert("Check readiness!"),
      onKnowMore: () => alert("Know more!"),
    }, {
      title: "Frontend Developer",
      avgSalary: "$80,000",
      tags: ["React", "JavaScript", "CSS"],
      imageSrc: "https://via.placeholder.com/300",
      onCheckReadiness: () => alert("Check readiness!"),
      onKnowMore: () => alert("Know more!"),
    }, {
      title: "Frontend Developer",
      avgSalary: "$80,000",
      tags: ["React", "JavaScript", "CSS"],
      imageSrc: "https://via.placeholder.com/300",
      onCheckReadiness: () => alert("Check readiness!"),
      onKnowMore: () => alert("Know more!"),
    }, {
      title: "Frontend Developer",
      avgSalary: "$80,000",
      tags: ["React", "JavaScript", "CSS"],
      imageSrc: "https://via.placeholder.com/300",
      onCheckReadiness: () => alert("Check readiness!"),
      onKnowMore: () => alert("Know more!"),
    }, {
      title: "Frontend Developer",
      avgSalary: "$80,000",
      tags: ["React", "JavaScript", "CSS"],
      imageSrc: "https://via.placeholder.com/300",
      onCheckReadiness: () => alert("Check readiness!"),
      onKnowMore: () => alert("Know more!"),
    }, {
      title: "Frontend Developer",
      avgSalary: "$80,000",
      tags: ["React", "JavaScript", "CSS"],
      imageSrc: "https://via.placeholder.com/300",
      onCheckReadiness: () => alert("Check readiness!"),
      onKnowMore: () => alert("Know more!"),
    }, {
      title: "Frontend Developer",
      avgSalary: "$80,000",
      tags: ["React", "JavaScript", "CSS"],
      imageSrc: "https://via.placeholder.com/300",   
      onCheckReadiness: () => alert("Check readiness!"),
      onKnowMore: () => alert("Know more!"),
    },
    // add more jobs...
  ];

  return (
    <div className="relative w-full">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
      >
        <FaArrowRight />
      </button>

      {/* Cards container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide px-10"
      >
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            avgSalary={job.avgSalary}
            tags={job.tags}
            imageSrc={job.imageSrc}
            onCheckReadiness={job.onCheckReadiness}
            onKnowMore={job.onKnowMore}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
