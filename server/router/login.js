const express = require('express');
const hasher = require('pbkdf2-password')();
const router = express.Router();



router.post('/', async (req,res)=>{
    console.log('/server/login요청 받음');
    let login_email = req.body.email;
    let login_password = req.body.password;

    // serch user from Users_TB
    let user= await api.getrow('Users_TB','email_user',login_email);
    if(user){
        hasher({
            password: login_password,
            salt: user.salt
        }, async function(err, pass, salt, hash){
            if(err) {
                console.log(err)
            } else {
                if(hash === user.password_user){
                    console.log('비밀번호 맞음');
                    let userInfo = {}
                    userInfo['email_user'] = user.email_user;
                    userInfo['name_user'] = user.name_user;
                    userInfo['money_platform'] = user.money_platform;
                    userInfo['salt'] = user.salt;  
                    userInfo['image_path'] = user.image_path;
                    res.json({'userInfo':userInfo});
                } else {

                    let num = 0; 
                   
                    console.log("dbuser",user);
                    num = user.countlog + 1
                    await save.updatedb('Users_TB',[{'name':'countlog','value':num}],'email_user', user.email_user);
                    console.log("dblognum",num);

                    if(num >= 5){
                        let lastfaildlogin = new Date()
                        console.log("마지막 시간",lastfaildlogin);  
                        res.json({'message':'로그인 횟수 시도를 초과 하였습니다 30초후 시도해 주세요'});
                        let retry = new Date()
                        console.log("재시도",retry);
                        
                        let retrySec = lastfaildlogin - retry
                        console.log("경과시간",retrySec);
                        

                        if(retrySec>3000){
                            num = 0
                            await save.updatedb('Users_TB',[{'name':'countlog','value':num}],'email_user', user.email_user);
                            console.log("count초기화",num);
                        }
                    } 

                    res.json({'message':'비밀번호가 잘못되었습니다.'});
                }
            }
        });
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