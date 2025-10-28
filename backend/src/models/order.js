'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Order extends Model {
        static associate(models) {
            Order.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
            Order.hasMany(models.OrderItem, { foreignKey: 'order_id', onDelete: 'CASCADE' });
            Order.hasOne(models.Payment, { foreignKey: 'order_id', onDelete: 'CASCADE' });
        }
    }

    Order.init({
        order_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: DataTypes.INTEGER,
        total_price: DataTypes.DECIMAL(12, 2),
        status: {
            type: DataTypes.ENUM('pending', 'paid', 'shipped', 'completed', 'cancelled'),
            defaultValue: 'pending',
        },
    }, {
        sequelize,
        modelName: 'Order',
        tableName: 'Orders',
        timestamps: true,
    });

    return Order;
};
