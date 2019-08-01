const express = require('express');     //민호
const router = express.Router();
const hasher = require('pbkdf2-password');
const alert = require('alert-node');
router.post('/',(req,res)=>{
    console.log('/server/signin요청 받음');
    let userinfo={};                //회원가입 요청 받은 값 저장
    userinfo.email=req.body.email;
    userinfo.name = req.body.name;
    userinfo.password = req.body.password;
    userinfo.nexonemail=req.body.nexonemail;


    let regExp = /[a-z0-9]{2,}@[a-z0-9-]{2,}.[a-z0-9]{2,}/i;
    if(!regExp.test(userinfo.email)){       //이메일 정규식 체크
        console.log('이메일이 아닙니다');
        alert('이메일 형식이 아닙니다.');
        return ;
    };
    var regex = /^[A-Za-z0-9]{6,12}$/;
    if(!regex.test(userinfo.password)){     //비밀번호 숫자,문자 포함 6~12자리
        console.log('비밀번호를 다시 설정하셔야 합니다.');
        return ;
    };

    if(!userinfo.password==req.body.passwordconfirm){ //비밀번호 체크
        console.log('비밀번호가 일치 하지 않습니다.');
        return ;
    }
    if(userinfo.nexonemail==undefined){     //넥슨 이메일 인증 체크
        console.log('넥슨 이메일이 인증 되지 않았습니다.');
        return ;
    }

    if(api.checkemail(userinfo.email)){ //db에서 email 존재여부 확인
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
        save.plusUser(userinfo);
    };
    
});

module.exports= router;