'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const contactPhase = [
      {
        ContactId : 1,
        PhaseId : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        ContactId : 1,
        PhaseId : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        ContactId : 2,
        PhaseId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        ContactId : 2,
        PhaseId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        ContactId : 2,
        PhaseId : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        ContactId : 3,
        PhaseId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        ContactId : 4,
        PhaseId : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]
    return queryInterface.bulkInsert('ContactPhases', contactPhase, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ContactPhases', null, {});
  }
};
