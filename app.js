const dootenv = require("dotenv");
const db = require("./config/sequelize");
dootenv.config();
require("./config/express");

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}