const { Job_Posting } = require("../models");

const createJobPosting = async (data) => {
  return await Job_Posting.create(data);
};

const getAllJobPostings = async () => {
  return await Job_Posting.findAll();
};

module.exports = {
  createJobPosting,
  getAllJobPostings,
};
