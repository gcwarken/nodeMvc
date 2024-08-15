const pg = require("pg");

const pool = new pg.Pool({
  user: "username",
  password: "myPassword",
  host: "dbHostIp",
  port: "dbPort",
  database: "dbName",
});

module.exports = pool;