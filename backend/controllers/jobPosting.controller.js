const jobService = require("../services/jobPosting.service");

exports.createJob = async (req, res) => {
  try {
    const job = await jobService.createJobPosting(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await jobService.getAllJobPostings();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
