const express = require("express")
const app = express()
const PORT = 3000
// const server = require('http').createServer(app)
const server = app.listen(PORT, () => {
     console.log(`Listening on localhost:${PORT}`)
})
// const io = require('socket.io')(server)
const io = require('socket.io').listen(server)

app.use('/chat',express.static("public"))

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