const skillService = require("../services/skillsGap.service");

/**
 * Create a new Skill Gap entry
 */
exports.createSkillGap = async (req, res) => {
  try {
    const skillGap = await skillService.createSkillGap(req.body);
    res.status(201).json(skillGap);
  } catch (err) {
    console.error("Error creating skill gap:", err);
    res.status(500).json({ error: err.message });
  }
};

/**
 * Get all Skill Gap entries
 */
exports.getAllSkillGap = async (req, res) => {
  try {
    const skillGaps = await skillService.getAllSkillGap();
    res.status(200).json(skillGaps);
  } catch (err) {
    console.error("Error fetching skill gaps:", err);
    res.status(500).json({ error: err.message });
  }
};
