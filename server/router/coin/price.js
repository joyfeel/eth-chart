const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{

    return res.status(200).send({price:"123",usd:"4456"}); 
});

module.exports = router;