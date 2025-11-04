'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderItems', [
      {
        order_id: 1,
        book_id: 2,
        quantity: 2,
        price: 120.50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 1,
        book_id: 3,
        quantity: 1,
        price: 200.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        book_id: 1,
        quantity: 1,
        price: 150.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 3,
        book_id: 1,
        quantity: 3,
        price: 330.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 1,
        book_id: 2,
        quantity: 2,
        price: 360.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrderItems', null, {});
  }
};
