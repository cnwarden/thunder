

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

var db = mongoose.connection;

db.once('open', function(cb){
    console.log("connected db");
});

require("./tickdata")();

var Inst = mongoose.model('tickdata');

module.exports = Inst;
