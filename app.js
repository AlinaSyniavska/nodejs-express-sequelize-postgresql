require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbConnection, dbSync } = require('./dataBase/db');
const { Employee, Position } = require('./dataBase/models');

const app = express();

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.options('*', cors());
app.use(cors(_configureCors()));

dbConnection().then();
dbSync().then();
_modelsDbSync();

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the application.' });
});

app.use('*', (req, res) => {
    res.status(404).json('Route not found');
});

app.use((err, req, res, next) => {
    res.status(err.status || 400).json({
        error: err.message || 'Unknown Error',
        code: err.status || 400,
    });
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
});

function _configureCors() {
    const whitelist = process.env.CORS_WHITE_LIST.split(';');

    return {
        origin: (origin, callback) => {
            if (whitelist.includes(origin) || !origin) {
                // if (whitelist.includes(origin)) {
                console.log(origin);
                console.log(whitelist.includes(origin));
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
    };
}

function _modelsDbSync() {
    Employee.sync({ force: true }).then(() => console.log('Employee synced'));
    Position.sync({ force: true }).then(() => console.log('Position synced'));
    Position.hasMany(Employee);
    Employee.belongsTo(Position);
}
