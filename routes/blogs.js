

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('blogs', {
        title:'Thunder_Blogs', 
        blog_title:"Fox News announces participants in first 2016 GOP debate",
        blog_postdate: 'Aug-10-2015'
    });
});

module.exports = router;