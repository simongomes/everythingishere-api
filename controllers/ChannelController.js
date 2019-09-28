const { Channel, Story } = require('../models');

exports.index = (req, res, next) => {
  Channel.findAll().then(channels => res.send(channels));
};
