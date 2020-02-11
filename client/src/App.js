import React, {Component}  from 'react';
import './App.css';
import  Game from './model/game.js';
import AI from './model/AI/minimax.js';
import Grid from './components/grid.js';




class App extends Component {
      state = {
            spaces:[],
            data: false,
            // {
            //       url: '',
            //       changeBackground: false,
            //       full: true,
            //       playable: this.yourTurn,
            // };
      }
      componentWillMount()
      {
            // var pieces = [];

            gameState = new Game();
            ai = new AI(gameState);






            const pos = [0,0];
            // var validMoves = game.valid_moves(pos);
            this.updateView(gameState);





      }
      updateView = (game) =>
      {
            // console.log(game);
            this.setState({spaces: []});
            // console.log(this.state.spaces);
            const info = game.getState();
            // this.state.spaces.row = [];
            console.log(info);
            // console.log(this.state.spaces.row);

            // for(var i in info)
            // {
            //       this.state.spaces.push(info[i])
            // }
            this.setState({spaces: info});
            // console.log(this.state.spaces);
            this.setState({spaces: info});
            // console.log(this.state.spaces);
            // console.log(this.state);
            this.state.spaces = info;
            this.forceUpdate();
            console.log(this.state);
      }
      pieceSelected = (x,y) =>
      {
            console.log("sdkjfksjdkl");
            gameState.valid_moves([x,y]);
            this.updateView(gameState);
      }
      moveSelected = (x,y) =>
      {
            console.log("werwer");
            gameState.makeMove(x,y);
            // game.endTurn();
            this.updateView(gameState);
            // console.log(this.state);
            // ai = new AI(gameState);
            ai.makeMove();
            console.log(ai.getBoard());
            gameState = new Game(ai.getBoard(), [-1,-1]);
            // game

            // gameState = new Game(ai.getBoard);
            this.updateView(gameState);
      }
      render(){
            // console.log(this.state);
        return (
          <div>
            <header className="App-header">
            </header>
            <React.Fragment>
                  <div className="App">
                        <Grid spaces={this.state.spaces} pieceSelected={this.pieceSelected} moveSelected={this.moveSelected}/>
                  </div>


            </React.Fragment>
          </div>
        );
 }
}
var gameState;
var ai;

export default App;
