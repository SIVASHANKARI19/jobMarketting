// src/routes/user.routes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Example GET route
router.get("/", userController.getAllUsers);

module.exports = router;
