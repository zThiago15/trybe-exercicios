const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'thiago',
  password: 'thiago_40',
  host: 'localhost',
  database: 'user_db'
});

module.exports = connection;