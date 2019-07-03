const  chatRh = require('../mongdb/chatMongoose');
const showOutput = require('../functions/helpers')
const connection = require('../mongdb/connection');


module.exports = findMessages = () => {
  connection.then((db => {
   chatRh.find().then(chat => {
      console.log(JSON.stringify(chat))
      showOutput(chat)
   }).catch(err => {
      console.log(err);
   })

  }))
  
  
}




 module.exports = findeOneMessages =  (name) => {
 chatRh.findOne({name:name} , (result, error) => {
     if(error) throw error;
     console.log(result)
  })
 }
