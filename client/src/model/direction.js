export default class Direction
{
      constructor()
      {

      }
      distance(pos, newpos)
      {
            if(newpos[1]-pos[1]==1)
            {
                  // console.log("wlekjlrlkwjerkljwelkrjlkwejqrklwejrklweqjrlkejwrlkwerlk");
                  // console.log("wlekjlrlkwjerkljwelkrjlkwejqrklwejrklweqjrlkejwrlkwerlk");
                  // console.log("wlekjlrlkwjerkljwelkrjlkwejqrklwejrklweqjrlkejwrlkwerlk");
            }

            return [(pos[0]-newpos[0]), (newpos[1]-pos[1])];
      }
      calc_diff(pos, newpos)
      {
            var diff = this.distance(pos, newpos);
            if(diff[0] == 0 && diff[1] == 0)
            {
                  return false;
            }
            if(Math.abs(diff[0]) != Math.abs(diff[1]) && diff[0] != 0 &&  diff[1] != 0)
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
            // console.log(pos);
            // console.log(diff);
            diff = diff[0].toString() + ',' + diff[1].toString();
            return diff;
      }


      defineDir()
      {
            const dir = {
                UP: "1,0",
                DOWN: "-1,0",
                LEFT: "0,-1",
                RIGHT: "0,1",
                UPRIGHT: "1,1",
                UPLEFT: "1,-1",
                DOWNRIGHT: "-1,1",
                DOWNLEFT: "-1,-1",
            }
            return dir;
      }
      defineBlocking()
      {
            const dir = {
                UP: 0,
                DOWN: 1,
                LEFT: 2,
                RIGHT: 3,
                UPRIGHT: 4,
                UPLEFT: 5,
                DOWNRIGHT: 6,
                DOWNLEFT: 7,
            }
            return dir;
      }
      //for game.js to calc. if there is a direction getting blocked
      whatDirection(pos, newpos)
      {
            var dir;
            const D = this.defineDir();
            var diff = this.calc_diff(pos, newpos);
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
                        // console.log(diff);
                        dir = -1;
                        break;
            }
            return dir;

      }
      // only i if up down left right, i and j for diagonal
      isCloser(i0, i1, j0=0, j1=1)
      {
            if(Math.abs(i0)<=Math.abs(i1) && Math.abs(j0) <= Math.abs(j0))
            {
                  return true;
            }
            return false;
      }
      blocked_pos(dir, x0, y0, x1, y1)
      {
            const D = this.defineBlocking();
            var notBlocked;
            switch(dir)
            {
                  case D.UP:
                        // console.log(y0);
                        // console.log(y1);
                        notBlocked = this.isCloser(x0,x1);
                        // if(y0<y1)
                        // {
                        //       notBlocked = true;
                        // }
                        break;
                  case D.DOWN:
                        // console.log(y0);
                        // console.log(y1);
                        notBlocked = this.isCloser(x0,x1);
                        // if(y0>y1)
                        // {
                        //       notBlocked = true;
                        // }
                        break;
                  case D.LEFT:
                        notBlocked = this.isCloser(y0,y1);
                        // if(x0>x1)
                        // {
                        //       notBlocked = true;
                        // }
                        break;
                  case D.RIGHT:
                        notBlocked = this.isCloser(y0,y1);
                        // if(x0<x1)
                        // {
                        //       notBlocked = true;
                        // }
                        break;
                  case D.UPRIGHT:
                        notBlocked = this.isCloser(y0,y1,x0,x1);
                        // if(y0<y1 || x0<x1)
                        // {
                        //       notBlocked = true;
                        // }
                        break;
                  case D.UPLEFT:
                        // console.log(y0);
                        // console.log(x0);
                        // console.log(y1);
                        //
                        // console.log(x1);
                        notBlocked = this.isCloser(y0,y1,x0,x1);
                        // if(y0<y1 || x0>x1)
                        // {
                        //       notBlocked = true;
                        // }
                        break;
                  case D.DOWNRIGHT:
                        notBlocked = this.isCloser(y0,y1,x0,x1);
                        // if(y0>y1 || x0<x1)
                        // {
                        //       notBlocked = true;
                        // }
                        break;
                  case D.DOWNLEFT:
                        notBlocked = this.isCloser(y0,y1,x0,x1);
                        // if(y0>y1 || x0>x1)
                        // {
                        //       notBlocked = true;
                        // }
                        break;
                  default:
                        dir = -1;
                        break;
            }
            if(x1 == 0 && y1 == 0)
            {
                  notBlocked = false;
            }
            return notBlocked;

      }

}
