'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class OrderItem extends Model {
        static associate(models) {
            OrderItem.belongsTo(models.Order, { foreignKey: 'order_id', onDelete: 'CASCADE' });
            OrderItem.belongsTo(models.Book, { foreignKey: 'book_id', onDelete: 'CASCADE' });
        }
    }

    OrderItem.init({
        order_item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        order_id: DataTypes.INTEGER,
        book_id: DataTypes.INTEGER,
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 1 },
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: { min: 0 },
        },
    }, {
        sequelize,
        modelName: 'OrderItem',
        tableName: 'OrderItems',
        timestamps: true,
    });

    return OrderItem;
};
