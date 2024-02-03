const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.POSTGRES_URL);

const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

const dbSync = async () => {
    try {
        // await sequelize.sync({ force: true });
        await sequelize.sync();
        console.log('All models synced.');
    } catch (error) {
        console.error('Sync Error:', error);
    }
};

module.exports = { sq: sequelize, dbConnection, dbSync };
