'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        user_id: 11,
        total_price: 350.00,
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 11,
        total_price: 120.50,
        status: 'paid',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 12,
        total_price: 200.00,
        status: 'shipped',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 12,
        total_price: 500.00,
        status: 'completed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 12,
        total_price: 75.00,
        status: 'cancelled',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
