const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define  database name
const dbName = "spotify";

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: dbName,
  });