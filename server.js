const express = require("express")
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(express.static("public"))

io.on('connection', function (socket) {
     socket.broadcast.emit('chat message', 'New user connected');
     socket.on('disconnect', function () {
          socket.broadcast.emit('chat message', 'User disconnected');
     })
     socket.on('chat message', function (msg) {
          // io.emit('chat message', msg);
          socket.broadcast.emit('chat message', msg);
     });

})

server.listen(3000, function () {
     console.log('Listening on 127.0.0.1:3000')
});