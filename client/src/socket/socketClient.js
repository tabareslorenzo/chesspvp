import io from 'socket.io-client';
var socket;


export default class SocketClient
{

      constructor()
      {
            socket = io('http://localhost:3001')
            socket.on('send player', function (data)
            {
                  localStorage.setItem('room', data.room);
                  localStorage.setItem('player', data.p);
                  localStorage.setItem('isTurn', data.turn);
                  console.log('jwkejrrwkle');

            });
      }

      getSocket()
      {
            return socket;
      }
      disconnect()
      {
            localStorage.removeItem('room');
            localStorage.removeItem('player');
            localStorage.removeItem('isTurn');
            //delete room in server
            //socket.emit('my other event', { my: localStorage.getItem('room'), board: JSON.stringify(board), g: player});
            socket.close();
      }

      isConnected()
      {
            socket.on('disconnect', function(){
                  localStorage.removeItem('room');
                  localStorage.removeItem('player');
                  localStorage.removeItem('isTurn');
                  // return false;
            });

            // return true;
      }
      receive()
      {
            socket.on('peer', function(data)
            {
                  console.log("peertopeer");
                  // console.log(data);
                  console.log(data);
                  localStorage.setItem('board', JSON.parse(data.board));
                  localStorage.setItem('isTurn', data.turn);
                  // this.props.receive(data.board);

                  // return data.board;
            });
      }

      send(board)
      {
            console.log('sjdfkjdsfjkl');
            var room = localStorage.getItem('room');
            const player = localStorage.getItem('player');
            if(room)
            {
                   socket.emit('my other event', { my: localStorage.getItem('room'), board: JSON.stringify(board), g: player});
            }

      }

}
