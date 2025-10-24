import { JobRequirement, AnalysisResult } from "../types"

export const mockJobRequirements: JobRequirement[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    experience: '3-5 years',
    requiredSkills: 
    [
      { name: 'React', level: 8, category: 'Frontend' },
      { name: 'JavaScript', level: 9, category: 'Programming' },
      { name: 'TypeScript', level: 7, category: 'Programming' },
      { name: 'CSS', level: 7, category: 'Frontend' }
    ],
    preferredSkills: 
    [
      { name: 'Node.js', level: 6, category: 'Backend' },
      { name: 'GraphQL', level: 5, category: 'API' },
      { name: 'AWS', level: 5, category: 'Cloud' }
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Innovation Labs',
    location: 'New York, NY',
    experience: '2-4 years',
    requiredSkills: [
      { name: 'React', level: 7, category: 'Frontend' },
      { name: 'Node.js', level: 8, category: 'Backend' },
      { name: 'Python', level: 7, category: 'Programming' },
      { name: 'SQL', level: 6, category: 'Database' }
    ],
    preferredSkills: [
      { name: 'Docker', level: 5, category: 'DevOps' },
      { name: 'MongoDB', level: 5, category: 'Database' },
      { name: 'Redis', level: 4, category: 'Database' }
    ]
  },
  {
    title: 'Backend Engineer',
    company: 'DataFlow Inc',
    location: 'Austin, TX',
    experience: '3-6 years',
    requiredSkills: [
      { name: 'Python', level: 9, category: 'Programming' },
      { name: 'Django', level: 7, category: 'Backend' },
      { name: 'PostgreSQL', level: 8, category: 'Database' },
      { name: 'AWS', level: 7, category: 'Cloud' }
    ],
    preferredSkills: [
      { name: 'Kubernetes', level: 6, category: 'DevOps' },
      { name: 'Redis', level: 5, category: 'Database' },
      { name: 'Elasticsearch', level: 5, category: 'Database' }
    ]
  },
  {
    title: 'Software Developer',
    company: 'StartupXYZ',
    location: 'Seattle, WA',
    experience: '1-3 years',
    requiredSkills: [
      { name: 'JavaScript', level: 7, category: 'Programming' },
      { name: 'React', level: 6, category: 'Frontend' },
      { name: 'Node.js', level: 6, category: 'Backend' },
      { name: 'Git', level: 6, category: 'Tools' }
    ],
    preferredSkills: [
      { name: 'TypeScript', level: 5, category: 'Programming' },
      { name: 'Jest', level: 4, category: 'Testing' },
      { name: 'Docker', level: 4, category: 'DevOps' }
    ]
  }
];

export const generateMockAnalysis = (): AnalysisResult => {
  return {
    overallScore: 73,
    skillGaps: [
      { skill: 'React', currentLevel: 7, requiredLevel: 8, gap: 1, priority: 'medium' },
      { skill: 'Node.js', currentLevel: 6, requiredLevel: 8, gap: 2, priority: 'high' },
      { skill: 'Python', currentLevel: 5, requiredLevel: 8, gap: 3, priority: 'high' },
      { skill: 'TypeScript', currentLevel: 3, requiredLevel: 7, gap: 4, priority: 'high' },
      { skill: 'AWS', currentLevel: 2, requiredLevel: 6, gap: 4, priority: 'medium' },
      { skill: 'Docker', currentLevel: 1, requiredLevel: 5, gap: 4, priority: 'low' }
    ],
    matchingJobs: mockJobRequirements,
    recommendations: [], // Will be populated by component
    strongSkills: ['JavaScript', 'React', 'CSS'],
    improvementAreas: ['Backend Development', 'Cloud Services', 'DevOps']
  };
};