'use strict';
module.exports = (sequelize, DataTypes) => {
  var Park = sequelize.define('parks', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    website: DataTypes.STRING
  }, {});
  Park.associate = function(models) {
    // associations can be defined here
  };
  return Park;
};