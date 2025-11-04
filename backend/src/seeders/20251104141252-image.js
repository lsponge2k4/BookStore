'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [
      {
        entity_type: 'user',
        entity_id: 11,
        image_url: '/image/users/avatars/avatar1.webp',
        image_type: 'avatar',
        storage_type: 'local',
        uploaded_at: new Date(),
      },
      {
        entity_type: 'book',
        entity_id: 2,
        image_url: '/image/books/covers/theBillOfRights.jpg',
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
