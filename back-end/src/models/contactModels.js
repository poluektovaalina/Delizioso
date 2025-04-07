// src/models/contactModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Модель для контактов
const Contact = sequelize.define('Contact', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    timestamps: true,
    tableName: 'contacts'
});

module.exports = Contact;
