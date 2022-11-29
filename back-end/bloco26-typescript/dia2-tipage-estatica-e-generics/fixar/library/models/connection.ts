import mysql from 'mysql2/promise'; // irá resolver as funções que retornam promises
require('dotenv').config();

export default mysql.createPool({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});


