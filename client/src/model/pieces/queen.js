import Piece from './piece.js'

class queen extends Piece
{
      constructor(c, t)
      {
            super(c, t);
            this.prototype = Piece;
      }
      isValidmove(fromX, fromY, toX, toY, notBlocked = false)
      {

            if(!notBlocked)
            {
                  return false;
            }
            // var DirectionHandler = new Direction;
            // const DirEnum = DirectionHandler.defineDir()
            // const diff = DirectionHandler.calc_diff([fromX, fromY], [toX, toY]);
            // if()

            return true;
      }
}
// queen.prototype = Piece;
export { queen as default };
