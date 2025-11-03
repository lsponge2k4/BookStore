'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Images', {
      image_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      entity_type: {
        type: Sequelize.ENUM('user', 'book', 'review', 'category', 'banner', 'admin'),
        allowNull: false
      },
      entity_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      image_url: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      image_type: {
        type: Sequelize.ENUM('avatar', 'cover', 'gallery', 'main', 'other'),
        defaultValue: 'other'
      },
      storage_type: {
        type: Sequelize.ENUM('local', 'cloud'),
        defaultValue: 'local'
      },
      uploaded_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Images');
  }
};
