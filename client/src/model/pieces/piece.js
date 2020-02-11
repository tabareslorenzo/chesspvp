class Piece
{
      constructor(c,t, id)
      {
            this.color = c;
            this.type = t;
            this.url = c + '-' + t + '.png';
            this.id = id;
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
      getID()
      {
            return this.id;
      }


};

export { Piece as default };
