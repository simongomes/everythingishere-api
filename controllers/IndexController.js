const axios = require('axios');
const { API_ENDPOINT } = require('../config/constants');

exports.index = (req, res, next) => {
  res.json(
    'Welcome to Everything is here API. It provides necessery data for https://everythingishere.info'
  );
};

// returns stories for specific channel
exports.getStoriesByChannel = (req, res, next) => {
  const { channel } = req.params;
  const { limit } = req.query;
  const URL = `${API_ENDPOINT}news/${channel}?limit=${limit ? limit : 20}`;
  axios
    .get(URL)
    .then(response => {
      res.json(response.data);
    })
    .catch(function(error) {
      console.log('Error ' + error.message);
    });
};

// returns stories for all channels or multiple selected channels
exports.getAllStories = (req, res, next) => {
  const { channels } = req.params;
  const { limit } = req.query;
  const URL = `${API_ENDPOINT}all/${channels}?limit=${limit ? limit : 20}`;
  axios
    .get(URL)
    .then(response => {
      res.json(response.data);
    })
    .catch(function(error) {
      console.log('Error ' + error.message);
    });
};
