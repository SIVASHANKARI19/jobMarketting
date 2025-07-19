const express = require("express");
const router = express.Router();
const controller = require("../controllers/jobPosting.controller");

router.post("/", controller.createJob); // POST /api/jobs
router.get("/", controller.getJobs); // GET  /api/jobs

module.exports = router;
