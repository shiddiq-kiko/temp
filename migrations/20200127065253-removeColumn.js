'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('Contacts', 'phase');
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Contacts', "phase",Sequelize.STRING);
  }
};
