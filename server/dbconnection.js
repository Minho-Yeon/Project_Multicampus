// const promisePool;
const mysql = require('mysql2');

const pool = mysql.createPool({
host: '70.12.50.176',
port: 3306,
user: 'root',
password: '123456',
database: 'MONEYEXCHANGE'
});


module.exports= pool;