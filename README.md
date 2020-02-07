# NodeJs Chat App using web sockets
A simple chat application made from NodeJs and socket.io.
This application is based on the socket.io [introduction guide](https://socket.io/get-started/chat/) but has some additional features such as:

* Sending messages when a user logs in or out.
* The ability to enter a nickname.
* Client-side optimization for displaying your own messages.
* Viewing users who are typing.
* A list of connected people.
* The ability to write private messages with the `/whisper` command.
* The possibility to retrieve your previous messages with arrow keys.

`node server.js` to run once downloaded - or you can visit [this online version](http://chat.guillaumedufau.fr)

## To do list
- [x] Broadcast a message to connected users when someone connects or disconnects.
- [ ] Add support for nicknames.
- [x] Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
- [ ] Add “{user} is typing” functionality.
- [x] Show who’s online.
- [ ] Add private messaging.
- [ ] Add a message history with arrow keys.