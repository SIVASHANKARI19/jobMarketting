const skillService = require("../services/skillsGap.service");

exports.createSkillGap = async (req, res) => {
  try {
    const skills = await skillService.createSkillGap(req.body);
    res.status(201).json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllSkillGap = async (req, res) => {
  try {
    const jobs = await skillService.getAllSkillGap();
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
