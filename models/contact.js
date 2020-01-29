'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Contact extends Model{}

  Contact.init ({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: {
      type : DataTypes.STRING,
      validate : {
        len : {
          args : [8, 12],
          msg : 'Phone Number must 8-12 Character'
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          args : true,
          msg : 'Format Email is Wrong'
        }
      }
    },
    phone_number_2: DataTypes.STRING,
    work_period : DataTypes.INTEGER//{
    //   type : DataTypes.INTEGER,
    //   validate : {
    //     workPeriodValidation(value){
          
    //     } 
    //   }
    // }
  }, {
    sequelize,
    hooks: {
      beforeCreate : (contact, options) => {
        contact = contact.dataValues
        if(contact.last_name === '') contact.last_name = contact.first_name
        contact.first_name = contact.first_name.toUpperCase()
        contact.last_name = contact.last_name.toUpperCase()
        // console.log(contact)
      },
      afterFind : (contact, options) => {
        for(let i = 0; i < contact.length; i++){
          if(contact[i].dataValues.phone_number_2 === null || contact[i].dataValues.phone_number_2.length === 0) {
            // console.log(contact[i].dataValues.phone_number_2)
            let num1 = contact[i].dataValues.phone_number.substring(1, contact[i].dataValues.phone_number.length-4)
            contact[i].dataValues.phone_number = '+62' + num1 + 'xxxx'
          }else if(contact[i].dataValues.phone_number === null || contact[i].dataValues.phone_number.length === 0){
            let num = contact[i].dataValues.phone_number_2.substring(1, contact[i].dataValues.phone_number.length-4)
            contact[i].dataValues.phone_number_2 = '+62' + num + 'xxxx'
          } else {
            let num1 = contact[i].dataValues.phone_number.substring(1, contact[i].dataValues.phone_number.length-4)
            contact[i].dataValues.phone_number = '+62' + num1 + 'xxxx'
            let num = contact[i].dataValues.phone_number_2.substring(1, contact[i].dataValues.phone_number.length-4)
            contact[i].dataValues.phone_number_2 = '+62' + num + 'xxxx'
          }
        }
      }
    }
  })
  Contact.associate = function(models) {
    Contact.belongsToMany(models.Phase, {through : models.ContactPhase})
    // associations can be defined here
  };
  return Contact;
};