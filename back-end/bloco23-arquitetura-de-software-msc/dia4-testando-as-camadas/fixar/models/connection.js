
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'thiago',
  password: 'thiago_40',
  database: 'model_example'});

module.exports = connection;