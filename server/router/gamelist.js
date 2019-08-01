const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    console.log('/serer/gamelist 요청받음');
});

module.exports= router;