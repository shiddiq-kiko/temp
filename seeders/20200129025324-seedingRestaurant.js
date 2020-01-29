'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   const restaurant = [
     {
       name : 'Hokben',
       address : 'Pondok indah mall 1',
       createdAt : new Date,
       updatedAt : new Date
     },
     {
       name : 'KFC',
       address : 'Pondok indah mall 2',
       createdAt : new Date,
       updatedAt : new Date
     },
     {
       name : 'Yoshinoya',
       address : 'Gandaria City',
       createdAt : new Date,
       updatedAt : new Date
     }
   ]
    return queryInterface.bulkInsert('Restaurants', restaurant, {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
