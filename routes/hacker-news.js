var express = require('express');
var router = express.Router();

// Get Controllers
var HackerNewsController = require('../controllers/HackerNewsController');

// Hacker News Routes
router.get('/', HackerNewsController.index);

router.get('/fetch', HackerNewsController.fetch);

module.exports = router;
