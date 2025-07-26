const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.post("/", controller.createUser); // POST /api/users
router.get("/", controller.getUsers); // GET  /api/users

module.exports = router;
