const mysql = require('mysql');
const connection = mysql.createPool({
host: '70.10.50.176',
port: 3306,
user: 'root',
password: '123456',
database: 'MONEYEXCHANGE'
});

module.exports=connection;