var app  = require('express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);
var redis = require('./redis-adapter.js');
io.adapter(redis({ host: 'redis', port: 6379 }));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  io.emit('sample', {"hey": "there"});
  socket.on('sample', function(data) {
  	socket.broadcast.emit('sample', data);
  });
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});
