import Game from '../game.js'
import Evalpos from './evalpos.js'

export default class AI
{
      //pass previous min or max
      //if element greater than min return
      //pass prev max if element less than return
      constructor(game)
      {
            this.game = game;
            this.prevBoard = JSON.stringify(game.getBoard());
            // console.log(this.prevBoard);

      }
      updateGame()
      {
            return this.game;
      }
      getBoard()
      {
            return this.game.getBoard();
      }
      makeMove()
      {
            // console.log(this.game.getPiecesPositions());


            this.game.fixboard();
            var {blackPieces, whitePieces} = this.game.getPiecesPositions();
            console.log(blackPieces);
            console.log(whitePieces);
            const board = [];

            // Object.assign(this.game.getBoard(),board);
            // console.log(this.game.getBoard());
            const prev = JSON.stringify(this.game.getBoard());
            // var nextGameState = new Game(JSON.parse(prev));


            // var nextGameState = new Game(JSON.parse(this.prevBoard));
            // this.game.fixboard();

            var res = this.minimax(whitePieces, blackPieces, this.game, false, 2, null);
            console.log(res);
            var move = res.move;
            var pos = res.piece;

            console.log(JSON.parse(prev));

            this.game = new Game(JSON.parse(prev), pos);
            this.game.makeMove(move[0], move[1]);
            console.log(this.game.getBoard());

      }
      listofmoves(board)
      {
            var moves = [];
            for(var i = 0; i < board.length; i++)
            {
                  for(var j = 0; j < board[i].length; j++)
                  {
                        if(board[i][j]==true)
                        {
                              // console.log(board[i][j]);
                              moves.push([i,j]);
                        }
                  }
            }
            return moves;
      }
      eval_func(whitePieces, blackPieces)
      {
            var result = 0;
            var helper = new Evalpos();

            // console.log();
            // console.log(whitePieces);
            // console.log(blackPieces);
            var x = 0;
            var y = 0;

            for(var i of whitePieces)
            {
                  // console.log(i);

                  // result -= i[1].getValue();
                  result -= (i[1].getValue() + helper.positionVal(i[1], JSON.parse(i[0])[0], JSON.parse(i[0])[1]));
                  x++;
                  // console.log(result);
            }
            for(var i of blackPieces)
            {
                  // console.log(i);
                  // console.log(i[1]);
                  y++;
                  // result += i[1].getValue();
                  result += (i[1].getValue() + helper.positionVal(i[1], JSON.parse(i[0])[0], JSON.parse(i[0])[1]));
            }
            // console.log(result);
            // console.log(x);
            // console.log(y);
            // console.log(result);
            if(Math.abs(result) > 20)
            {
                  // console.log(result);
                  // console.log(whitePieces);
                  // console.log(blackPieces);
            }
            // console.log(result);
            return result;
      }
      cleanNullMoves(cur, subtree)
      {
            if(subtree.piece == null || subtree.move == null)
            {
                  return cur;
            }
            else{
                  return cur + subtree.val;
            }

      }
      getState(gameState)
      {
            return this.game.getState();
      }

