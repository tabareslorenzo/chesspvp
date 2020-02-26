import Piece from './piece.js'
import Direction from '.././direction.js';

class king extends Piece
{
      constructor(c, t, id)
      {
            super(c, t, id);
            this.value = 1000;
            this.prototype = Piece;
      }
      isValidmove(fromX, fromY, toX, toY, notBlocked = false, empty = false, notOne = true)
      {
            if(!notBlocked || notOne)
            {
                  return false;
            }
            return true;
      }
      getValue()
      {
            return this.value;
      }
}

export { king as default };
