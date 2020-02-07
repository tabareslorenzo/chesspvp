export default class Direction
{
      constructor()
      {

      }
      calc_diff()
      {
            var diff = [(newpos[0]-pos[0]), (newpos[1]-pos[1])];
            if(diff[0] == 0 && diff[1] == 0)
            {
                  return false;
            }
            if(diff[0]!=0)
            {
                  diff[0] = diff[0]/Math.abs(diff[0]);
            }
            if(diff[1]!=0)
            {
                  diff[1] = diff[1]/Math.abs(diff[1]);
            }

            // console.log(pos + newpos);
            // console.log(diff);
            diff = diff[0].toString() + ',' + diff[1].toString();
      }

      defineDir()
      {
            const dir = {
                UP: "0,1",
                DOWN: "0,-1",
                LEFT: "-1,0",
                RIGHT: "1,0",
                UPRIGHT: "1,1",
                UPLEFT: "-1,1",
                DOWNRIGHT: "1,-1",
                DOWNLEFT: "-1,-1",
            }
            return dir;
      }
      //for game.js to calc. if there is a direction getting blocked
      whatDirection(diff)
      {
            var dir;
            const D = this.defineDir();
            // console.log(diff);
            // console.log(D.UP);
            //
            switch(diff)
            {
                  case D.UP:
                        dir = 0;
                        break;
                  case D.DOWN:
                        dir = 1;
                        break;
                  case D.LEFT:
                        dir = 2;
                        break;
                  case D.RIGHT:
                        dir = 3;
                        break;
                  case D.UPRIGHT:
                        dir = 4;
                        break;
                  case D.UPLEFT:
                        dir = 5;
                        break;
                  case D.DOWNRIGHT:
                        dir = 6;
                        break;
                  case D.DOWNLEFT:
                        dir = 7;
                        break;
                  default:
                        dir = -1;
                        break;
            }
            return dir;

      }
      // updating_blocking(dir, pos)
      // {
      //
      // }
      blocked_pos(diff, x0, y0, x1, y1)
      {
            var dir;
            const D = this.defineDir();
            var notBlocked;
            // do I need whatdir no cause I can return dir and
            switch(diff)
            {
                  case D.UP:
                        dir = 0;
                        if(y0<y1)
                        {
                              notBlocked = true;
                        }
                        break;
                  case D.DOWN:
                        dir = 1;
                        if(y0>y1)
                        {
                              notBlocked = true;
                        }
                        break;
                  case D.LEFT:
                        dir = 2;
                        if(x0>x1)
                        {
                              notBlocked = true;
                        }
                        break;
                  case D.RIGHT:
                        dir = 3;
                        if(x0<x1)
                        {
                              notBlocked = true;
                        }
                        break;
                  case D.UPRIGHT:
                        dir = 4;
                        if(y0<y1 || x0<x1)
                        {
                              notBlocked = true;
                        }
                        break;
                  case D.UPLEFT:
                        dir = 5;
                        if(y0<y1 || x0>x1)
                        {
                              notBlocked = true;
                        }
                        break;
                  case D.DOWNRIGHT:
                        dir = 6;
                        if(y0>y1 || x0<x1)
                        {
                              notBlocked = true;
                        }
                        break;
                  case D.DOWNLEFT:
                        dir = 7;
                        if(y0>y1 || x0>x1)
                        {
                              notBlocked = true;
                        }
                        break;
                  default:
                        dir = -1;
                        break;
            }
            return notBlocked;

      }

}
