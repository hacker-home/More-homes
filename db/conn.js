const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);
module.exports = connection;
