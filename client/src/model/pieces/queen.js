import Piece from './piece.js'

class queen extends Piece
{
      constructor(c, t, id)
      {
            super(c, t, id);
            this.value = 100;
            this.prototype = Piece;
      }
      isValidmove(fromX, fromY, toX, toY, notBlocked = false)
      {
            // console.log("kjewrkljwer");

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
      getValue()
      {
            return this.value;
      }
}
// queen.prototype = Piece;
export { queen as default };
