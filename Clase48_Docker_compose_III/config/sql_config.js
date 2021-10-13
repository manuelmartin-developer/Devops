const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();
const pool = new Pool({
  user: "postgres",
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT
})
module.exports = pool