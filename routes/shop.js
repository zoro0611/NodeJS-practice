const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../Util/path');

const adminData = require('./admin');

router.get('/', (req,res,next)=>{
    // res.send('<h1>Hey from Express!</h1>');
    console.log(adminData.products)
    res.sendFile(path.join(rootDir,'views','shop.html'));
})

module.exports = router;