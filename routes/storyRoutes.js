var express = require('express');
var router = express.Router();

// Get Controllers
var StoryController = require('../controllers/StoryController');

// Hacker News Routes
router.get('/', StoryController.index);

module.exports = router;
