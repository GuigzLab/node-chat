# node-chat
A simple chat application made from NodeJs and socket.io.
This application is based on the socket.io [introduction guide](https://socket.io/get-started/chat/) but has some additional features such as:

* Sending messages when a user logs in or out.
* The ability to enter a nickname.
* Client-side optimization for displaying your own messages.
* Viewing users who are typing.
* A list of connected people.
* The ability to write private messages with the `/whisper` command.

## To do list
* Broadcast a message to connected users when someone connects or disconnects ✅
* Add support for nicknames.
* Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter. ✅
* Add “{user} is typing” functionality.
* Show who’s online.
* Add private messaging.