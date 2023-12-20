const express = require('express');
const app = express();
const con = require('./config');
const path = require('path');
const hostname = 'localhost';
const port = 5000;

const publicPath = path.join(__dirname, 'public');

app.use('/static', express.static(publicPath))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5000'); // Specify your frontend URL
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/customer', (req, resp) => {
    // Your existing code for handling requests
    console.log("requrl = " + publicPath); // Fix the variable name here
    var cname = req.query.name;
    var cwno = req.query.whatsapp;
    var cno = req.query.cnumber;
    var cemail = req.query.email;
    var address = req.query.address;

    con.query(`INSERT INTO customers (customer_name, whatsapp_no, mobile_no, email, address) VALUES 
    ('${cname}', '${cwno}', '${cno}', '${cemail}', '${address}')`, function (error, results, fields) 
    {
        resp.send(req.query.whatsapp);
        console.log(publicPath); // Fix the variable name here
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
