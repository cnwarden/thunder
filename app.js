

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var route_index = require('./routes/index');
var route_hdata = require('./routes/hdata');
var route_blog = require('./routes/blog');
var route_editor = require('./routes/editor');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/', route_index);
app.use('/hdata',   route_hdata);
app.use('/blog',    route_blog);
app.use('/editor',  route_editor);

app.get('*', function(req, res, next) {
    res.render('404', {title:'Thunder'});
});

module.exports = app;