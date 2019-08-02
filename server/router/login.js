const express = require('express');
const hasher = require('pbkdf2-password')();
const router = express.Router();
const alert = require('alert-node');


//password check
function Auth(login_password, user){
    console.log(login_password, user)

    hasher({
        password: login_password,
        salt: user[0].salt
    }, function(err, pass, salt, hash){
        if(err) {
            console.log(err)
        } else {
            if(hash === user[0].password){
                let userInfo = {}
                userInfo['email_user'] = user[0].email_user
                userInfo['name_user'] = user[0].name_user
                userInfo['money_platform'] = user[0].money_platform
                return JSON.stringify(userInfo)
            } else {
                alert('비밀번호가 잘못되었습니다.')
            }
        }
    });
}
// ***********  npm i -S alert-node 필요해요.
router.post('/',(req,res)=>{
    console.log('/server/login요청 받음');
    console.log(req.body)

    let login_email = req.body.email;
    let login_password = req.body.password;

    // serch user from Users_TB
    let sql_select = 'SELECT * FROM Users_TB WHERE email_user = ?'
    mydb.query(sql_select, login_email, function(err, user, fields){
        if(err){
            console.log(err)
        } 
        else {
            console.log(user)
            if(!user[0]){
                alert('회원이 아닙니다. 이메일을 확인해주세요.');
            } else {
                Auth(login_password, user);
            }
        }
    });

});


// *********************  return 형태
// {
//     name_user: 'aa',
//     email_user: 'admin@admin.com',
//     money_platform: 100,
//   }
// 


module.exports= router;