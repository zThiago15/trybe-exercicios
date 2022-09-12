import mysql from 'mysql2/promise';
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

export default connection;