'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const menu = [
      {
        name : 'Beef Teriyaki',
        menu_type : 'food',
        rating : 7,
        price : 45000,
        RestaurantId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Grilled Chicken',
        menu_type : 'food',
        rating : 9,
        price : 40000,
        RestaurantId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Fried Chicken',
        menu_type : 'food',
        rating : 9,
        price : 25000,
        RestaurantId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Coca Cola',
        menu_type : 'drink',
        rating : 10,
        price : 15000,
        RestaurantId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Beef Yakiniku',
        menu_type : 'food',
        rating : 7,
        price : 47000,
        RestaurantId : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Ocha',
        menu_type : 'drink',
        rating : 5,
        price : 5000,
        RestaurantId : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]
    return queryInterface.bulkInsert('Menus', menu, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Menus', null, {});
  }
};
