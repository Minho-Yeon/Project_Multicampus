const express = require('express');
const router = express.Router();

router.get('/login/:pw/:salt', (req, res)=> {
    console.log(req.params.salt)
    console.log(req.params.pw)
    res.redirect('http://localhost:3000/login')
})

module.exports= router;