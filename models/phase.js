'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Phase extends Model{}
  Phase.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        isIn : {
          args : [['0', '1', '2', '3']],
          msg : 'Phase is not Available'
        }
      }
    },
  }, {
    sequelize
  })
  Phase.associate = function(models) {
    // associations can be defined here
    Phase.belongsToMany(models.Contact, {through : models.ContactPhase})
  };
  return Phase;
};