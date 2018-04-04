var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(process.env.PWD)));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(process.env.PWD + '/testmain.html'));
});

// add other routes below
app.get('/about', function (req, res) {
  res.sendFile(path.join(process.env.PWD + '/testmain.html'));
});

app.listen(process.env.PORT || 8080);