const express = require("express");
const mysql = require("mysql");
let cors = require("cors");
const parser = require("body-parser");
app = express();

connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : '',
  database  : 'esteem',
  port      : '3306'
});

app.use(cors());
app.use(parser.json());
connection.connect(function(err) {
  if(!err) {
    console.log('Connected to the MySQL server.');
  } else if(err)
  {
    return console.error(`Timeout: ${err.message}`);
  }
})


//#region - LIST MODULE
require("./modules/students.js");
require("./modules/attendance.js");
//#end region - LIST MODULE

app.listen(9000, () => {
  console.log("BACKEND JALAN PADA PORT 9000");
})

