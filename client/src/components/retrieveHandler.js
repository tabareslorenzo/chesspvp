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

      }
      check()
      {
            console.log('wooooooooooo');
      }
      callApp(board)
      {
            console.log('ewkjrk');
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
                  // document.addEventListener('receive', func);
                  // event = new Event('receive');

                  console.log("peertopeer");
                  // console.log(data);
                  console.log(data);
                  localStorage.setItem('board', JSON.parse(data.board));
                  localStorage.setItem('isTurn', data.turn);
                  // this.props.receive(data.board);
                  // board = data.board;
                  func(data.board);
                  // func;
                  // document.dispatchEvent(event);

                  // return data.board;
            });
      }

      render () {

            this.recieve();
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
//PropTypes
RetrieveHandler.proTypes = {
      socket: PropTypes.object.isRequired,
}

export default RetrieveHandler;
