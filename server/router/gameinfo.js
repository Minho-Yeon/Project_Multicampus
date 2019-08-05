const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    console.log('/server/gameinfo');
    console.log(gamelist);
    res.json({'gamelist':gamelist});
});

module.exports = router;