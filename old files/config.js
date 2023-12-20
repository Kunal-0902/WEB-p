const mysql = require('mysql2');

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Kunal@09012001",
    database:"aarogyamm"
})

module.exports=con