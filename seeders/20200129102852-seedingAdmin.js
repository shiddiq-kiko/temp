'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    const admin = [
      {
        email : 'admin@hacktiv8.com',
        secret_code : 123456,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]
    return queryInterface.bulkInsert('Admins', admin, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Admins', null, {});
  }
};
