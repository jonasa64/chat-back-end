const insert = require('./data/insert');
const io = require('socket.io').listen(4020).sockets;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const messagesRoute = require('./routes/messages');
const config = require('./config/config');
const port = process.env.PORT || 5000;
const app = express();
const usersInRoom = [];
const room = 'abc123';
module.exports = io;

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
     
      
    socket.on(config.DISCONNECT, () => {
        console.log("User is disconnected ");
        let index = usersInRoom.includes(socket.id);
        if (index) {
          // remove a user from the array
          usersInRoom.splice(index, 1);
          socket.leave(room);
      } else {
          console.log("Index not found " + index);
      }

    });

    socket.on(config.ROOM, (data) => {
      usersInRoom.push(socket.id);
      socket.join(data.room);
      if(usersInRoom.length <= 2 ){
        console.log("user joined room", data.room)      
      
      } else {
        console.log("To many user in room")
        message = "2 users alowed i room  user in room is " + usersInRoom.length;
        socket.emit("my_error", message);
      }
      
      
    });
socket.on(config.INPUT,(data) =>{
//insert data i db
  insert(data);
})

}).on('error', (error) => {
console.log(error);



});


app.listen(port, () => {
  console.log(`app i listen on ${port}`)
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/messages', messagesRoute );


