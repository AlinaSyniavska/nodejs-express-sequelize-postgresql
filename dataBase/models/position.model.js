const { sq } = require('../db');
const { DataTypes } = require('sequelize');

const Position = sq.define('Position', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    positionTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {timestamps: false});


module.exports = Position
