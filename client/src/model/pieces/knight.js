import Piece from './piece.js'

class knight extends Piece
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

export { knight as default };
