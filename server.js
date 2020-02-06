const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
     console.log(`Listening on localhost:${PORT}`)
})
const io = require('socket.io').listen(server)

app.use('/', express.static("public"))

let users = []

io.on('connection', function (socket) {
     socket.on('disconnect', function () {
          /**
           * Get the position of the disconnected socket in the @var users list
          */ 
          let userIndex = users.map(item => {
               return item.userId
          }).indexOf(socket.id)
          // Broadcast the message to other sockets
          socket.broadcast.emit('chat message', `${users[userIndex].userName} disconnected`)
          // Remove it from the list
          users.splice(userIndex, 1)

          io.emit('users list', users)
     })
     socket.on('chat message', function (msg) {
          socket.broadcast.emit('chat message', msg)
     });
     socket.on('new user', function (data) {
          /**
           * Create a @var user object then push it to @var users list
           */
          user = {
               userName: data.userName,
               userId: socket.id
          }
          users.push(user)

          // Broadcast the message to other sockets
          socket.broadcast.emit('chat message', `${user.userName} connected`)

          io.emit('users list', users)
     })
})