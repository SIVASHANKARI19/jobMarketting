const express = require("express");
const router = express.Router();
const controller = require("../controllers/skillGap.controller");

router.post("/", controller.createSkillGap); // POST /api/jobs
router.get("/", controller.getAllSkillGap); // GET  /api/jobs

module.exports = router;
