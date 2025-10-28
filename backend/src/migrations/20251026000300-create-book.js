'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Books', {
            book_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            author: Sequelize.STRING(100),
            publisher: Sequelize.STRING(255),
            price: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            stock: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            category_id: {
                type: Sequelize.INTEGER,
                references: { model: 'Categories', key: 'category_id' },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            },
            description: Sequelize.TEXT,
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
        await queryInterface.dropTable('Books');
    },
};
