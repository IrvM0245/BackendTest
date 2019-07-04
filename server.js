const express = require('express'),
app = express(),
bodyParser = require('body-parser');
//app.use(express.json());

port = process.env.PORT || 3000;


//const mysql = require('mysql');

// connection configurations
/*const mc = mysql.createConnection({
  host     : 'us-cdbr-iron-east-02.cleardb.net',
  user     : 'b54cebd94c131a',
  password : '785b23e4',
  database : 'heroku_d6c3f5493729dde'
});

// connect to database
mc.connect();*/

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route
