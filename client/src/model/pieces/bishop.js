import Piece from './piece.js'

class bishop extends Piece
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

export { bishop as default };
