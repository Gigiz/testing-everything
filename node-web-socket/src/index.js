const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const webSocket = socketIO(server);

webSocket.on('connection', socket => {
  console.log('New Connection');
});

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

server.listen(port);
