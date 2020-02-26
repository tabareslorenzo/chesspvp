import React, {Component}  from 'react';
import './App.css';
import  Game from './model/game.js';
import AI from './model/AI/minimax.js';
import Grid from './components/grid.js';
import socketClient from './socket/socketClient.js'
import RetrieveHandler from './components/retrieveHandler.js'
import Mode from './components/mode.js'
// import io from 'socket.io-client';
// let socket = io('http://localhost:3001');
// import io from 'socket.io-client';
// let socket = io('http://localhost:3001');

//SocketClient


class App extends Component {
      state = {
            spaces:[],
            data: false,
            multiplayer: false,

      }
      componentWillMount()
      {
            // window.addEventListener('storage', this.onstorage());
            localStorage.removeItem('room');
            localStorage.removeItem('player');
            localStorage.removeItem('isTurn');
            localStorage.removeItem('board');
            // window.addEventListener('storage', this.onstorage);
            // socketManager = new socketClient();
            //gameState = new Game();
            // var pieces = [];

            // gameState = new Game();
            // ai = new AI(gameState);
            //
            // if(this.state.multiplayer)
            // {
            //       // this.socketClient.connect();
            //       // this.socketInit();
            //       window.addEventListener('storage', this.onstorage());
            //       socketManager = new socketClient();
            //       //console.log(socketManager.getSocket());
            // }
            //
            //
            //
            //
            // const pos = [0,0];
            // // var validMoves = game.valid_moves(pos);
            // this.updateView(gameState);
            // window.addEventListener('storage', () => {
            //   // When local storage changes, dump the list to
            //   // the console.
            //   this.onstorage();
            //   console.log(JSON.parse(window.localStorage.getItem('sampleList')));
            // });






      }
      componentWillUnmount()
      {
            console.log('closing');
            // localStorage.removeItem('room');
            // localStorage.removeItem('player');
            // localStorage.removeItem('isTurn');
      }
      initMult = () =>
      {
            gameState = new Game();
            socketManager = new socketClient();
            // this.socketClient.connect();
            // this.socketInit();


            this.setState({multiplayer: true});
            //console.log(socketManager.getSocket());

            // window.addEventListener('storage', this.onstorage());
            this.updateView(gameState);
      }

      initAI = (opponentLeft = false) =>
      {
            if(!opponentLeft && socketManager !== undefined)
            {
                  socketManager.disconnect();
            }
            gameState = new Game();
            ai = new AI(gameState);
            this.setState({multiplayer: false});
            this.updateView(gameState);
      }


