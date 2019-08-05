const express = require('express');
const security = require('../utill/security.js')
const router = express.Router();
const saveCharacter = require('./saveNexonInfo.js')

// 이메일 인증을 한 user가 db에 저장된 user인지 확인함_ 다래
router.get('/:encrypt_data01/:encrypt_data02/:salt', async (req, res)=> {

    let salt = req.params.salt;
    let data01 = req.params.encrypt_data01;
    let data02 = req.params.encrypt_data02;
    let encrypt = data01 + '/' + data02;
    let user_data = await api.getrow('Users_TB', 'salt', salt);
    let decrypt = await security.DeCipher(encrypt, salt);
    let nexon_data = await api.getrow('NexonInfo_TB', 'idx_user', user_data['idx_user']);
    let nexon_email = nexon_data['email_nexon'];




    




    // db에 저장되어 있으면 nexon 캐릭터 db에 저장하고, 로그인 페이지로 이동, 
    // db에 저장되어 있지 않으면 message 보여줌
    if(decrypt == user_data['email_user']){
        await saveCharacter(nexon_email);
        res.redirect(`http://${ipaddress}:3000/login`);
    } else {
        res.json({'message':'Nexon user가 아닙니다.'});
    }    
})

module.exports= router;