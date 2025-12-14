'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Cart extends Model {
        static associate(models) {
            Cart.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
            Cart.hasMany(models.CartItem, { foreignKey: 'cart_id', onDelete: 'CASCADE' });
        }
    }

    Cart.init({
        cart_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        status: {
            type: DataTypes.ENUM('active', 'checked_out', 'abandoned'),
            defaultValue: 'active',
        },
    }, {
        sequelize,
        modelName: 'Cart',
        tableName: 'Carts',
        timestamps: true,
    });

    return Cart;
};
