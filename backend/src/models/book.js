'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Book extends Model {
        static associate(models) {
            Book.belongsTo(models.Category, { foreignKey: 'category_id', onDelete: 'SET NULL' });
            Book.hasMany(models.Review, { foreignKey: 'book_id', onDelete: 'CASCADE' });
            Book.hasMany(models.OrderItem, { foreignKey: 'book_id', onDelete: 'CASCADE' });
            Book.hasMany(models.CartItem, { foreignKey: 'book_id', onDelete: 'CASCADE' });
        }
    }

    Book.init({
        book_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: {
            type: DataTypes.STRING(200),
            allowNull: false,
            validate: { notEmpty: true },
        },
        author: DataTypes.STRING(100),
        publisher: DataTypes.STRING(255),
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: { isDecimal: true, min: 0 },
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: { min: 0 },
        },
        category_id: DataTypes.INTEGER,
        description: DataTypes.TEXT,
    }, {
        sequelize,
        modelName: 'Book',
        tableName: 'Books',
        timestamps: true,
    });

    return Book;
};
    