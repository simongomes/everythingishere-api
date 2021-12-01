const axios = require("axios");
const { API_ENDPOINT, API_ENDPOINT_GITHUB } = require("../config/constants");

exports.index = (req, res, next) => {
  res.json(
    "Welcome to Everything is here API. It provides necessery data for https://everythingishere.top"
  );
};

// returns stories for specific channel
exports.getStoriesByChannel = (req, res, next) => {
  const { channel } = req.params;
  const { limit } = req.query;
  let URL = `${API_ENDPOINT}news/${channel}?limit=${limit ? limit : 20}`;

  if (channel === "github") {
    URL = `${API_ENDPOINT_GITHUB}?limit=${limit ? limit : 20}?`;
  }
  axios
    .get(URL)
    .then((response) => {
      if (channel === "github") {
        res.json(mapGitHubTrends(response.data));
      } else {
        res.json(response.data);
      }
    })
    .catch(function (error) {
      console.log("Error " + error.message);
    });
};

// returns stories for all channels or multiple selected channels
exports.getAllStories = (req, res, next) => {
  const { channels } = req.params;
  const { limit } = req.query;
  const URL = `${API_ENDPOINT}all/${channels}?limit=${limit ? limit : 20}`;
  axios
    .get(URL)
    .then((response) => {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log("Error " + error.message);
    });
};

const mapGitHubTrends = (results) => {
  return results.map((item) => {
    return {
      author: item.name,
      title: item.popularRepository.repositoryName,
      url: item.url,
      score: item.rank,
    };
  });
};
