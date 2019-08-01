const express = require('express');     //민호
const router = express.Router();
const hasher = require('pbkdf2-password');

router.post('/',(req,res)=>{
    console.log('/server/signin요청 받음');
    let userinfo={};                //회원가입 요청 받은 값 저장-민호
    userinfo.email=req.body.email;
    userinfo.name = req.body.name;
    userinfo.password = req.body.password;
    userinfo.nexonemail=req.body.nexonemail;

    if(api.checkemail(userinfo.email)){ //db에서 email 존재여부 확인-민호
        console.log('회원가입 불가능');
        return;
    }else{
        console.log('회원가입 가능');
        hasher({
            password :userinfo.password
        },(err,pass,salt,hash)=>{
            if(err) throw error;
            else{
                userinfo.salt = salt;
                userinfo.password = hash;
            }
        });
        save.plusUser(userinfo);    //db정보 저장 메소드-민호
    };
    
});

module.exports= router;