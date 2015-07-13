

var express = require("express");
var app = express();

app.get('/', function (req, res) {
  res.send('Draft version');
})
 
app.listen(3000);