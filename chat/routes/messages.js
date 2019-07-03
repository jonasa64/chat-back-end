const express = require('express');
const router = express.Router();
const connection = require('../mongdb/connection');
const chatRh = require('../mongdb/chatMongoose');

router.get('/:name', (req, res) => {
    connection.then((db => {
      //find the data 
    chatRh.find({name : req.params.name}).then(chat => {
   
      console.log(chat);
      //data to show for user in room   
     res.status(200).json(chat)
   
     res.end()
    }).catch(err => {
       console.log(err);
      sendStatus(500);
    })
  
   }))
  })


module.exports = router;
