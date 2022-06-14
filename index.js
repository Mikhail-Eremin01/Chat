const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const PORT = 3000;
const io = new Server(server);
const jsonParser = express.json();
// const urlencodedParser = express.urlencoded({extended: false});
const writeNewUser= require('./midlewares/writeNewUser.js');
const signInUser = require('./midlewares/signInUser');
const saveMessage = require('./midlewares/saveMessage.js');
const showMessages = require('./midlewares/showMessages.js');

app.use(express.static(__dirname + '/public'));

app.post('/signUp', jsonParser, writeNewUser);
app.post('/signIn', jsonParser, signInUser);
app.post('/saveMessage', jsonParser, saveMessage);
app.post('/showMessages', jsonParser, showMessages);

//////  Sockets  //////
io.on('connection', (socket) => {
  socket.on('chat message', (data) => {

    io.emit('chat message', {
      message: data.message,
      name: data.name
    })
  })
  console.log('a user connected');
});


server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});