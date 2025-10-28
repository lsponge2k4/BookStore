'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Reviews', {
            review_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            book_id: {
                type: Sequelize.INTEGER,
                references: { model: 'Books', key: 'book_id' },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: { model: 'Users', key: 'user_id' },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            rating: {
                type: Sequelize.INTEGER,
                validate: { min: 1, max: 5 },
            },
            comment: Sequelize.TEXT,
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

        await queryInterface.addConstraint('Reviews', {
            fields: ['user_id', 'book_id'],
            type: 'unique',
            name: 'unique_user_book_review',
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Reviews');
    },
};
