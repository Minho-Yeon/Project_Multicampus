const express = require('express');     //민호
const router = express.Router();
const hasher = require('pbkdf2-password');
router.post('/signin',(req,res)=>{
    console.log('/signin요청 받음');
    let userinfo={};                //회원가입 요청 받은 값 저장
    userinfo.email=req.body.email;
    userinfo.name = req.body.name;
    userinfo.password = req.body.password;

    userinfo.nexonemail=req.body.nexonemail;

    // if(userinfo.email){
    //     return
    // }
    if(!userinfo.password==req.body.passwordcheck){
        return ;
    }
    if(userinfo.nexonemail==undefined){
        return ;
    }
  


    hasher({
        password :userinfo.password
    },(err,pass,salt,hash)=>{
        if(err) throw error;
        else{
            userinfo.salt = salt;
            userinfo.password = hash;
        }
    });

    if(api.checkemail(userinfo.email)){ //db에서 email 존재여부 확인
        console.log('회원가입 불가능');
    }else{
        console.log('회원가입 가능');
        save.plusUser(userinfo);
    };
    
});

module.exports= router;