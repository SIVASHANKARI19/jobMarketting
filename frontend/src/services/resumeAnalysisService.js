import { transformResumeAnalysisData } from '../utils/dataTransformer.js';

class ResumeAnalysisService {
  static API_URL = 'http://127.0.0.1:5000';  // Python Flask server port

  /**
   * Fetch resume analysis results from the backend
   */
  static async getAnalysisResults() {
    try {
      const response = await fetch(`${this.API_URL}/api/resume-analysis/results`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server did not return JSON");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading result.json:', error);
      throw error;
    }
  }

  /**
   * Upload resume and trigger analysis
   */
  static async uploadResume(file) {
    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await fetch(`${this.API_URL}/api/resume-analysis/upload`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Upload failed');
      }
      const data = await response.json();
      return { success: true, ...data };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}

export { ResumeAnalysisService };
