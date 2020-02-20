import Piece from './piece.js'
import Direction from '.././direction.js';


class bishop extends Piece
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

            if(dir == is.UPLEFT || dir == is.UPRIGHT || dir == is.DOWNRIGHT || dir == is.DOWNLEFT)
            {
                  return true;
            }
            // return false;
            return false;
      }
      getValue()
      {
            return this.value;
      }
}

export { bishop as default };
