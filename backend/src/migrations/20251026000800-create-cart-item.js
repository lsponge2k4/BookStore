'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('CartItems', {
            cart_item_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            cart_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'Carts', key: 'cart_id' },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            book_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'Books', key: 'book_id' },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            quantity: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
            },
            added_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
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
        await queryInterface.dropTable('CartItems');
    },
};
