'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Payments', {
            payment_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            order_id: {
                type: Sequelize.INTEGER,
                references: { model: 'Orders', key: 'order_id' },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            method: {
                type: Sequelize.ENUM('credit_card', 'paypal', 'card', 'bank_transfer'),
            },
            amount: Sequelize.DECIMAL(12, 2),
            status: {
                type: Sequelize.ENUM('pending', 'success', 'failed'),
                defaultValue: 'pending',
            },
            paid_at: Sequelize.DATE,
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
        await queryInterface.dropTable('Payments');
    },
};
