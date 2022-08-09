const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'thiago',
  password: 'thiago_40',
  database: 'rest_exercicios'});

module.exports = connection;