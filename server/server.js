const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

global.mydb = require('./dbconnection.js');

global.api=require('./method/api.js');
global.save=require('./method/save.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

const login = require('./router/login.js');
app.use('/login',login);
const signin = require('./router/signin.js');
app.use('/signin',signin);
const gamelist = require('./router/gamelist.js');
app.use('/gamelist',gamelist);
const exchange = require('./router/exchange.js');
app.use('/exchange',exchange);
const authEmail = require('./router/authEmail.js');
app.use('/auth',authEmail);


app.listen(port, ()=>{
    console.log(port+"번호로 대기 중...");
});