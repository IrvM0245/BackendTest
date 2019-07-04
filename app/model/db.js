var mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-02.cleardb.net',
    user     : 'b54cebd94c131a',
    password : '785b23e4',
    database : 'heroku_d6c3f5493729dde'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
