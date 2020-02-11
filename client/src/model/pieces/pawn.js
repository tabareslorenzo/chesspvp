import Piece from './piece.js'
import Direction from '.././direction.js';

class pawn extends Piece
{
      constructor(c, t, id)
      {
            super(c, t, id);
            this.value = 10;
            this.prototype = Piece;
      }
      isValidmove(fromX, fromY, toX, toY, notBlocked = false, notOne = true)
      {
            // if(fromX == 1 && fromY == 3)
            // {
            //       console.log(notOne);
            //       console.log(fromX);
            //       console.log(fromY);
            //       console.log(toX);
            //       console.log(toY);
            //       console.log("ehjhjekhr");
            // }
            if(!notBlocked || notOne)
            {
                  return false;
            }
            // var DirectionHandler = new Direction;
            // const DirEnum = DirectionHandler.defineDir();
            // const diff = DirectionHandler.calc_diff([fromX, fromY], [toX, toY]);
            // if()
            return true;
      }
      getValue()
      {
            return this.value;
      }
}

export { pawn as default };
