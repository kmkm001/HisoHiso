/**
 * Chat (Socket.IO) process of client side.
 */

// TODO: Manage user name.

var socket = io();

$('form').submit(function(){
  var msg = $('#msg_box').val();
  if(msg != ""){
    socket.emit('message', msg);
    $('#msg_box').val('');
  }
  return false;
});

socket.on('update', function(msg){
  console.log(msg);
  // Insert HTML content at the end. (jQuery)
  // $('#messages').append('<li>' + msg + '</li>');
  // Insert HTML content at the beginning. (jQuery)
  $('#messages').prepend('<li>' + msg + '</li>');
});

