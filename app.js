const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const sqlite3 = require("sqlite3").verbose();

const app = express();

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(3333, () => {
  console.log("Server listening on port 3333");
});
