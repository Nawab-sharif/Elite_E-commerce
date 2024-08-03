const mysql = require('mysql');

let dbConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Sharif1234',
    database:'E-Commerce_Mern'
})

module.exports = dbConnection;