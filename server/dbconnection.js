// const promisePool;
const mysql = require('mysql2');

const pool = mysql.createPool({
host: 'localhost',
port: 3306,
user: 'root',
password: 'light310915*',
database: 'MONEYEXCHANGE'
});


module.exports= pool;