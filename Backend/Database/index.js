const mysql = require('mysql');

let database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test'
});

database.connect((err, res) => {
    if(err) throw err;
    console.log('DB connected....');
});

module.exports = database;

