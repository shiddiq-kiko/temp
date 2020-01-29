'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.addColumn('Contacts', "phone_number_2",Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.removeColumn('Contacts', 'phone_number_2');
  }
};
