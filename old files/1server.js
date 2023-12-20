// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors'); // Add this line

// const app = express();

// // Enable CORS for all routes
// app.use(cors());
// app.use(express.json());


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Kunal@09012001',
//   database: 'aarogyamm',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// app.get('/add-customer', (_req, res) => {
//   try {
//     const {id , customerName, phoneNo, phoneNo1, quantity, Product, address } = _req.body;

//     // Check if customerName is null or undefined
//     if (customerName === null || customerName === undefined) {
//       return res.status(400).json({ error: 'Customer Name cannot be null or undefined' });
//     }

//     const query = 'CALL AddCustomer(?, ?, ?, ?, ?, ?)';

//     connection.query(query, [id ,customerName, phoneNo, phoneNo1, quantity, Product, address], (err, results) => {
//       if (err) {
//         console.error('Error inserting customer:', err);
//         res.status(500).json({ error: 'Error adding customer' });
//       } else {
//         console.log('Customer added with ID:', results.insertId);
//         res.json({ message: 'Customer added successfully' });
//       }
//     });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });

// // Add a new route to fetch customer data
// app.get('/get-customers', (_req, res) => {
//   const query = 'SELECT * FROM customers';
//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching customers:', err);
//       res.status(500).json({ error: 'Error fetching customers' });
//     } else {
//       res.json(results);
//     }
//   });
// });




// app.listen(5501, () => {
//   console.log('Server is running on port 5501');
// });



const f =require('fs');
var usl=require('url');
const home = f.readFileSync('home.html');
const about = f.readFileSync('about.html');
const contact = f.readFileSync('contact.html');

// Narendra
const htp =require('http')
var express = require('express');
var app = express();
const con = require('./config');
const hostname = 'localhost';
const port = 5000;
const path = require('path');

const publicpath = path.join(__dirname, 'public');
app.use(express.static(publicpath)); 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.get('/find',function(req,resp){
  console.log("requrl = "+publicpath);
  var cname = req.query.name;
  var cwno = req.query.whatsapp;
  var cno = req.query.cnumber;
  var cemail = req.query.email;
  var address = req.query.address;

  console.log()
 
  con.query(`INSERT INTO customers (customer_name, whatsapp_no, mobile_no, email, address) VALUES ('${cname}', '${cwno}', '${cno}', '${cemail}', '${address}')`,function(error,results,fields){
    // resp.json(results[2].customer_name);
   resp.send(req.query.name);

   console.log(publicpath);
   
    // console.log(po);
  })
})

var server = app.listen(port,hostname,()=>{

  console.log(`Server running at http://${hostname}:${port}/`);
})

// INSERT INTO customers (`customer_name`, `whatsapp_no`, `mobile_no`, `email`, `address`) VALUES ('smith', '524548', '484848', 'asd@', 'klkald')
