const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
})

connection.connect((err) => {
    err ? console.error('error connecting ' + err.stack) : console.log('connected as id ' + connection.threadId);
})

module.exports = connection;