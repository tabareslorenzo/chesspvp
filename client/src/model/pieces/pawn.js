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
      isValidmove(fromX, fromY, toX, toY, notBlocked = false, notOne = true, isfull = false, firstmove = false)
      {
            if(notOne)
            {
                  return false;
            }
            var DirectionHandler = new Direction;
            const dir = DirectionHandler.calc_diff([fromX, fromY], [toX, toY]);
            const is = DirectionHandler.defineDir();

            if(this.getColor() =='b')
            {
                  if((dir == is.DOWNRIGHT || dir == is.DOWNLEFT) && !notBlocked)
                  {
                        return true;
                  }
                  if(dir == is.DOWN && notBlocked)
                  {
                        return true;
                  }
            }
            else
            {
                  if((dir == is.UPLEFT || dir == is.UPRIGHT) && !notBlocked)
                  {
                        return true;
                  }
                  if((dir == is.UP) && notBlocked)
                  {
                        return true;
                  }

            }

            return false;
      }
      getValue()
      {
            return this.value;
      }
}

export { pawn as default };
