var mysql = require("mysql");
var process = require("dotenv").config();
var keys = require("../process.js");


// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "anorak3/pigeon",
//   database: "burgers_db"
// });

var connection;
if (process.env.JAWSDB_URL) {
  mysql.createConnection(process.env.JAWSDB_URL);
} else {
  mysql.createConnection({
    // Your host
    host: keys.mysqlEnv.host_name,
    // Your port
    port: keys.mysqlEnv.port,
    // Your username
    user: keys.mysqlEnv.user_name,
    // Your password
    password: keys.mysqlEnv.password,
    // Your database
    database: keys.mysqlEnv.database
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;


