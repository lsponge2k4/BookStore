'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Johan Balison',
        email: 'lsponge2k4@gmail.com',
        password: '123456',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'John Williams',
        email: 'john@gmail.com',
        password: '123456',
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'KiKi Dog',
        email: 'kikidog@gmail.com',
        role: 'customer',
        password: 'kikidog',
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {});
  }
};
