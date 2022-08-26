const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const sqlite3 = require("sqlite3").verbose();

const app = express();

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const db = new sqlite3.Database("memory:");
// db.serialize(() => {
//   db.run("CREATE TABLE user (username TEXT, password TEXT, title TEXT)");
//   db.run(
//     "INSERT INTO user VALUES ('privilegedUser', 'privilegedUser1', 'Administrator')"
//   );
//   console.log("sqlite3 'memory' database and 'user' table successfully created")
// });

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(3333, () => {
  console.log("Server listening on port 3333");
});
