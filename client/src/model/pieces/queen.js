import Piece from './piece.js'

class queen extends Piece
{
      constructor(c, t)
      {
            super(c, t);
            this.prototype = Piece;
      }
      isValidmove(fromX, fromY, toX, toY)
      {
            return true;
      }
}
// queen.prototype = Piece;
export { queen as default };
