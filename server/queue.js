module.exports = class Queue extends Array
{
      isEmpty()
      {
                  return this.length === 0;
      }
      pop()
      {
            if(!this.isEmpty())
            {
                  const top = this[0];
                  this.splice(0, 1);
                  return top;
            }

      }
}
