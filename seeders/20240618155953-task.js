'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Task', [{
     title: 'Varrer a casa',
     description: 'Pegar a vassoura e varrer toda a casa',
     status: 'Em andamento',
     createdAt: new Date(),
     updatedAt: new Date(),
     }]
    );
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Task', null, {});
  }
};
