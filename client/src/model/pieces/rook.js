import Piece from './piece.js'
import Direction from '.././direction.js';

class rook extends Piece
{
      constructor(c, t, id)
      {
            super(c, t, id);
            this.value = 50;
            this.prototype = Piece;
      }
      isValidmove(fromX, fromY, toX, toY, notBlocked = false)
      {
            if(!notBlocked)
            {
                  return false;
            }
            var DirectionHandler = new Direction;
            const dir = DirectionHandler.calc_diff([fromX, fromY], [toX, toY]);
            const is = DirectionHandler.defineDir();

            if(dir == is.LEFT || dir == is.RIGHT || dir == is.UP || dir == is.DOWN)
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
// rook.prototype = Piece;

export { rook as default };
