import { AnalysisResult, JobRequirement, SkillGap, LearningResource } from '../types';

interface ResumeAnalysisResult {
  input: {
    resume_pdf: string;
    jobs_applied: Array<{
      job_id: string;
      job_title: string;
      required_skills: Array<{
        skill: string;
        level: string;
      }>;
    }>;
  };
  output: Array<{
    job_id: string;
    job_title: string;
    matching_skills: string[];
    missing_skills: string[];
    level_variance: any[];
    accuracy_rate: string;
    recommended_learning: Array<{
      skill: string;
      platform: string;
      course: string;
    }>;
  }>;
}

export const transformResumeAnalysisData = (data: ResumeAnalysisResult): AnalysisResult => {
  // Calculate overall score based on average accuracy rate
  const accuracyRates = data.output.map(job => 
    parseInt(job.accuracy_rate.replace('%', ''))
  );
  const overallScore = accuracyRates.length > 0 
    ? Math.round(accuracyRates.reduce((sum, rate) => sum + rate, 0) / accuracyRates.length)
    : 0;

  // Transform job data to JobRequirement format
  const matchingJobs: JobRequirement[] = data.output.map((job, index) => {
    const originalJob = data.input.jobs_applied.find(j => j.job_id === job.job_id);
    
    return {
      title: job.job_title,
      company: `Company ${index + 1}`, // Placeholder since not in result.json
      location: 'Remote', // Placeholder since not in result.json
      experience: '2-5 years', // Placeholder since not in result.json
      requiredSkills: originalJob?.required_skills.map(skill => ({
        name: skill.skill,
        level: getLevelNumber(skill.level),
        category: getSkillCategory(skill.skill)
      })) || [],
      preferredSkills: [] // Not available in result.json
    };
  });

  // Create skill gaps from missing skills
  const skillGaps: SkillGap[] = [];
  const skillGapMap = new Map<string, { maxRequired: number, count: number }>();

  data.output.forEach(job => {
    const originalJob = data.input.jobs_applied.find(j => j.job_id === job.job_id);
    if (originalJob) {
      originalJob.required_skills.forEach(skill => {
        const skillName = skill.skill;
        const requiredLevel = getLevelNumber(skill.level);
        
        if (skillGapMap.has(skillName)) {
          const existing = skillGapMap.get(skillName)!;
          skillGapMap.set(skillName, {
            maxRequired: Math.max(existing.maxRequired, requiredLevel),
            count: existing.count + 1
          });
        } else {
          skillGapMap.set(skillName, {
            maxRequired: requiredLevel,
            count: 1
          });
        }
      });
    }
  });

  // Convert skill gap map to SkillGap array
  skillGapMap.forEach((value, skillName) => {
    const priority = value.count >= 2 ? 'high' : value.count === 1 ? 'medium' : 'low';
    skillGaps.push({
      skill: skillName,
      currentLevel: 0, // Assuming no current skills since all are missing
      requiredLevel: value.maxRequired,
      gap: value.maxRequired,
      priority: priority as 'high' | 'medium' | 'low'
    });
  });

  // Extract learning recommendations
  const recommendations: LearningResource[] = [];
  const seenCourses = new Set<string>();

  data.output.forEach(job => {
    job.recommended_learning.forEach(learning => {
      const courseKey = `${learning.platform}-${learning.course}`;
      if (!seenCourses.has(courseKey)) {
        seenCourses.add(courseKey);
        recommendations.push({
          title: learning.course,
          provider: learning.platform,
          url: getCourseUrl(learning.platform, learning.course),
          certification: true,
          duration: getCourseDuration(learning.skill),
          rating: getCourseRating(learning.platform)
        });
      }
    });
  });

  // Extract strong skills (matching skills across all jobs)
  const strongSkills: string[] = [];
  const matchingSkillsCount = new Map<string, number>();
  
  data.output.forEach(job => {
    job.matching_skills.forEach(skill => {
      matchingSkillsCount.set(skill, (matchingSkillsCount.get(skill) || 0) + 1);
    });
  });

  matchingSkillsCount.forEach((count, skill) => {
    if (count >= 2) { // Skills that match in 2+ jobs
      strongSkills.push(skill);
    }
  });

  // Extract improvement areas from missing skills
  const improvementAreas: string[] = [];
  const categoryCount = new Map<string, number>();
  
  skillGaps.forEach(gap => {
    const category = getSkillCategory(gap.skill);
    categoryCount.set(category, (categoryCount.get(category) || 0) + 1);
  });

  categoryCount.forEach((count, category) => {
    if (count >= 2) {
      improvementAreas.push(category);
    }
  });

  return {
    overallScore,
    skillGaps,
    matchingJobs,
    recommendations,
    strongSkills,
    improvementAreas
  };
};

// Helper functions
const getLevelNumber = (level: string): number => {
  const levelMap: { [key: string]: number } = {
    'Beginner': 3,
    'Intermediate': 6,
    'Advanced': 9,
    'Expert': 10
  };
  return levelMap[level] || 5;
};

const getSkillCategory = (skill: string): string => {
  const skillCategories: { [key: string]: string } = {
    'Excel': 'Data Analysis',
    'Deep Learning': 'Machine Learning',
    'Statistics': 'Data Science',
    'AWS': 'Cloud Computing',
    'Kubernetes': 'DevOps',
    'Data Visualization': 'Data Science',
    'Docker': 'DevOps',
    'Power BI': 'Data Analysis',
    'Cloud Computing': 'Cloud Computing',
    'Machine Learning': 'Machine Learning',
    'NLP': 'Machine Learning',
    'Node.js': 'Backend Development'
  };
  return skillCategories[skill] || 'General';
};

const getCourseUrl = (platform: string, course: string): string => {
  const platformUrls: { [key: string]: string } = {
    'edX': 'https://www.edx.org',
    'LinkedIn Learning': 'https://www.linkedin.com/learning',
    'Coursera': 'https://www.coursera.org',
    'Udemy': 'https://www.udemy.com'
  };
  return platformUrls[platform] || 'https://www.google.com';
};

const getCourseDuration = (skill: string): string => {
  const durationMap: { [key: string]: string } = {
    'Excel': '4 weeks',
    'Deep Learning': '8 weeks',
    'Statistics': '6 weeks',
    'AWS': '6 weeks',
    'Kubernetes': '4 weeks',
    'Data Visualization': '5 weeks',
    'Docker': '3 weeks',
    'Power BI': '4 weeks',
    'Cloud Computing': '6 weeks',
    'Machine Learning': '8 weeks',
    'NLP': '6 weeks',
    'Node.js': '5 weeks'
  };
  return durationMap[skill] || '4 weeks';
};

const getCourseRating = (platform: string): number => {
  const platformRatings: { [key: string]: number } = {
    'edX': 4.6,
    'LinkedIn Learning': 4.5,
    'Coursera': 4.7,
    'Udemy': 4.4
  };
  return platformRatings[platform] || 4.5;
};
