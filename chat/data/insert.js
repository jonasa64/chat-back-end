const chatRh = require('../mongdb/chatMongoose');
const connection = require('../mongdb/connection');


module.exports = insertMessage = (data) => {
  

    if(data.name === "" || data.message === ""){
            console.log("messages or user name is empty");
    } else {
        connection.then((db => {
            const chat = new chatRh({
                name:data.name,
                message: data.message,
                date : Date.now().toString(),
            })
            
            chat.save();
        }))
            
    }



}