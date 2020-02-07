import generateBoard from './generatorBoard.js';
import Piece from './pieces/piece.js';
import Direction from './direction.js';
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

      valid_pos(pos, newpos, blocking)
      {

            var DirectionHandler = new Direction;
            //gets direction
            const dir = DirectionHandler.whatDirection(pos, newpos);
            if(pos[0] == newpos[0] && pos[1] == newpos[1])
            {
                  return false;
            }

            var notBlocked;
            const diff = DirectionHandler.distance(pos,newpos);
            if(dir== -1)
            {

                  notBlocked =  false;
            }
            else
            {
                  var notBlocked = DirectionHandler.blocked_pos(dir, diff[0], diff[1], blocking[dir][0], blocking[dir][1]);
                  if(blocking[dir][0] == 0 && blocking[dir][1] == 0)
                  {

                        console.log(notBlocked + 0 + 0);
                        notBlocked = true;
                  }
            }
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
                  }
                  else
                  {
                        if(notBlocked)
                        {
                              blocking[dir] = diff;
                        }
                  }

                  if(this.board[pos[0]][pos[1]].getColor() == this.board[newpos[0]][newpos[1]].getColor())
                  {
                        console.log("piece of same color");
                        console.log(diff);
                        console.log("piece of same color");
                        // console.log(newpos[0] + newpos[1]);
                        return false;
                  }
            }
            //for knight moves which blocking isnt relavent
            if( this.board[pos[0]][pos[1]].isValidmove(pos[0], pos[1], newpos[0], newpos[1]))
            {
                  return true;
            }
            if( this.board[pos[0]][pos[1]].isValidmove(pos[0], pos[1], newpos[0], newpos[1], notBlocked))
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
            //
            for(var i in this.board)
            {
                  for(var j in this.board[i])
                  {

                        if(pos[0] < 0 || pos[1] < 0 || pos[0] >= this.board.length || pos[1] >= this.board[0].length)
                        {

                        }
                        else if(pos[0] == i && pos[1] ==j)
                        {
                              console.log("Come on!!!!!");
                        }
                        else
                        {
                              console.log(i);
                              console.log(j);
                              this.valid_pos(pos, [i,j], blocking);

                        }
                  }
            }
            for(var i in blocking)
            {
                  console.log(blocking[i]);
            }
            // console.log("wkehjjkwherjkherkjhewrjkhwejkwehrjkewr");
            // console.log("wkehjjkwherjkherkjhewrjkhwejkwehrjkewr");
            // console.log("wkehjjkwherjkherkjhewrjkhwejkwehrjkewr");
            // console.log("wkehjjkwherjkherkjhewrjkhwejkwehrjkewr");
            // console.log("wkehjjkwherjkherkjhewrjkhwejkwehrjkewr");
            // console.log("wkehjjkwherjkherkjhewrjkhwejkwehrjkewr");
            // console.log("wkehjjkwherjkherkjhewrjkhwejkwehrjkewr");
            // console.log("wkehjjkwherjkherkjhewrjkhwejkwehrjkewr");
            // console.log("wkehjjkwherjkherkjhewrjkhwejkwehrjkewr");
            // console.log("wkehjjkwherjkherkjhewrjkhwejkwehrjkewr");
            // console.log("wkehjjkwherjkherkjhewrjkhwejkwehrjkewr");
            // console.log("wkehjjkwherjkherkjhewrjkhwejkwehrjkewr");
            // console.log("wkehjjkwherjkherkjhewrjkhwejkwehrjkewr");
            // console.log("wkehjjkwherjkherkjhewrjkhwejkwehrjkewr");
            // console.log("wkehjjkwherjkherkjhewrjkhwejkwehrjkewr");
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
