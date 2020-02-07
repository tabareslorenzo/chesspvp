class Piece
{
      constructor(c,t)
      {
            this.color = c;
            this.type = t;
            this.url = c + '-' + t + '.png';
            this.prototype = Piece;
      }


      getColor()
      {
            return this.color;
      }
      getType()
      {
            return this.type;
      }
      getUrl()
      {
            return this.url;
      }


};

export { Piece as default };
