
var sqlite3 = require('sqlite3').verbose();

var database = new sqlite3.Database("db\\sample.sqlite3");

exports.read = function(){
  // TODO
  // database.all("SELECT * FROM message", function(err, rows){
  ddatabaseb.each('SELECT * FROM message', [n], function(err, row) {
    if (!err) {
      console.log(row);
      // return row;
    };
  });
}

exports.write = function(msg){
  // TODO
  // console.log('PATH TEST: Message->' msg);
  // var stmt = db.prepare("INSERT INTO comments (user_name, comment, create_time) VALUES ( ?, ?, ?)");
  // stmt.run(userName, data.value, dateformat(now, "yyyy-mm-dd HH:MM:ss") );
  var stmt = database.prepare("INSERT INTO message (content) VALUES (?)");
  stmt.run(msg);
  stmt.finalize();
}

exports.clean = function(){
  // TODO
}
