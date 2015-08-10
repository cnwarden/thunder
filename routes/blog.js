

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('blogs', {
        title:'Thunder_Blogs', 
        blog_title:"Fox News announces 习近平改革逻辑解读：重用改革促进派",
        blog_postdate: 'Aug-10-2015'
    });
});

module.exports = router;