const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.Promise = Promise;

const connect = mongoose.connect(config.DBURL,{ useNewUrlParser: true });


mongoose.connection.once('open', function(){
    console.log("Connecetion has been made");
}).on("error", function(error) {
console.log("connectionerror" + error);
}
)


module.exports = connect;