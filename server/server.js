const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const pool = require('./dbconnection.js')

global.mydb = pool.promise();

global.api=require('./method/api.js');
global.save=require('./method/save.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

const login = require('./router/login.js');
app.use('/server/login',login);
const signin = require('./router/signin.js');
app.use('/server/signin',signin);
const gamelist = require('./router/gamelist.js');
app.use('/server/gamelist',gamelist);
const exchange = require('./router/exchange.js');
app.use('/server/exchange',exchange);
const email = require('./router/email.js');
app.use('/server/email',email);
const checkcode = require('./router/checkcode.js');
app.use('/server/checkcode',checkcode);
const changepassword = require('./router/changepassword.js');
app.use('/server/changepassword',changepassword);
const auth = requiere('./router/auth.js')
app.use('/server/auth',auth)

app.listen(port, ()=>{
    console.log(port+"번호로 대기 중...");
});