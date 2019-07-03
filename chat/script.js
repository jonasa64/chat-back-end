
    var socket = io.connect("http://127.0.0.1:4020");
    var d = Date(Date.now());
    if (socket !== undefined) {
  console.log('Connected to socket...');
    
socket.on('connect', function () {
console.log('connect to socket');

    });

    socket.on('output', (data) =>{
      console.log(data);
      console.log("Helo from output");
      if (data.length) {
          for (var x = 0; x < data.length; x++) {

        console.log(data[x]);
          
           }
        }
      
  });

    }

    document.getElementById('textarea').addEventListener("keydown", function (event) {
    if (event.which === 13 && event.shiftKey == false) {
      // Emit to server input
      socket.emit("input", {
        name: username.value,
        messages : textarea.value,
        date: d.toString(),
        role : 'restaurant'
      });


      textarea.value = "";
      event.preventDefault();
    }
  })