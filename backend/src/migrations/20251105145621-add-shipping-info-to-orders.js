'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Orders', 'receiver_name', {
      type: Sequelize.STRING(100),
      allowNull: false,
      defaultValue: 'Unknown',
    });

    await queryInterface.addColumn('Orders', 'phone', {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: '0000000000',
    });

    await queryInterface.addColumn('Orders', 'shipping_address', {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: 'No address',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Orders', 'receiver_name');
    await queryInterface.removeColumn('Orders', 'phone');
    await queryInterface.removeColumn('Orders', 'shipping_address');
  },
};
