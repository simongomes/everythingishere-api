var express = require('express');
var router = express.Router();

// Get Controllers
var ChannelController = require('../controllers/ChannelController');

// Hacker News Routes
router.get('/', ChannelController.index);

module.exports = router;
