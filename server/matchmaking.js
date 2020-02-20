var Queue = require('./queue.js');
// import 'Queue' from './queue.js'

module.exports = class Matchmaking
{
      constructor()
      {
            this.rooms = new Queue();
            this.MapofRooms = new Map();
      }
      testing()
      {
            var res = [];
            for(var i = 0; i < 10; i++)
            {
                  res.push(this.addplayer('player' + i));
            }
            return res;

      }
      // maxElement()
      // {
      //       return this.maxkey++;
      // }

      addplayer(player)
      {
            // const key = this.maxElement();

            if(this.rooms.isEmpty())
            {
                  console.log('is empty');
                  this.rooms.push(player);
            }
            else
            {
                  console.log('not empty');
                  const player2 = this.rooms.pop();
                  // console.log(player2.id);
                  // console.log(player.id);
                  const key = player.id + ',' + player2.id;
                  this.MapofRooms.set(key + ',player1', player.id);
                  this.MapofRooms.set(key + ',player2', player2.id);

                  return [key, player, player2];
            }
            return null;

      }
      //when play room
      findroom(playerID)
      {
            return this.MapofRooms.get(playerID);
      }
}
