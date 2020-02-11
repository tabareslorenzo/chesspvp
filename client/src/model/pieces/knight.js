import Piece from './piece.js'
import Direction from '.././direction.js';

class knight extends Piece
{
      constructor(c, t, id)
      {
            super(c, t, id);
            this.value = 50;
            this.prototype = Piece;
      }
      isValidmove(fromX, fromY, toX, toY)
      {
            var DirectionHandler = new Direction;
            const diff = DirectionHandler.distance([fromX, fromY], [toX, toY]);
            if(Math.abs(diff[0])==2 && Math.abs(diff[1])==1 || Math.abs(diff[1])==2 && Math.abs(diff[0])==1)
            {
                  return true;
            }

            return false;
      }
      getValue()
      {
            return this.value;
      }
}

export { knight as default };
