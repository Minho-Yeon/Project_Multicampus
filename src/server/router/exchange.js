const express = require('express');
const router = express.Router();

router.post('/exchange',(req,res)=>{
    console.log('/exchange요청 받음');
});

module.exports= router;