const { Channel, Story } = require('../models');

exports.index = (req, res, next) => {
  Story.findAll({
    include: [
      {
        model: Channel,
        as: 'channel'
      }
    ]
  }).then(stories => res.send(stories));
};
