'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const phase = [
      {
        name : '0',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : '1',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : '2',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : '3',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]
    return queryInterface.bulkInsert('Phases', phase, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Phases', null, {});
  }
};
