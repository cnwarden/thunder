

var http = require('http');
var app = require('../app');
var debug = require('debug')('thunder::server');

var port = 80;
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);

function onError(error){
	//do nothing
}