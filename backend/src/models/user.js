'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Order, { foreignKey: 'user_id', onDelete: 'CASCADE' });
            User.hasMany(models.Review, { foreignKey: 'user_id', onDelete: 'CASCADE' });
            User.hasOne(models.Cart, { foreignKey: 'user_id', onDelete: 'CASCADE' });
            User.hasMany(models.Image, { foreignKey: 'entity_id', as: 'Images', constraints: false, scope: { entity_type: 'user' } });
        }
    }

    User.init({
        user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: { notEmpty: true, len: [3, 100] },
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: { isEmail: true },
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: { len: [6, 255] },
        },
        role: {
            type: DataTypes.ENUM('customer', 'admin'),
            defaultValue: 'customer',
        },
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'Users',
        timestamps: true,
    });

    return User;
};
