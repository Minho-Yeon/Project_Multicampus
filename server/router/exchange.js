const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    console.log('/server/exchange요청 받음');
});

module.exports= router;