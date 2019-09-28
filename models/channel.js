'use strict';
module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define(
    'Channel',
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      description: DataTypes.TEXT
    },
    {}
  );
  Channel.associate = function(models) {
    // associations can be defined here
    Channel.hasMany(models.Story, {
      foreignKey: 'channel_id',
      sourceKey: 'id',
      as: 'stories'
    });
  };
  return Channel;
};
