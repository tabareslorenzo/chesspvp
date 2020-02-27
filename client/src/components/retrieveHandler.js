import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
// import io from 'socket.io-client';
// let socket = io('http://localhost:3001');

class RetrieveHandler extends Component
{
      componentDidMount()
      {
            // element = ReactDOM.findDOMNode(this);
            console.log(element);
            func = this.callApp.bind(this);
            func1 = this.setToSingle.bind(this);
            func2 = this.setUp.bind(this);
            this.recieve();
            this.endgame();
            this.playerData();
      }
      setUp()
      {
            this.props.setUpMult();
      }
      check()
      {
            console.log('wooooooooooo');
      }
      setToSingle()
      {
            this.props.singleSelected(true);
      }
      callApp(board)
      {
            board = JSON.parse(board);
            console.log(board);
            if(board == null)
            {
                  return;
            }
            this.check();
            this.props.recieved(board);
            board = null;
            // document.addEventListener('receive', this.callApp());
      }
      recieve()
      {
            //console.log(this.props.socket);
            this.props.socket.on('peer', function(data)
            {

                  console.log(data);
                  localStorage.setItem('board', JSON.parse(data.board));
                  localStorage.setItem('isTurn', data.turn);

                  func(data.board);

            });
      }
      endgame()
      {
            this.props.socket.on('oppenent left', function()
            {
                  func1();
            });
      }
      playerData()
      {
            this.props.socket.on('send player', function (data)
            {
                  localStorage.setItem('room', data.room);
                  localStorage.setItem('player', data.p);
                  localStorage.setItem('isTurn', data.turn);
                  console.log('jwkejrrwkle');
                  func2(data);

            });
      }

      render () {



            // this.callApp();
            // if(board != null)
            // {
            //       console.log('ewkjrljwerj');
            //       this.callApp();
            // }
            return null;
      }

}
// var board = null;
var element;
var event;
var func;
var func1;
var func2;
//PropTypes
RetrieveHandler.proTypes = {
      socket: PropTypes.object.isRequired,
}

export default RetrieveHandler;
