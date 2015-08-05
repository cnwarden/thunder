

var express = require('express');
var router = express.Router();
var inst = require('../db/mongo')

router.get('/', function(req, res, next) {
    inst.find({}, function(err, docs){
        res.render('hdata', {title:'Thunder', instruments: docs});
    });
});

module.exports = router;