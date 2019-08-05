const express = require('express');
const router = express.Router();
const api = require('../method/api.js')
const save = require('../method/save.js')

// 거래요청시 character 테이블과  users 테이블 money update_ 다래(미완성)
router.get('/',async (req,res)=>{
    console.log('/server/exchange요청 받음');

    let user = req.body.user // user 정보 ********** 확인필요
    let user_idx = 2 
    let character_idx = 19   
    let game_idx = 1
    let want_change_money = 1000 




    


    // 거래내용을 보고 추가합시다. react에서 체크 값이 어떻게 들어오는지 확인 후 다시 시작하자. 
    let character = await api.getrow('Characters_TB', 'idx_character', character_idx);
    let character_money = character['money_character']




    let character_change_money = 100
    let user_change_money = 200

    let character_value = [{'name':'money_character', 'value': character_change_money}];  
    let user_value = [{'name':'money_character', 'value': user_change_money}]

    await save.updatedb('Characters_TB', character_value,'idx_character',character_idx);
    await save.updatedb('Users_TB', user_value, 'idx_user', user_idx);



});

module.exports= router;