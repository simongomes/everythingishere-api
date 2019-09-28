'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define(
    'Story',
    {
      title: DataTypes.STRING,
      story_id: DataTypes.STRING,
      author: DataTypes.STRING,
      description: DataTypes.TEXT,
      url: DataTypes.STRING,
      published_on: DataTypes.DATE,
      channel_id: DataTypes.INTEGER,
      value: DataTypes.TEXT
    },
    {}
  );
  Story.associate = function(models) {
    // associations can be defined here
    Story.belongsTo(models.Channel, {
      foreignKey: 'channel_id',
      targetKey: 'id',
      as: 'channel'
    });
  };
  return Story;
};
