const { sq } = require('../db');
const { DataTypes } = require('sequelize');

const Employee = sq.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Employee;
