import generateBoard from './generatorBoard.js';
import Piece from './pieces/piece.js';
export default class Game
{
      constructor(board = this.newBoard().init(), selectedpos = [-1,-1], yourTurn = true)
      {
            this.board = board;
            this.yourTurn = yourTurn;
            this.selectedpos = selectedpos;
            this.highPos = this.valid_moves(selectedpos);
            console.log(this.highPos);
      }
      newBoard()
      {
            return new generateBoard(8,8);
      }
      // const dir = {
      //     UP: "0,1",
      //     DOWN: "0,-1",
      //     LEFT: "-1,0",
      //     RIGHT: "1,0",
      //     UPRIGHT: "1,1",
      //     UPLEFT: "-1,1",
      //     DOWNRIGHT: "1,-1",
      //     DOWNLEFT: "-1,-1",
      // }
      defineDir()
      {
            const dir = {
                UP: "0,1",
                DOWN: "0,-1",
                LEFT: "-1,0",
                RIGHT: "1,0",
                UPRIGHT: "1,1",
                UPLEFT: "-1,1",
                DOWNRIGHT: "1,-1",
                DOWNLEFT: "-1,-1",
            }
            return dir;
      }
      whatDirection(diff)
      {
            var dir;
            const D = this.defineDir();
            console.log(diff);
            console.log(D.UP);
            console.log("hewjrkhwejkrhjwekr");
            console.log("hewjrkhwejkrhjwekr");
            console.log("hewjrkhwejkrhjwekr");
            console.log("hewjrkhwejkrhjwekr");
            console.log("hewjrkhwejkrhjwekr");
            //
            switch(diff)
            {
                  case D.UP:
                        dir = 0;
                        break;
                  case D.DOWN:
                        dir = 1;
                        break;
                  case D.LEFT:
                        dir = 2;
                        break;
                  case D.RIGHT:
                        dir = 3;
                        break;
                  case D.UPRIGHT:
                        dir = 4;
                        break;
                  case D.UPLEFT:
                        dir = 5;
                        break;
                  case D.DOWNRIGHT:
                        dir = 6;
                        break;
                  case D.DOWNLEFT:
                        dir = 7;
                        break;
                  default:
                        dir = -1;
                        break;
            }
            return dir;

      }
      valid_pos(pos, newpos, blocking)
      {
            // console.log(newpos);
            //fix this div by itself
            var diff = [(newpos[0]-pos[0]), (newpos[1]-pos[1])];
            if(diff[0] == 0 && diff[1] == 0)
            {
                  return false;
            }
            if(diff[0]!=0)
            {
                  diff[0] = diff[0]/Math.abs(diff[0]);
            }
            if(diff[1]!=0)
            {
                  diff[1] = diff[1]/Math.abs(diff[1]);
            }

            // console.log(pos + newpos);
            // console.log(diff);
            diff = diff[0].toString() + ',' + diff[1].toString();
            // console.log(diff);


            const dir = this.whatDirection(diff);
            if(this.board[pos[0]][pos[1]] == {})
            {
                  console.log("invalid position");
                  return false;
            }
            else if(this.board[newpos[0]][newpos[1]] instanceof Piece)
            {

                  if(dir == -1)
                  {
                        console.log("dir error");
                        return false;
                  }
                  else
                  {
                        console.log("phewkjefkjwerkljwerkljweklrjlwek");
                        blocking[dir] = false;;
                  }

                  //console.log(this.board[newpos[0]][newpos[1]]);
                  if(this.board[pos[0]][pos[1]].getColor() == this.board[newpos[0]][newpos[1]].getColor())
                  {
                        console.log("piece of same color");
                        console.log(newpos[0] + newpos[1]);
                        return false;
                  }
                  console.log(blocking[dir]);
            }
            if( this.board[pos[0]][pos[1]].isValidmove(pos[0], pos[1], newpos[0], newpos[1], blocking[dir]))
            {
                  return true;
            }
            return false;




      }
      // pos = x and y position
      valid_moves(pos)
      {

            var blocking = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]];
            console.log(blocking.length);

            //func to with switch statment and (calc) dir

            this.selectedpos = pos;
            var moves = [];

            console.log(typeof this.board);
            console.log(this.board);
            for(var i in this.board)
            {
                  // console.log(this.board[i]);
                  moves.push([]);
                  for(var j in this.board[i])
                  {
                        if(pos[0] < 0 || pos[1] < 0 || pos[0] >= this.board || pos[1] >= this.board[0])
                        {
                              moves[i].push(false);
                        }
                        else if(this.valid_pos(pos, [i,j], blocking))
                        {
                              moves[i].push(true);
                        }
                        else
                        {
                              moves[i].push(false);
                        }
                  }

            }
            console.log(this.highPos);
            this.highPos = moves;
            return moves;


      }
      getObject(element, x, y)
      {
            var obj;
            console.log(this.highPos[x][y]);
            if(element instanceof Piece)
            {
                  obj = {
                        url: element.getUrl(),
                        changeBackground: this.highPos[x][y],
                        full: true,
                        playable: this.yourTurn,
                  };
            }
            else
            {
                  obj = {
                        url: '',
                        changeBackground: this.highPos[x][y],
                        full: false,
                        playable: false,
                  };
            }
            return obj;
            // console.log(obj);

      }
      makeMove(x,y)
      {
            console.log(this.selectedpos);
            const x0 = this.selectedpos[0];
            const y0 = this.selectedpos[1];
            console.log(x);
            console.log(y);
            console.log(this.selectedpos);

            console.log(this.board[x0][y0]);
            console.log(this.board[x][y]);
            this.board[x][y] = this.board[x0][y0];

            this.board[x0][y0] = {};
            this.valid_moves([-1,-1]);
      }
      getState()
      {
            // this.board[][].prototype instanceof Piece)
            var isfull = [];
            for(var i in this.board)
            {
                  // console.log(this.board[i]);
                  isfull.push([])
                  for(var j in this.board[i])
                  {
                        // console.log(this.board[i][j] instanceof Piece);
                        // console.log(this.board[i][j].prototype.isPrototypeOf(Piece));
                        // console.log(typeof this.board[i][j]);

                        isfull[i].push(this.getObject(this.board[i][j], i, j));


                        // if(this.board[i][j] instanceof Piece)
                        // {
                        //       console.log("good");
                        //       isfull[i].push(this.getObject(true));
                        // }
                        // else
                        // {
                        //       isfull[i].push(this.getObject(false));
                        // }
                  }

            }
            // console.log(isfull);
            return isfull;

      }

}
