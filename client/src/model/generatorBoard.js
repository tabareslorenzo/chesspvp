import bishop from './pieces/bishop.js';
import king from './pieces/king.js';
import knight from './pieces/knight.js';
import pawn from './pieces/pawn.js';
import queen from './pieces/queen.js';
import rook from './pieces/rook.js';
import Piece from './pieces/piece.js';


export default class generateBoard
{

      constructor(rows, cols)
      {
            this.rows = rows;
            this.cols = cols;
      }
      piece(p)
      {
            var obj;
            obj = {};
            // console.log(p);
            // console.log(p);
            // if(p == null || p== undefined)
            // {
            //       return p;
            // }

            // console.log(p);
            switch(p.type)
            {
                  case 'rook':
                        obj = new rook(p.color, 'rook', p.id);
                        break;
                  case 'knight':
                        obj = new knight(p.color, 'knight', p.id);
                        break;
                  case 'bishop':
                        obj = new bishop(p.color, 'bishop', p.id);
                        break;
                  case 'king':
                        obj = new king(p.color, 'king', p.id);
                        break;
                  case 'queen':
                        obj = new queen(p.color, 'queen', p.id);
                        break;
                  case 'pawn':
                        obj = new pawn(p.color, 'pawn', p.id);
                        break;
            }
            // obj.prototype = Piece;
            // console.log(obj.prototype);
            // console.log(obj);
            return obj;
      }
      gen(board)
      {
            // console.log("wkejrkljwekrjweklj");
            for(var i in board)
            {
                  for(var j in board[i])
                  {
                        board[i][j] = this.piece(board[i][j]);
                  }
            }
            return board;
      }
      assign_piece(player,idx, key)
      {
            // only valid for chess board 8 by 8
            var obj;
            switch(idx)
            {
                  case 0:
                        obj = new rook(player, 'rook', key);
                        break;
                  case 1:
                        obj = new knight(player, 'knight', key);
                        break;
                  case 2:
                        obj = new bishop(player, 'bishop', key);
                        break;
                  case 3:
                        obj = new king(player, 'king', key);
                        break;
                  case 4:
                        obj = new queen(player, 'queen', key);
                        break;
                  case 5:
                        obj = new bishop(player, 'bishop', key);
                        break;
                  case 6:
                        obj = new knight(player, 'knight', key);
                        break;
                  case 7:
                        obj = new rook(player, 'rook', key);
                        break;
            }
            return obj;
      }
      init()
      {
            var board = [];
            for(var i = 0; i < this.rows; i++)
            {
                  board.push([]);
                  for(var j = 0; j < this.cols; j++)
                  {
                        const id = i.toString() + ',' + j.toString();
                        // console.log(id);
                        if(i == 1)
                        {
                              // console.log(i + j);
                              board[i][j] = new pawn('b', 'pawn', id);
                        }
                        else if(i == this.rows-2)
                        {
                              board[i][j] = new pawn('w', 'pawn', id);
                        }
                        else if(i == 0)
                        {
                              board[i][j] = this.assign_piece('b', j, id);
                        }
                        else if(i == this.rows-1)
                        {
                              board[i][j] = this.assign_piece('w', j, id);
                        }
                        else
                        {
                              board[i][j] = {}
                        }
                        // console.log(board[i][j]);

                  }
                  // console.log(board[i]);
            }
            // console.log(board);
            return board;
      }


}
