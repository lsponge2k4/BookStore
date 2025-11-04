'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publisher: 'Scribner',
        price: 150.00,
        stock: 10,
        category_id: 1,  // giả sử category_id = 1 tồn tại
        description: 'Classic novel set in the 1920s.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publisher: 'J.B. Lippincott & Co.',
        price: 120.50,
        stock: 15,
        category_id: 2,
        description: 'Pulitzer Prize-winning novel about racial injustice.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '1984',
        author: 'George Orwell',
        publisher: 'Secker & Warburg',
        price: 130.00,
        stock: 20,
        category_id: 1,
        description: 'Dystopian novel about totalitarian regime.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        publisher: 'George Allen & Unwin',
        price: 180.00,
        stock: 12,
        category_id: 3,
        description: 'Fantasy adventure preceding Lord of the Rings.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        publisher: 'T. Egerton, Whitehall',
        price: 110.00,
        stock: 8,
        category_id: 2,
        description: 'Romantic novel exploring manners and marriage.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
