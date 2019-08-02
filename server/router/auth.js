const express = require('express');
const router = express.Router();

router.get('/:encrypt/:salt', async (req, res)=> {
    console.log(req.params.salt)
    console.log(req.params.encrypt)
        
    let salt = req.params.salt

    let user_data = await api.getUsersinfo('salt', salt);
    


    res.redirect('http://localhost:3000/login')
})

module.exports= router;