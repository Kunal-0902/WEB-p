var express = require("express");
var app = express();

app.get('/add-customer',function(req,res){
  res.sendFile(__dirname+"/reg.html");
});

app.get('/form-submit',function(req,res){
  res.send(req.query);
})

app.listen(7000);