import db from "../models/index.js";
const { Job } = db;

export const JobService = {
  async createJob(data) {
    return await Job.create(data);
  },

  async getAllJobs() {
    return await Job.findAll({ order: [["createdAt", "DESC"]] });
  },

  async getJobById(id) {
    return await Job.findByPk(id);
  },

  async updateJob(id, data) {
    const job = await Job.findByPk(id);
    if (!job) return null;
    await job.update(data);
    return job;
  },

  async deleteJob(id) {
    const job = await Job.findByPk(id);
    if (!job) return null;
    await job.destroy();
    return true;
  },
};
