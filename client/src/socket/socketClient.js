import io from 'socket.io-client';
let socket = io('http://localhost:3001');


export default class SocketClient
{

      constructor()
      {
            socket.on('send player', function (data)
            {
                  // console.log('jwkejrrwkle');
                  localStorage.setItem('room', data.room);
                  localStorage.setItem('player', data.p);
                  localStorage.setItem('isTurn', data.turn);
            });
      }
      getSocket()
      {
            return socket;
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
