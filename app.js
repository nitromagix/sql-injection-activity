const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const sqlite3 = require("sqlite3").verbose();

const app = express();

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = new sqlite3.Database("memory:");

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

app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  // console.log(username, password);
  let query = `SELECT title FROM user WHERE username ='${username}' AND password ='${password}'`;

  db.get(query, function (err, row) {
    if (err) {
      console.log("ERROR", err);
      res.redirect("/index.html#error");
    } else if (!row) {
      res.redirect("/index.html#unauthorized");
    } else {
      res.send(
        `Hello <b>` +
          row.title +
          `!</b><br /> 
      This file contains all your secret data: <br /><br /> 
      SECRETS <br /><br /> MORE SECRETS <br /><br /> 
      <a href="/index.html">Go back to login</a>`
      );
    }
  });

  // res.status(200).send("OK");
});

app.listen(3333, () => {
  console.log("Server listening on port 3333");
});
