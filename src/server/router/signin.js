const express = require('express');
const router = express.Router();

router.post('/signin',(req,res)=>{
    console.log('/signin요청 받음');
});

module.exports= router;