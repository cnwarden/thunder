

var mongoose = require("mongoose");

module.exports = function(){
    var tickDataSchema = mongoose.Schema({
        instrument : String
    });
    mongoose.model('tickdata', tickDataSchema);
};
