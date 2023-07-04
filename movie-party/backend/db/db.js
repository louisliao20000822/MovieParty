const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();
// Create a connection to the database


async function query(sql, params) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  const [results] = await connection.execute(sql, params);

  connection.end();
  return results;
}

module.exports = { query}