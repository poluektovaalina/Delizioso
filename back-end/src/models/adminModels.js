const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Dish = sequelize.define('Dish', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'dishes',
  timestamps: true,
});

module.exports = Dish;
