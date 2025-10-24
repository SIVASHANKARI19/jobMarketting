import { JobService } from "../services/jobService.js";

export const JobController = {
  async createJob(req, res) {
    try {
      const job = await JobService.createJob(req.body);
      res.status(201).json({ message: "Job created successfully", job });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to create job" });
    }
  },

  async getAllJobs(req, res) {
    try {
      const jobs = await JobService.getAllJobs();
      res.json(jobs);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch jobs" });
    }
  },

  async getJobById(req, res) {
    try {
      const job = await JobService.getJobById(req.params.id);
      if (!job) return res.status(404).json({ error: "Job not found" });
      res.json(job);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error fetching job" });
    }
  },

  async updateJob(req, res) {
    try {
      const job = await JobService.updateJob(req.params.id, req.body);
      if (!job) return res.status(404).json({ error: "Job not found" });
      res.json({ message: "Job updated successfully", job });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to update job" });
    }
  },

  async deleteJob(req, res) {
    try {
      const deleted = await JobService.deleteJob(req.params.id);
      if (!deleted) return res.status(404).json({ error: "Job not found" });
      res.json({ message: "Job deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to delete job" });
    }
  },
};
