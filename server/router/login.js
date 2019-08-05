const express = require('express');
const hasher = require('pbkdf2-password')();
const router = express.Router();


//password check
function Auth(login_password, user){
    console.log(login_password, user);

    hasher({
        password: login_password,
        salt: user.salt
    }, function(err, pass, salt, hash){
        if(err) {
            console.log(err)
        } else {
            if(hash === user.password){
                let userInfo = {}
                userInfo['email_user'] = user.email_user;
                userInfo['name_user'] = user.name_user;
                userInfo['money_platform'] = user.money_platform;
                userInfo['salt'] = user.salt;
                return JSON.stringify(userInfo);
            } else {
                res.json({'message':'비밀번호가 잘못되었습니다.'});
            }
        }
    });
}

router.post('/',async (req,res)=>{
    console.log('/server/login요청 받음');
    console.log(req.body)

    let login_email = req.body.email;
    let login_password = req.body.password;

    // serch user from Users_TB
    let user= await api.getrow('Users_TB','email_user',login_email);
    if(user){
        Auth(login_password, user);
    }
    else{
        res.json({'message':'회원이 아닙니다. 이메일을 확인해주세요.'});
    }

});


// *********************  return 형태
// {
//     name_user: 'aa',
//     email_user: 'admin@admin.com',
//     money_platform: 100,
//      salt:''
//   }
// 


module.exports= router;