const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pos",
  password: "",
  port: 5432,
});

module.exports = pool;
