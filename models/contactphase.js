'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class ContactPhase extends Model{}
  ContactPhase.init({
    ContactId: DataTypes.INTEGER,
    PhaseId: DataTypes.INTEGER
  }, {
    sequelize
  });
  ContactPhase.associate = function(models) {
    // associations can be defined here
  };
  return ContactPhase;
};