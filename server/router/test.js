const express = require('express');
const router  = express.Router();

router('/',(req,res)=>{
    console.log('/server/test요청 받음');
});
module.exports = router;