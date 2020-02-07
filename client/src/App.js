import React, {Component}  from 'react';
import './App.css';
import  Game from './model/game.js';
import Grid from './components/grid.js'




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

            game = new Game();


            const pos = [0,0];
            // var validMoves = game.valid_moves(pos);
            this.updateView();





      }
      updateView = () =>
      {
            this.setState({spaces: []});
            console.log(this.state.spaces);
            const info = game.getState();
            // this.state.spaces.row = [];
            // console.log(this.state.spaces.row);

            // for(var i in info)
            // {
            //       this.state.spaces.push(info[i])
            // }
            this.setState({spaces: info});
            console.log(this.state.spaces);
            // console.log(this.state);
      }
      pieceSelected = (x,y) =>
      {
            console.log("sdkjfksjdkl");
            game.valid_moves([x,y]);
            this.updateView();
      }
      moveSelected = (x,y) =>
      {
            console.log("werwer");
            game.makeMove(x,y);
            this.updateView();
      }
      render(){
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
var game;

export default App;
