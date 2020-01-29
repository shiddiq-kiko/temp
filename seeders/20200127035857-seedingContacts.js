'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const contacts = [
      {
        first_name : 'Dimitri',
        last_name : 'wahyudiputra',
        phone_number : '0813123123',
        phone_number_2 : '0812122235',
        email : 'dimitri@hacktiv8.com',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        first_name : 'semmy',
        last_name : 'verrian',
        phone_number : '0811113126',
        phone_number_2 : '0899800700',
        email : 'semmy@hacktiv8.com',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        first_name : 'NADIA',
        last_name : 'Riantini',
        phone_number : '08129114133',
        phone_number_2 : null,
        email : 'nriantini@hacktiv8.com',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        first_name : 'armedi',
        last_name : 'armedi',
        phone_number : '08129114145',
        phone_number_2 : null,
        email : 'armedi@hacktiv8.com',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]
    return queryInterface.bulkInsert('Contacts', contacts, {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Contacts', null, {});
  }
};
