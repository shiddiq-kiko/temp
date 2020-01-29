'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.addColumn('Contacts', 'work_period', Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.removeColumn('Contacts', 'work_period');
  }
};
