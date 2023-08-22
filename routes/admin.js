const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const rootDir = require('../Util/path');

const products = [];

router.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/add-product',(req,res,next)=>{
    // console.log(req.body);
    // fs.writeFileSync('message.txt',req.body.title);
    products.push({title: req.body.title});
    res.redirect('/');
})

exports.routes = router;
exports.products = products;