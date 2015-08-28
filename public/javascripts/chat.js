/**
 * Chat (Socket.IO) process of client side.
 */

// TODO: Manage user name.

var socket = io();

// Init (When connet).
$(document).ready( function(){
  // ページ読み込み時に実行したい処理
  socket.emit('read');
});

// Send message (When press the [Send] button).
$('form').submit(function(){
  var msg = $('#msg_box').val();
  if(msg != ""){
    socket.emit('message', msg);
    $('#msg_box').val('');
  }
  return false;
});

// Update.
socket.on('update', function(msg){
  console.log('MESSAGE:' + msg);
  // Insert HTML content at the end. (jQuery)
  // $('#messages').append('<li>' + msg + '</li>');
  // Insert HTML content at the beginning. (jQuery)
  $('#messages').prepend('<li>' + msg + '</li>');
});
