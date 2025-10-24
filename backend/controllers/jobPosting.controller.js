const jobService = require("../services/jobPosting.service.js");

exports.createJob = async (req, res) => {
  try {
    const job = await jobService.createJobPosting(req.body);
    res.status(201).json({ message: "Job created successfully", job });
  } catch (err) {
    console.error("Error creating job:", err);
    res.status(500).json({ error: "Failed to create job" });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await jobService.getAllJobPostings();
    res.status(200).json(jobs);
  } catch (err) {
    console.error("Error fetching jobs:", err);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

exports.getJobById = async (req, res) => {
  try {
    const job = await jobService.getJobById(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch job" });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const job = await jobService.updateJobPosting(req.params.id, req.body);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.status(200).json({ message: "Job updated successfully", job });
  } catch (err) {
    res.status(500).json({ error: "Failed to update job" });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const job = await jobService.deleteJobPosting(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete job" });
  }
};