      minimax(map1, map2, game, white, depth, prevbest)
      {
            // game.fixboard();
            // console.log("klejwrhwjerkjh");
            // console.log(depth);
            // console.log(white);
            // console.log(prevbest);

            //use helper function to pass all pieces playable in turn and returns
            var bestmove = {};
            if(depth==0)
            {
                  // console.log("jerwkljkerjkerjkew");
                  bestmove.val = 0;
                  bestmove.move = null;
                  bestmove.piece = null;
                  return bestmove;
            }
            // console.log(depth);
            // console.log(map1);
            // console.log(map2);
            // console.log("klejwrhwjerkjh");
            depth--;
            //const x = Number.MAX_SAFE_INTEGER + 1;
            // console.log(bestmove);

            if(white)
            {
                  // console.log("bestmove");
                  bestmove.val = (Number.MAX_SAFE_INTEGER)/2 * -1;

                  bestmove.move = null;
                  bestmove.piece = null;
                  for(var x of map1)
                  {
                        // console.log("outer");
                        // game.valid_moves(i[0]);
                        // console.log(i);
                        var i = JSON.parse(x[0]);

                        // console.log(i);
                        var possible_moves = this.listofmoves(game.valid_moves(i, this.game.fix(x[1])));
                        if(possible_moves.length>0)
                        {
                              // console.log(x);
                        }
                                                                        // console.log(possible_moves);

                        // console.log(possible_moves);
                        for(var j of possible_moves)
                        {
                              // console.log("inner");
                              // console.log(i[0]);
                              var i = JSON.parse(x[0]);

                              const prev = JSON.stringify(game.getBoard());
                              // game.save();

                              // console.log("hqwejkhwqkejhqwekj");
                              // nextGameState = game;
                              var map = new Map(map1);
                              var mapB = new Map(map2);

                              mapB.delete(JSON.stringify(j));
                              map.set(JSON.stringify(j), x[1]);
                              // console.log(map);
                              map.delete(JSON.stringify(i));
                              // console.log(map);
                              // console.log(j);
                              // game.save();
                              // game.setSelected(i);
                              game.makeMove(j[0],j[1], i);
                              // this.minimax(map, map2, game, !white, depth);
                              var nextbest = null;
                              if(bestmove.move != null && bestmove.piece != null)
                              {
                                    nextbest = bestmove.val;
                              }
                              var decsionTree = this.minimax(map, mapB, game, !white, depth, nextbest);
                              // console.log(i);
                              // game.load(i);
                              //
                              game = new Game(JSON.parse(prev), i);
                              // if(j[0]==2 && j[1]==0)
                              // {
                              //       console.log(map);
                              //       console.log(mapB);
                              //       console.log();
                              // }
                              var res = this.eval_func(map, mapB);
                              // console.log(decsionTree);
                              // console.log(descionTree.val);
                              // console.log(res);
                              // console.log(decsionTree);

                              const updatedRes = this.cleanNullMoves(res,decsionTree);

                              if(bestmove.val > updatedRes || bestmove.move == null)
                              {

                                    bestmove.val = updatedRes;
                                    // console.log(bestmove);
                                    bestmove.piece = i;
                                    bestmove.move = j;
                                    // console.log('jkljkjkl');
                                    // console.log(bestmove);

                              }
                              if(prevbest!=null)
                              {
                                    if(prevbest >= updatedRes)
                                    {
                                          // console.log(updatedRes);
                                          // console.log(prevbest);
                                          return bestmove;
                                    }
                              }

                              //bestmove = Math.max(this.eval_func(map, map2) + this.minimax(map, map2, game, !white, depth).val, bestmove);
                        }

                  }
            }
            else
            {
                  bestmove.val = (Number.MAX_SAFE_INTEGER)/2;
                  bestmove.move = null;
                  bestmove.piece = null;
                  // console.log("jewrklwjerlk");
                  // console.log(map2);
                  // console.log(map2.size);
                  for(var x of map2)
                  {
                        // console.log(i[0]);
                        // game.valid_moves(i[0]);
                        // console.log("outer");
                        var i = JSON.parse(x[0]);
                        // console.log(this.game.getBoard()[i[0],i[1]] = x[1]);
                        // console.log(this.game.getBoard()[i[0],i[1]].isValidmove(0,1));




                        // game.fixboard();
                        // console.log(this.game.fix(x[1] instanceOf Piece);
                        var possible_moves = this.listofmoves(game.valid_moves(i, game.fix(x[1])));
                        // console.log(this.game.fix(x[1]));
                        // console.log(x[1]);

                        // console.log(possible_moves);
                        // console.log(x[1]);
                        if(possible_moves.length>0)
                        {
                              // console.log(x);
                        }
                        // console.log(map2.size);
                        // console.log(game.getBoard());
                        // console.log(x[1]);
                        // console.log(possible_moves);

                        for(var j of possible_moves)
                        {
                              // console.log(i[0]);
                              // var nextGameState = new Game(game.getBoard() ,i[0]);
                              var map = new Map(map2);
                              var mapW = new Map(map1);
                              // console.log(map);
                              // console.log(mapW);
                              // map = clone(map2);
                              // console.log(JSON.parse(this.prevBoard));

                              map.set(JSON.stringify(j), x[1]);
                              // console.log(x);
                              // console.log(map.get(JSON.stringify(j)));
                              // console.log(map2.get(i));
                              // console.log(map);
                              map.delete(JSON.stringify(i));
                              // console.log(map);
                              // console.log(j);
                              // console.log(j);
                              const prev = JSON.stringify(game.getBoard());
                              // console.log(prev);
                              // game.save();
                              // console.log(j);
                              game.makeMove(j[0],j[1], i);

                              // mapW.set(JSON.stringify(x), x);
                              // console.log(mapW.get(JSON.stringify(y)));

                              // console.log(mapW.keys());
                              // console.log(mapW.has(j));

                              mapW.delete(JSON.stringify(j));
                              var nextbest = null;
                              if(bestmove.move != null && bestmove.piece != null)
                              {
                                    nextbest = bestmove.val;
                              }

                              var decsionTree = this.minimax(mapW, map, game, !white, depth, nextbest);
                              // game.load(i);
                              // console.log(JSON.parse(prev));
                              // this.game = new Game(JSON.parse(prev), i);
                              game = new Game(JSON.parse(prev), i);
                              var res = this.eval_func(mapW, map);
                              // console.log(this.game.getBoard());
                              // console.log(res);
                              // console.log(decsionTree);
                              const updatedRes = this.cleanNullMoves(res,decsionTree);
                              // console.log(updatedRes);
                              // if(decsionTree.val == -40)
                              // {
                              //       console.log(bestmove);
                              //       console.log(decsionTree);
                              // }

                              if(bestmove.val < updatedRes || bestmove.move == null)
                              {
                                    // console.log(decsionTree.val);

                                    // console.log(updatedRes);
                                    bestmove.val = updatedRes;
                                    // console.log(res + decsionTree.val);
                                    // console.log(bestmove);
                                    // console.log(i);
                                    bestmove.piece = i;
                                    bestmove.move = j;
                                    // console.log('jkljkjkl');
                                    // console.log(bestmove);

                              }
                              if(prevbest!=null)
                              {
                                    if(prevbest <= updatedRes)
                                    {
                                          // console.log(prevbest);
                                          return bestmove;
                                    }
                              }


                              // bestmove = Math.min(this.eval_func(map1, map) + this.minimax(map1, map, game, !white, depth), bestmove);
                        }
                        // console.log(i);
                        // return bestmove;

                  }

            }
            // console.log(bestmove);
            return bestmove;



      }
}