      onstorage = () => {
        // When local storage changes, dump the list to
        // the console.
        // console.log('123809182390');
        // this.setState({multiplayer: localStorage.getItem('isTurn')});
        // this.state.multiplayer = localStorage.getItem('isTurn');
        // const state = localStorage.getItem('board');
        console.log('ewkjlrklewjrklwejrlk');
        gameState = new Game(undefined, undefined, JSON.parse(localStorage.getItem('isTurn')));
       //  if(state!=null)
       //  {
       //       gameState = new Game(gameState.stateToBoard(state), undefined, JSON.parse(localStorage.getItem('isTurn')));
       // }


        // console.log(this.state.spaces);
        // console.log(localStorage.getItem('room'));
        // console.log(localStorage.getItem('player'));

        if(JSON.parse(localStorage.getItem('isTurn')) == false)
        {
            // console.log(socketManager.receive());//socketManager.receive();
             // socketManager.receive();
       }
       console.log(localStorage);
       console.log(localStorage.getItem('isTurn'));
       console.log('in storage');
       console.log(gameState);
       this.updateView(gameState);
       localStorage.removeItem('isTurn');
       // window.removeEventListener('storage', this.onstorage());
       // window.addEventListener('storage', this.onstorage());

        // console.log(this.state.multiplayer);
      }
      recieved = (board) =>
      {
            console.log(board);
            // console.log('jklj');
            gameState = new Game(gameState.stateToBoard(board));
            console.log(gameState.getBoard());
            // console.log(gameState.getState());
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
            // console.log("sdkjfksjdkl");
            gameState.valid_moves([x,y]);
            this.updateView(gameState);
      }
      sendmove()
      {
            //'http://localhost:8080'
            console.log('jerkljweklrjkweljrklwejrklwejrkl');
            const state = this.state.spaces;
            console.log(state);
            // console.log(this.socketClient);
            console.log(this.ref);
            console.log(this.refs);
            //if(!this.socketClient.isConnected())
            if(socketManager.isConnected())
            {

                  this.setState({multiplayer: false});
                  //call function to change view, display message that game is over
                  return;
            }
            // window.addEventListener('storage', this.onstorage());
            socketManager.send(state);

            socketManager.receive();
            // this.socketClient.send('state');
            // this.socketClient.recieve();
            gameState = new Game(gameState.getBoard(), undefined, false);
            // this.send(state);

            this.updateView(gameState);

            // socket.on('peer', function(data)
            // {
            //       console.log("peertopeer");
            // })
            //
            // socket.on('some event', function (data) {
            //   console.log(data);
            //   console.log(data.hello);
            //   localStorage.setItem('room', data.hello);
            //   // console.log(socket);
            //   // socket.emit('my other event', { my: 'what' });
            // });
            //   socket.on('news', function (data) {
            //     console.log(data);
            //     console.log(socket);
            //     // console.log(room);
            //     console.log(localStorage.getItem('room'));
            //    socket.emit('my other event', { my: localStorage.getItem('room'), board: state, g: 'erwewrs'});
            //   });

              // gameState = new Game(gameState.stateToBoard(this.state.spaces), [-1,-1]);
              // gameState.stateToBoard(this.state.spaces);
              console.log(gameState.getBoard());
              console.log('ghghjgjhg');
              // this.updateView(gameState);
      }
      aiRespose()
      {
            console.log('hjkjkhjkhk');
            ai = new AI(gameState);
            ai.makeMove();
            gameState = new Game(ai.getBoard(), [-1,-1]);
            this.updateView(gameState);
      }
      moveSelected = (x,y) =>
      {

            console.log(gameState.getBoard());
            gameState.makeMove(x,y);

            // game.endTurn();
            this.updateView(gameState);
            // console.log("werwer");
            // console.log(gameState);

            // to update board after oppenent move(deliv from server)
            // console.log(this.state.spaces);
            // gameState.stateToBoard(this.state.spaces);
            // console.log(gameState);
            // gameState = new Game(gameState.stateToBoard(this.state.spaces), [-1,-1]);
            // console.log(gameState.getBoard());
            // console.log(this.state);
            if(this.state.multiplayer)
            {
                  this.sendmove();
            }else
            {
                  console.log(this.state.multiplayer);
                  this.aiRespose();
            }
            // console.log('ejrtklrtes');
            // console.log(ai.getBoard());

      }
      render(){
            // console.log(this.state);
      if(this.state.multiplayer)
      {
            return (
              <div>
                <header className="App-header">
                </header>
                <React.Fragment>
                      <div className="App">
                           <Mode multiplayer={this.state.multiplayer} multSelected={this.initMult} singleSelected={this.initAI}/>
                            <Grid spaces={this.state.spaces} pieceSelected={this.pieceSelected} moveSelected={this.moveSelected}/>
                      </div>
                      <RetrieveHandler recieved={this.recieved} socket={socketManager.getSocket()} singleSelected={this.initAI} setUpMult={this.onstorage}></RetrieveHandler>



                </React.Fragment>
              </div>
            );
      }
      else{
            return (
              <div>
                <header className="App-header">
                </header>
                <React.Fragment>
                      <div className="App">
                           <Mode multiplayer={this.state.multiplayer} multSelected={this.initMult} singleSelected={this.initAI}/>
                            <Grid spaces={this.state.spaces} pieceSelected={this.pieceSelected} moveSelected={this.moveSelected}/>
                      </div>

                </React.Fragment>
              </div>
            );
      }

 }
}
var gameState;
var ai;
var socketManager;

export default App;

//<SocketClient recieved={this.recieve} onRef={ref => (this.socketClient = ref)} ></SocketClient>
