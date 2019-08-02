const express = require('express');
const router = express.Router();



// *********** npm install nodemailer필요해요.
router.post('/',(req,res)=> {
    console.log('넥슨코드 체크 요청받음');
    res.json({success:true});
});


module.exports = router;