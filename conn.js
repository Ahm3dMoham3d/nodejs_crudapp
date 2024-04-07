const mysql = require("mysql2");

const query = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"shop"
})

module.exports = query