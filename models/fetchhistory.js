'use strict';
module.exports = (sequelize, DataTypes) => {
  const FetchHistory = sequelize.define('FetchHistory', {
    channel: DataTypes.STRING
  }, {});
  FetchHistory.associate = function(models) {
    // associations can be defined here
  };
  return FetchHistory;
};