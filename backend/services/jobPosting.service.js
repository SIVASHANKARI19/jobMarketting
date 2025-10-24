const { Job } = require("../models");

const createJobPosting = async (data) => {
  return await Job.create(data);
};

const getAllJobPostings = async () => {
  return await Job.findAll();
};

const getJobById = async (id) => {
  return await Job.findByPk(id);
};

const updateJobPosting = async (id, data) => {
  const job = await Job.findByPk(id);
  if (!job) return null;
  return await job.update(data);
};

const deleteJobPosting = async (id) => {
  const job = await Job.findByPk(id);
  if (!job) return null;
  await job.destroy();
  return job;
};

module.exports = {
  createJobPosting,
  getAllJobPostings,
  getJobById,
  updateJobPosting,
  deleteJobPosting,
};
