const express = require('express');
const router = express.Router();


// user_idx를 받아 user가 가진 게임 종류 반환 _다래 (미완성)
router.get('/', async (req,res)=>{
    console.log('/sever/character 요청받음');

    // let user = req.body.user // user 정보 ********** 확인필요
    // let user_idx = 2 
    // let user = req.body.user; // user 정보 ********** 확인필요
    // let user_idx = 2;
    
    let user_info = await api.getrow_games(user_idx);
    let games = [];

    

    for ( num in user_info){
        let game = await api.getrow('Games_TB', 'idx_game', user_info[num].idx_game);
        games.push(game);
    }

    let gamelist = {};
    gamelist['games'] = games;

    // return JSON.stringify(gamelist)
    res.json(gamelist);
});


// user_idx를 받아 user가 가진 character 반환_ 다래
router.get('/character', async (req,res)=>{
    console.log('/sever/gamelist/character 요청받음');

    // let user = req.body.user // user 정보 ********** 확인필요
    let user_idx = 2 ;
    let user_info = await api.getrow_list('Characters_TB', 'idx_user', user_idx);
    
    return JSON.stringify(user_info)
});



module.exports= router;