const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const rootDir = require('../Util/path');

const products = [];

router.get('/add-product',(req, res, next)=>{
    // res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('add-product',{pageTitle: 'Add A', path: '/admin/add-product'});
});

router.post('/add-product',(req,res,next)=>{
    // console.log(req.body);
    // fs.writeFileSync('message.txt',req.body.title);
    products.push({title: req.body.title});
    res.redirect('/');
    // res.redirect('/', 302, {pageTitle: 'Shop', path: '/'});
})

exports.routes = router;
exports.products = products;