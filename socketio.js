/**
 * Socket.IO process of server side.
 */

// 
var db = require('./db');

function socketio(server) {
  io = require('socket.io')(server);

  // When connect to server.
  io.on('connect', function(socket){

    // Read past log.
    socket.on('read', function(){
      console.log('PATH TEST: Read.');
      db.read();
      // io.emit('update', row);
    });

    // When a message is receoved.
    socket.on('message', function(msg){
      db.write(msg);
      io.emit('update', msg); 
    });
  });
}

module.exports = socketio;