/*
depth of 3
append to maps
for(var in board.length)
{
      for(var in board[i].length)
      {
            if(board[i][j] instanceof Piece)
            {
                  if()
            }
      }

      }
}

var mymap = new Map();
console.log(typeof mymap);
mymap.set("a", 10);
mymap.set("b", 3);
mymap.set("c", 7);
mymap.set("d", 2);
mymap.set("e", 0);
console.log(mymap);
for(var i of mymap)
{
      console.log("kweqj");
      console.log(i);
}
intially sum peices iterate through map and when one gets deleted subtract
//depth of 3 after imp pruning 2 before
minimax(map1(copy), map2(copy), game(copy), white)
{
      //use helper function to pass all pieces playable in turn and returns
      var bestmove;
      if(white)
      {
            for (var i in mapWhitePieces)
            {
                  game.valid_moves(i);

                  var possible_moves = listofmoves(game.valid_moves(i));
                  for(var j in possible_moves)
                  {
                        var game = new Game();
                        var map = new Map();
                        map = map1;
                        map2.delete(j);
                        map.set(j, i);
                        map.delete(i);

                        bestmove = max(eval_func(game.make_move(board[i[0],i[1]]))+ minimax(map, map2, game, !white), bestmove);
                  }
            }
      }
      else
      {
            for (var i in mapBlackPieces)
            {
                  var possible_moves = listofmoves(game.valid_moves(i));
                  for(var j in possible_moves)
                  {
                        var game = new Game();
                        var map = new Map();
                        map = map2;
                        map1.delete(j);
                        map.set(j, i);
                        map.delete(i);
                        bestmove = min(eval_func(game.make_move(board[i[0],i[1]])) + minimax(map1, map, game, !white), bestmove);
                  }
            }
      }



}




count up the value of your pieces vs. the value of your opponent's pieces.
Pawn = 1, bishop/knight = 3, rook = 5, and queen = 9 is generally a good rule.


*/
