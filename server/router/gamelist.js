const express = require('express');
const router = express.Router();

router.get('/gamelist',(req,res)=>{
    console.log('/gamelist 요청받음');
});

module.exports= router;