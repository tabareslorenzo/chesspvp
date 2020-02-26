const Macthmaking = require('./matchmaking.js');
var matchhandler = new Macthmaking();
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


server.listen(3001);
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
  // res.sendFile('../' + __dirname + 'client/src/App.js');
});

deleteRooms = (socket, room = socket.id) =>
{
      socket.leave(room);
}

/*



*/
io.on('connection', function (socket) {
// console.log((matchhandler.addplayer(socket)));
      var sockets = matchhandler.addplayer(socket);
      // socket.emit('news', { hello: 'world' });
      // console.log(socket);
      // console.log(sockets);
      if(sockets != null)
      {
           // io.to(res[0]).emit('some event');
           // console.log(typeof sockets[1]);
           // console.log( sockets[1].id);
           // console.log( sockets[2].id);
           sockets[1].join(sockets[0]);
           sockets[2].join(sockets[0]);
           deleteRooms(sockets[1]);
           deleteRooms(sockets[2]);
           //send to player 1 and player 2
           // io.to(sockets[1].id).emit('send player', {p: 'player1', board: sockets[0], turn: true});
           // io.to(sockets[2].id).emit('send player', {p: 'player2', board: sockets[0], turn: false});
           // console.log(io);
            sockets[1].emit('send player', {p: 'player1', room: sockets[0], turn: true});
            sockets[2].emit('send player', {p: 'player2', room: sockets[0], turn: false});

           // io.clients[sockets[1]].send(true);
           // io.clients[sockets[2]].send(false);
           // io.to(sockets[0]).emit('some event', { hello: sockets[0] });

      }
      // console.log(socket);

  socket.on('my other event', function (data) {
    // console.log(data.my);
    // console.log('jkj');
    //io.sockets.clients(nick.room);
    // console.log(io.clients(data.my));
    // console.log('wjrewewklrjklwer');
    console.log(io.sockets.adapter.rooms);
    // console.log(data.hello);
    // console.log(data);
    // console.log(data.board);
    socket.broadcast.to(data.my).emit('peer', {board:data.board, turn:true});
    console.log('10001');
    // console.log(io.sockets.clients(data.my));
    // console.log('k');
    // console.log(typeof socket);

    // matchhandler.()

    // console.log(matchhandler.addplayer(socket));
  });

  socket.on('end game', function (data) {

    socket.broadcast.to(data.my).emit('oppenent left');
    console.log('10001');

  });
});
