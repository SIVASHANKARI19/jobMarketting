// src/services/resumeAnalysisService.js
export class ResumeAnalysisService {
  static API_URL = 'http://127.0.0.1:5000';

  static async uploadResume(file) {
    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await fetch(`${this.API_URL}/api/analyse`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Upload failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Error uploading resume:', error);
      throw new Error('Failed to upload resume. Please try again.');
    }
  }

  static async getAnalysisResults() {
    try {
      const response = await fetch(`${this.API_URL}/api/resume-analysis/results`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch analysis results');
      }

      const data = await response.json();
      return {
        overallScore: data.overallScore || 0,
        skillGaps: data.skillGaps || [],
        strongSkills: data.strongSkills || [],
        matchingJobs: data.output || [],
        recommendations: data.recommended_learning || []
      };
    } catch (error) {
      console.error('Error fetching analysis results:', error);
      throw new Error('Failed to load analysis results. Please try again.');
    }
  }
}

