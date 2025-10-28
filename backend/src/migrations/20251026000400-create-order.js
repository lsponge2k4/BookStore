'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Orders', {
            order_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: { model: 'Users', key: 'user_id' },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            total_price: {
                type: Sequelize.DECIMAL(12, 2),
            },
            status: {
                type: Sequelize.ENUM('pending', 'paid', 'shipped', 'completed', 'cancelled'),
                defaultValue: 'pending',
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Orders');
    },
};
