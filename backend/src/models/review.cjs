'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Review extends Model {
        static associate(models) {
            Review.belongsTo(models.Book, { foreignKey: 'book_id', onDelete: 'CASCADE' });
            Review.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
        }
    }

    Review.init({
        review_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        book_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        rating: {
            type: DataTypes.INTEGER,
            validate: { min: 1, max: 5 },
        },
        comment: DataTypes.TEXT,
    }, {
        sequelize,
        modelName: 'Review',
        tableName: 'Reviews',
        timestamps: true,
    });

    return Review;
};
