'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('User', [{
     firstName: 'Aline',
     lastName: 'Farias',
     email: 'aline@esbam.edu.br',
     createdAt: new Date(),
     updatedAt: new Date(),
    }]
  );
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('User', null, {});
  }
};
