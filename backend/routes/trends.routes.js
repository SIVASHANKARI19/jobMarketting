const express = require('express');
const router = express.Router();
const trendsController = require('../controllers/trends.controller');

router.get('/', trendsController.getTrends);

module.exports = router;
