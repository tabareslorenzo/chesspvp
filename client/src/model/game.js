import generateBoard from './generatorBoard.js';
import Piece from './pieces/piece.js';
import Direction from './direction.js';
export default class Game
{
      constructor(board = this.newBoard().init(), selectedpos = [-1,-1], yourTurn = true)
      {
            // console.log(board);
            // console.log(selectedpos);
            this.board = board;
            this.yourTurn = yourTurn;
            this.selectedpos = selectedpos;
            // console.log(this.selectedpos);
            // console.log(selectedpos);
            this.highPos = this.valid_moves(selectedpos);
            this.saveState = '';
            this.nextsSelected = '';
            // console.log(board);
            // console.log(this.highPos);
      }
      newBoard()
      {
            return new generateBoard(8,8);
      }

      valid_pos(pos, newpos, blocking)
      {
            var DirectionHandler = new Direction;
            // if(this.board[pos[0]][pos[1]].id == "1,0")
            // {
            //       if(newpos[0] == 0 && newpos[1] == 1){
            //             console.log(this.board[newpos[0]][newpos[1]]);
            //             console.log(newpos);
            //             console.log(this.board);
            //       }
            //
            // }
            // if(newpos[0] == 0 && newpos[1] == 1)
            // {
            //       if(pos[0] == 1 && pos[1] == 0)
            //       {
            //             console.log(this.board);
            //             console.log(this.board[newpos[0]][newpos[1]]);
            //             console.log(this.board[pos[0]][pos[1]]);
            //       }
            // }
            //gets direction
            const dir = DirectionHandler.whatDirection(pos, newpos);
            if(pos[0] == newpos[0] && pos[1] == newpos[1])
            {
                  return false;
            }

            this.board[newpos[0]][newpos[1]] = this.fix(this.board[newpos[0]][newpos[1]]);
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

                        // console.log(notBlocked + 0 + 0);
                        notBlocked = true;
                  }
            }
            if(this.board[pos[0]][pos[1]] == {})
            {
                  // console.log("invalid position");
                  return false;
            }
            else if(this.board[newpos[0]][newpos[1]] instanceof Piece)
            {
                  if(dir == -1)
                  {
                        // console.log("dir error");
                  }
                  else
                  {
                        if(notBlocked)
                        {
                              blocking[dir] = diff;
                        }
                  }
                  // console.log();
                  if(this.board[pos[0]][pos[1]].getColor() === this.board[newpos[0]][newpos[1]].getColor())
                  {
                        // if(pos[0] == 0 && pos[1] == 1)
                        // {
                        //       console.log(newpos);
                        //       console.log(this.board[pos[0]][pos[1]].getColor());
                        //       console.log(this.board[newpos[0]][newpos[1]].getColor());
                        // }

                        // console.log("piece of same color");
                        // console.log(diff);
                        // console.log("piece of same color");
                        // console.log(newpos[0] + newpos[1]);
                        return false;
                  }

            }
            else{
                  if(this.board[pos[0]][pos[1]].getColor()=='b')
                  {
                        // console.log(newpos);
                        // console.log(this.board[newpos[0]][newpos[1]]);
                        if (this.board[newpos[0]][newpos[1]].color=='b') {
                              console.log(this.board[newpos[0]][newpos[1]]);
                        }


                  }
                  else if(this.board[pos[0]][pos[1]].color=='b'){
                        if (this.board[newpos[0]][newpos[1]].color=='b' ) {
                              console.log(this.board[newpos[0]][newpos[1]]);
                        }
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
            //for king and pawn
            var notOne = true;
            if(Math.abs(diff[0]) == 1 || Math.abs(diff[1]) == 1)
            {
                  if(pos[0]==1 && pos[3]==1)
                  {
                        console.log(diff);
                  }
                  // console.log(diff);
                  notOne = false;
            }
            if(this.board[pos[0]][pos[1]].isValidmove(pos[0], pos[1], newpos[0], newpos[1], notBlocked, notOne))
            {
                  return true;
            }
            return false;




      }
      fix(p)
      {
            const brd = new generateBoard();
            p = brd.piece(p);
            return p;
      }
      // pos = x and y position
      valid_moves(pos, obj = {})
      {

            var blocking = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]];
            // console.log(blocking.length);



            //func to with switch statment and (calc) dir

            this.selectedpos = pos;
            var moves = [];
            if(pos[0] < 0 || pos[1] < 0 || pos[0] >= this.board.length || pos[1] >= this.board[0].length)
            {

            }
            else {
                  if(!(this.board[pos[0]][pos[1]] instanceof Piece))
                  {
                        // console.log(this.board);
                        // console.log(this.board[pos[0]][pos[1]]);
                        // if(this.board[pos[0]][pos[1]] != null && this.board[pos[0]][pos[1]] != undefined)
                        // {
                        //       this.board[pos[0]][pos[1]] = this.fix(this.board[pos[0]][pos[1]]);
                        // }
                        //
                        // console.log(this.board[pos[0]][pos[1]]);
                  }

            }



            // console.log(typeof this.board);
            // console.log(this.board);
            //
            // console.log(pos);
            // console.log(this.board);
            for(var i in this.board)
            {
                  for(var j in this.board[i])
                  {

                        if(pos[0] < 0 || pos[1] < 0 || pos[0] >= this.board.length || pos[1] >= this.board[0].length)
                        {

                        }
                        else if(pos[0] == i && pos[1] == j)
                        {
                              // console.log();
                              // console.log("Come on!!!!!");
                        }
                        else if (obj instanceof Piece)
                        {
                              this.board[pos[0]][pos[1]] = obj;
                              // console.log(obj);
                              this.valid_pos(pos, [i,j], blocking);
                              // console.log('ejkrwejrkwejrlkwje');

                        }
                        else if(!(this.board[pos[0]][pos[1]] instanceof Piece))
                        {
                              // console.log(obj);


                              // if(this.board[pos[0]][pos[1]] != {})
                              // {
                              //
                              //       // this.board[pos[0]][pos[1]] = new Piece(this.board[pos[0]][pos[1]]);
                                    // console.log(this.board[pos[0]][pos[1]]);
                              // }
                              // else
                              // {
                              //       return moves;
                              // }
                              return moves;

                              // console.log("ops");

                        }
                        else
                        {
                              // console.log(this.board[pos[0]][pos[1]]);
                              // console.log(i);
                              // console.log(j);
                              this.valid_pos(pos, [i,j], blocking);

                        }
                  }
            }

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
            // console.log(this.highPos);
            this.highPos = moves;
            // console.log(moves);
            return moves;


      }
      getObject(element, x, y)
      {
            var obj;
            // console.log(this.highPos[x][y]);
            // console.log(element);
            // console.log(element.prototype);
            if(element instanceof Piece)
            {
                  // console.log(element);
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

      makeMove(x,y, pos = false)
      {
            var x0 = this.selectedpos[0];
            var y0 = this.selectedpos[1];
            if(pos)
            {
                  var x0 = this.selectedpos[0];
                  var y0 = this.selectedpos[1];
            }
            // console.log(this.selectedpos);

            // console.log(x);
            // console.log(y);
            // console.log(this.selectedpos);
            //
            // console.log(this.board[x0][y0]);
            // console.log(this.board[x][y]);
            // var store = [];
            //
            // store.push({
            //       pos:[x0,y0],
            //       obj: this.board[x0][y0]
            // });
            // // console.log(this.board);
            //
            // // console.log('jhjhjk');
            var obj1;
            // //typeof myVar !== 'undefined'
            if(typeof this.board[x][y] !== 'undefined')
            {
                  obj1 = this.board[x][y];
            }
            else {
                  obj1 = {};
            }
            //
            // store.push({
            //       pos:[x,y],
            //       obj: obj1
            // });
            // this.prevMove = store;
            // console.log(this.prevMove);
            // console.log(this.board);
            // console.log(this.board[x][y]);
            // console.log(x0);
            // console.log(y0);
            // console.log(this.board[x0][y0]);
            this.board[x][y] = obj1;

            this.board[x][y] = this.board[x0][y0];

            this.board[x0][y0] = {};
            this.endTurn();

      }
      endTurn()
      {
            this.valid_moves([-1,-1]);
      }
      stateToBoard(board)
      {
            // p.type rook(p.color, 'rook', p.id)
            var brd = [];
            var reverse = [];
            for(var x = board.length-1; x >= 0; x--)
            {
                  brd.push([]);
                  for(var y = board[x].length -1; y >= 0; y--)
                  {
                        var p = {};
                        // console.log(board[x][y].url.length);
                        if(board[x][y].url.length>6)
                        {
                              p.color = 'b';
                              if(board[x][y].url[0] == 'b')
                              {
                                    p.color = 'w';
                              }
                              // p.color = board[x][y].url[0];
                              p.type = board[x][y].url.substring(2, board[x][y].url.length - 4);
                              p.id = x.toString() + ',' + y.toString();
                              // console.log(p.type);
                              // console.log(this.fix(p));


                        }

                        brd[board.length-1-x].push(this.fix(p));
                  }
            }
            // for(var i = brd.length -1; i >= 0; i--)
            // {
            //       for(var j = brd[i].length-1; j >= 0; j--)
            //       {
            //
            //       }
            // }
            console.log(brd);
            // console.log(this.board);
            this.board = brd;
            return this.board;

      }
      fixboard(board)
      {
            const brd = new generateBoard();
            return brd.gen(board);
      }
      getState()
      {
            // this.board[][].prototype instanceof Piece)
            // console.log(this.board);

            // console.log(this.board);
            this.board = this.fixboard(this.board);
            // console.log(this.board);

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
            console.log(isfull);
            return isfull;

      }
      getPiecesPositions()
      {
            var blackPieces = new Map();
            var whitePieces = new Map();
            // console.log("wehjrjkwerj");
            // console.log(this.board);

            for(var i = 0; i < this.board.length; i++)
            {
                  // console.log("outer");
                  for(var j = 0; j < this.board[i].length; j++)
                  {
                        // console.log("inner");
                        if(this.board[i][j] instanceof Piece)
                        {
                              // console.log(this.board[i][j]);
                              // console.log(this.board[i][j].getID());
                              // console.log([i,j].toString());
                              this.board[i][j].prototype = Piece;
                              if(this.board[i][j].getColor()=='b')
                              {
                                    blackPieces.set(JSON.stringify([i,j]), this.board[i][j]);
                              }
                              else
                              {
                                    whitePieces.set(JSON.stringify([i,j]), this.board[i][j]);
                              }
                        }
                  }

            }

            return {blackPieces, whitePieces};
      }
      getBoard()
      {
            return this.board;
      }
      save()
      {
            this.saveState = JSON.stringify(this.board);

      }
      load(sel)
      {

            this.board = JSON.parse(this.saveState);
            // console.log(this.board);
            this.setSelected(sel);
             this.valid_moves(this.selectedpos);
      }
      setSelected(sel)
      {
            // console.log(sel);
            this.selectedpos = sel;
      }


}
