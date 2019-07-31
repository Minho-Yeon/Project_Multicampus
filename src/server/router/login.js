const express = require('express');
const router = express.Router();

router.post('/login',(req,res)=>{
    console.log('/login요청 받음');
});

module.exports= router;