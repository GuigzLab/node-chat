const express = require("express")
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(express.static("public"))

let users = {}

io.on('connection', function (socket) {
     socket.on('disconnect', function () {
          socket.broadcast.emit('chat message', `${users[socket.id]} disconnected`)
     })
     socket.on('chat message', function (msg) {
          socket.broadcast.emit('chat message', msg)
     });
     socket.on('new user', function (data) {
          let userName = data.userName;
          users["" + socket.id] = userName;
          socket.broadcast.emit('chat message', `${users[socket.id]} connected`)
     })


})

server.listen(3000, function () {
     console.log('Listening on 127.0.0.1:3000')
});