'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class CartItem extends Model {
        static associate(models) {
            CartItem.belongsTo(models.Cart, { foreignKey: 'cart_id', onDelete: 'CASCADE' });
            CartItem.belongsTo(models.Book, { foreignKey: 'book_id', onDelete: 'CASCADE' });
        }
    }

    CartItem.init({
        cart_item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        cart_id: { type: DataTypes.INTEGER, allowNull: false },
        book_id: { type: DataTypes.INTEGER, allowNull: false },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            validate: { min: 1 },
        },
        added_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    }, {
        sequelize,
        modelName: 'CartItem',
        tableName: 'CartItems',
        timestamps: true,
    });

    return CartItem;
};
