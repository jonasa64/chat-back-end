const mongoose = require('mongoose');


//create Schema and Model

const ChatSchema = new mongoose.Schema({
    name: {
        type:String,
        minlength : 3,
        required : [true, "Why on username"]
    } ,
    message:{
        type : String,
        minlength : 3,
        required : [true, "Why no message"]
    },
    date : { type : Date, default: Date.now },
    role:  {type : String, default: "restaurant"}

});

const chatRh = mongoose.model('chatRh', ChatSchema);

module.exports = chatRh;