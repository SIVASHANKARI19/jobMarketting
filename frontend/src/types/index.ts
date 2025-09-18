export interface Skill {
  name: string;
  level: number; // 1-10
  category: string;
}

export interface JobRequirement {
  title: string;
  company: string;
  requiredSkills: Skill[];
  preferredSkills: Skill[];
  experience: string;
  location: string;
}

export interface SkillGap {
  skill: string;
  currentLevel: number;
  requiredLevel: number;
  gap: number;
  priority: 'high' | 'medium' | 'low';
}

export interface Resume {
  id: string;
  name: string;
  skills: Skill[];
  experience: string[];
  education: string[];
  uploadDate: Date;
}

export interface LearningResource {
  title: string;
  provider: string;
  url: string;
  certification: boolean;
  duration: string;
  rating: number;
}

export interface AnalysisResult {
  overallScore: number;
  skillGaps: SkillGap[];
  matchingJobs: JobRequirement[];
  recommendations: LearningResource[];
  strongSkills: string[];
  improvementAreas: string[];
}