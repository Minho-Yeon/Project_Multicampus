const express = require('express');
const router = express.Router();


// user_idx를 받아 user가 가진 character 반환_ 다래
router.post('/', async (req,res)=>{
    console.log('/server/character 요청받음');
    let useremail=req.body.useremail;
    let userinfo=await api.getrow('Users_TB','email_user',useremail);
    // let user = req.body.user // user 정보 ********** 확인필요
    let user_info = await api.getrow_list('Characters_TB', 'idx_user', userinfo.idx_user);
    res.json({characterinfo:user_info});
});



module.exports= router;