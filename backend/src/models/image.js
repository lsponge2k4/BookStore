'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Image extends Model {
        static associate(models) {

        }
    }

    Image.init({
        image_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        entity_type: {
            type: DataTypes.ENUM('user', 'book', 'review', 'category', 'banner', 'admin'),
            allowNull: false,
        },
        entity_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image_url: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        image_type: {
            type: DataTypes.ENUM('avatar', 'cover', 'gallery', 'main', 'other'),
            defaultValue: 'other',
        },
        storage_type: {
            type: DataTypes.ENUM('local', 'cloud'),
            defaultValue: 'local',
        },
        uploaded_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        sequelize,
        modelName: 'Image',
        tableName: 'Images',
        timestamps: false,
    });

    return Image;
};