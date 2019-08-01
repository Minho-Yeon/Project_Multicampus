const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();



// *********** npm install nodemailer필요해요.
router.get('/nexon',(req,res)=> {
    console.log('넥슨이메일 전송');
    let userEmail = req.body.email;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'love.pink.edacb1@gmail.com',
            pass: 'light310915*'
        }
    });

    let mailOptions = {
        from: 'love.pink.edacb1@gmail.com',
        to: 'momo0735@naver.com',
        subject: '안녕',
        text: 'text@@@'
    };

    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log(err);
        } else {
            console.log('send')
        }
    });
});

router.get('/',(req,res)=> {
    console.log('회원가입 메일 전송');
    let userEmail = req.body.email;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'love.pink.edacb1@gmail.com',
            pass: 'light310915*'
        }
    });

    let mailOptions = {
        from: 'love.pink.edacb1@gmail.com',
        to: 'momo0735@naver.com',
        subject: '안녕',
        text: 'text@@@'
    };

    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log(err);
        } else {
            console.log('send')
        }
    });
});

module.exports = router;