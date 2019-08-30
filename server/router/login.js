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
                   
                    // console.log("dbuser",user);
                    num = user.countlog + 1
                    await save.updatedb('Users_TB',[{'name':'countlog','value':num}],'email_user', user.email_user);
                    console.log("dblognum",num);

                    if(num >= 5){
                        let lastfailedlogin = new Date();

                        lastfailedSec = lastfailedlogin.getTime();
                        console.log("마지막 시간",lastfailedSec);  
                        let check = await save.updatedb('Users_TB',[{'name':'lastfailed','value':lastfailedSec}],'email_user', user.email_user);
                        console.log("제에바아아알..",check); // 아래 if문을 주석 처리하고 log를 볼시 값이 저장되어 있는데 
                        console.log("무슨값이니",user); // 아래 if문을 실행시  lastfailed  값이 0 이되고, 실행됨
                                                        // 또한 데이터 저장시 lastfailedSec가 로그인 시도할 때마다 새로운 값을 넣어서 실패후 마지막
                                                        // 시간에 +30초를 해야 넘어가짐
                        res.json({'message':'로그인 횟수 시도를 초과 하였습니다 30초후 시도해 주세요'});
                        let lastfailed = user.lastfailed

                        console.log("sadf",lastfailed);
                        
                        if(lastfailed !== 0){
    
                            let retry = new Date();
                            let retrySec = retry.getTime();
                            console.log("재시도",retrySec);
                            
    
    
                            let retryfail = retrySec - lastfailed
                            console.log("경과시간",retryfail);
                            
    
                            if(retryfail<30000){
                               console.log("일단 여기에 들어와 있니??? 보고싶다...");
                                
                            } else{
                                num = 0 
                               lastfailedSec = 0
                                await save.updatedb('Users_TB',[{'name':'countlog','value':num}],'email_user', user.email_user);
                                await save.updatedb('Users_TB',[{'name':'lastfailed','value':lastfailedSec}],'email_user', user.email_user);
                                console.log("시간초기화",);   
                                console.log("count초기화",num);
                            }
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