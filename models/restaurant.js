'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Restaurant extends Model{}
  Restaurant.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize
  });
  Restaurant.associate = function(models) {
    // associations can be defined here
    Restaurant.hasMany(models.Menu)
  };
  return Restaurant;
};