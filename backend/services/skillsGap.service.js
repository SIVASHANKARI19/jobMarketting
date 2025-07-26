const { Skills_Gap } = require("../models");

const createSkillGap = async (data) => {
  return await Skills_Gap.create(data);
};

const getAllSkillGap = async () => {
  return await Skills_Gap.findAll();
};

module.exports = {
  createSkillGap,
  getAllSkillGap,
};
