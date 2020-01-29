'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Admin extends Model{}
  Admin.init({
    email: DataTypes.STRING,
    secret_code: DataTypes.STRING
  }, {
    sequelize
  });
  Admin.associate = function(models) {
    // associations can be defined here
  };
  return Admin;
};