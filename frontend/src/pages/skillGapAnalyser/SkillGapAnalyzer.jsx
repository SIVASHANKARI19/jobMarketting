// src/pages/skillGapAnalyser/SkillGapAnalyzer.jsx
import React, { useState, useEffect } from "react";
import CareerTrackerCard from "../../components/SkillGap/CareerTrackerCard";
import MissingSkillCard from "../../components/SkillGap/MissingSkillCard";
import SuggestedCoursesCard from "../../components/SkillGap/SuggestedCoursesCard";
import TargetRoleCard from "../../components/SkillGap/TargetRoleCard";
import UploadSkillCard from "../../components/SkillGap/UploadSkillCard";

export default function SkillGapAnalyzer() {
  const [skills, setSkills] = useState([]);
  const [targetRole, setTargetRole] = useState("");

  const [missingSkills] = useState([
    "React.js",
    "TypeScript",
    "Unit Testing"
  ]);

  const [courses] = useState([
    { title: "React Basics - Coursera", url: "https://coursera.org" },
    { title: "TypeScript Bootcamp - Udemy", url: "https://udemy.com" },
    { title: "Jest Unit Testing - YouTube", url: "https://youtube.com" }
  ]);

  useEffect(() => {
    document.title = "Skill Gap Analyzer | JobScapeAI";
  }, []);

  return (
    <div className="min-h-screen px-10 py-8 bg-blue-50">
      {/* ✅ Page Title */}
      <h1 className="text-3xl font-extrabold text-blue-800 mb-8 text-center">
        Skill Gap Analyzer
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UploadSkillCard setSkills={setSkills} />
        <TargetRoleCard targetRole={targetRole} setTargetRole={setTargetRole} />
        <MissingSkillCard missingSkills={missingSkills} />
        <SuggestedCoursesCard courses={courses} />
        <CareerTrackerCard skills={skills} targetRole={targetRole} />
      </div>
    </div>
  );
}
