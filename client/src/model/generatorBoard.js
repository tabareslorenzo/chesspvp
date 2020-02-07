import bishop from './pieces/bishop.js';
import king from './pieces/king.js';
import knight from './pieces/knight.js';
import pawn from './pieces/pawn.js';
import queen from './pieces/queen.js';
import rook from './pieces/rook.js';


export default class generateBoard
{

      constructor(rows, cols)
      {
            this.rows = rows;
            this.cols = cols;
      }
      assign_piece(player,idx)
      {
            // only valid for chess board 8 by 8
            var obj;
            switch(idx)
            {
                  case 0:
                        obj = new rook(player, 'rook');
                        break;
                  case 1:
                        obj = new knight(player, 'knight');
                        break;
                  case 2:
                        obj = new bishop(player, 'bishop');
                        break;
                  case 3:
                        obj = new king(player, 'king');
                        break;
                  case 4:
                        obj = new queen(player, 'queen');
                        break;
                  case 5:
                        obj = new bishop(player, 'bishop');
                        break;
                  case 6:
                        obj = new knight(player, 'knight');
                        break;
                  case 7:
                        obj = new rook(player, 'rook');
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
                        if(i == 1)
                        {
                              console.log(i + j);
                              board[i][j] = new pawn('b', 'pawn');
                        }
                        else if(i == this.rows-2)
                        {
                              board[i][j] = new pawn('w', 'pawn');
                        }
                        else if(i == 0)
                        {
                              board[i][j] = this.assign_piece('b', j);
                        }
                        else if(i == this.rows-1)
                        {
                              board[i][j] = this.assign_piece('w', j);
                        }
                        else
                        {
                              board[i][j] = {}
                        }

                  }
            }
            return board;
      }


}
