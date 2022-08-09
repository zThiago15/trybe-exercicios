const mysql = require('mysql2/promise');

// cria conexão uma vez
const connection = mysql.createPool({
  user: 'thiago',
  password: 'thiago_40',
  host: 'localhost',
  database: 'model_example'
});

module.exports = { connection };