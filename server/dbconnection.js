const mysql = require('mysql');
const connection = mysql.createPool({
host: 'localhost',
port: 3306,
user: 'root',
password: '123456',
database: 'MONEYEXCHANGE'
});

module.exports=connection;