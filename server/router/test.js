const express = require('express');
const router  = express.Router();
const crypto = require('crypto');

router.get('/', async (req,res)=>{
    console.log('/server/test요청 받음');
    // console.log(save.insertquery("hello",[{name:"one",value:"1"},{name:"two",value:"2"},{name:"three",value:"3"}]));
    // console.log(save.updatequery("hello",[{name:"one",value:"1"},{name:"two",value:"2"},{name:"three",value:"3"}],"idx_user","3"));
    // console.log(save.deletedb('hello','email_user','wptnzpq@gmail.com'));
    // var n = await api.checkemail("wptnzpq@gmail").
    // auth.SendEmail('aa', 'momo0735@naver.com', true);
    // var a = await info('9zAw2t@nexon.com');
    // console.log(a);


    // let resend_check = await api.getrow('SecurityCode_TB', 'nexon_email', 'admin@admin.com');
    // console.log(resend_check);

    // if(resend_check){
    //     console.log('확인')
    //     save.deletedb('SecurityCode_TB', 'nexon_email', 'admin@admin.com');
    // };


 
   
    res.end();
});
module.exports = router;