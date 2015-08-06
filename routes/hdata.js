

var express = require('express');
var router = express.Router();
// var inst = require('../db/mongo')

router.get('/', function(req, res, next) {
    res.render('hdata', {title:'Thunder'});
});

module.exports = router;