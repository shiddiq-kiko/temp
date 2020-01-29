'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Menu extends Model{}
  Menu.init({
    name: DataTypes.STRING,
    menu_type: {
      type : DataTypes.STRING,
      validate : {
        isIn : {
          args :[['food', 'drink']],
          msg : 'Tipe menu hanya boleh food / drink'
        },
        maxNumber(value, next) {
          sequelize.models.Menu.findAll({where : {
            RestaurantId : this.RestaurantId
          }})
          .then(result => {
            let count = 0
            for(let i = 0; i < result.length; i++){
              if(result[i].dataValues.menu_type){
                if(result[i].dataValues.RestaurantId){
                  if(result[i].dataValues.menu_type === value && +result[i].dataValues.RestaurantId === +this.RestaurantId){
                    console.log('masuk')
                    count++
                  }
                }
              }
            }
            if(count >= 5){
              next(`Varian ${this.menu_type} sudah maksimal!`)
            }
            else{
              next()
            }
          })
        }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    RestaurantId : DataTypes.INTEGER
  }, {
    sequelize,
    hooks : {
      beforeCreate: (instances, options) => {
        if(!instances.price && instances.menu_type === 'food' || instances.price === '0' && instances.menu_type === 'food') instances.price = 15000
        if(!instances.price && instances.menu_type === 'drink' || instances.price === '0' && instances.menu_type === 'drink') instances.price = 10000
      },
      beforeBulkUpdate: (instances, options) => {
        if(!instances.attributes.price && instances.attributes.menu_type === 'food' || instances.attributes.price === '0' && instances.attributes.menu_type === 'food') instances.attributes.price = 15000
        if(!instances.attributes.price && instances.attributes.menu_type === 'drink' || instances.attributes.price === '0' && instances.attributes.menu_type === 'drink') instances.attributes.price = 10000
      }
    }
  });
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.belongsTo(models.Restaurant)
  };
  return Menu;
};