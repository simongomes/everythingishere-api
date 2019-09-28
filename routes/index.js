var express = require('express');
var router = express.Router();

const IndexController = require('../controllers/IndexController');

/* GET home page. */
router.all('/', IndexController.index);
router.get('/stories/:channel', IndexController.getStoriesByChannel);
router.get('/stories/all/:channels', IndexController.getAllStories);

module.exports = router;
