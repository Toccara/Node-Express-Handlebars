var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Christ20!",
  database: "burgers_db",
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
