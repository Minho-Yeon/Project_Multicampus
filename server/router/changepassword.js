const express = require('express');
const router = express.Router();




router.post('/',(req,res)=> {   //패스원드 변경 요청 처리 메소드 -민호
    console.log('패스워드 변경 요청 받음');
    let userEmail = req.body.email;
    console.log('전송받을 이메일:'+userEmail);
    res.end();
});

module.exports = router;