/**
 * Socket.IO process of server side.
 */

function socketio(server) {
  io = require('socket.io')(server);
  io.on('connect', function(socket){
    console.log('new connection!');
    // 
    socket.on('message', function(msg){
      console.log('message: ' + msg);
      io.emit('update', msg); 
    });
  });
}

module.exports = socketio;
