const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.post("/", controller.createUser);
router.get("/", controller.getUsers);
router.post("/login", controller.loginUser);

module.exports = router;
