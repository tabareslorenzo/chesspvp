import Piece from './piece.js'

class rook extends Piece
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
// rook.prototype = Piece;

export { rook as default };
