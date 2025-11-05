'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [
      {
        entity_type: 'book',
        entity_id: 1,
        image_url: '/image/books/covers/The_Great_Gatsby.jpg',
        image_type: 'cover',
        storage_type: 'local',
        uploaded_at: new Date(),
      },
      {
        entity_type: 'book',
        entity_id: 3,
        image_url: '/image/books/covers/1984.jpg',
        image_type: 'cover',
        storage_type: 'local',
        uploaded_at: new Date(),
      },
      {
        entity_type: 'book',
        entity_id: 4,
        image_url: '/image/books/covers/The_Hobbit.jpg',
        image_type: 'cover',
        storage_type: 'local',
        uploaded_at: new Date(),
      },
      {
        entity_type: 'book',
        entity_id: 5,
        image_url: '/image/books/covers/Pride_and_Prejudice.jpg',
        image_type: 'cover',
        storage_type: 'local',
        uploaded_at: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
