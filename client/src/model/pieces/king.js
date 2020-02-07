import Piece from './piece.js'

class king extends Piece
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
            return true;
      }
}

export { king as default };
