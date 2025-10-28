'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Category extends Model {
        static associate(models) {
            Category.hasMany(models.Book, { foreignKey: 'category_id', onDelete: 'SET NULL' });
        }
    }

    Category.init({
        category_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: { notEmpty: true },
        },
    }, {
        sequelize,
        modelName: 'Category',
        tableName: 'Categories',
        timestamps: true,
    });

    return Category;
};
