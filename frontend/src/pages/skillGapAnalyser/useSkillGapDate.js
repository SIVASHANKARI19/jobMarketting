// useSkillGapData.js
import { useState } from "react";
export function useSkillGapData() {
  const [skills, setSkills] = useState([]);
  const [targetRole, setTargetRole] = useState("");
  const [missingSkills, setMissingSkills] = useState([]);
  const [courses, setCourses] = useState([]);

  return {
    skills,
    setSkills,
    targetRole,
    setTargetRole,
    missingSkills,
    setMissingSkills,
    courses,
    setCourses,
  };
}
