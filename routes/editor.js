

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('editor', {
        title:'Thunder_Editor'
    });
});

router.get('/preview', function(req, res, next) {
    res.render('editor', {
        title:'Thunder_Preview'
    });
});

module.exports = router;