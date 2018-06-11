'use strict';
module.exports = (sequelize, DataTypes) => {
  var Park = sequelize.define('Park', {
    Name: DataTypes.STRING,
    Locations: DataTypes.STRING,
    website: DataTypes.STRING
  }, {});
  Park.associate = function(models) {
    // associations can be defined here
  };
  return Park;
};