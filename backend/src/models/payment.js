'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Payment extends Model {
        static associate(models) {
            Payment.belongsTo(models.Order, { foreignKey: 'order_id', onDelete: 'CASCADE' });
        }
    }

    Payment.init({
        payment_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        order_id: DataTypes.INTEGER,
        method: {
            type: DataTypes.ENUM('credit_card', 'paypal', 'card', 'bank_transfer'),
        },
        amount: DataTypes.DECIMAL(12, 2),
        status: {
            type: DataTypes.ENUM('pending', 'success', 'failed'),
            defaultValue: 'pending',
        },
        paid_at: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Payment',
        tableName: 'Payments',
        timestamps: true,
    });

    return Payment;
};
