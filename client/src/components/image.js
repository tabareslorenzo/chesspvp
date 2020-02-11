import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './styles/image.css'


class Image extends Component
{
//       ../assets/+b-rook.png ../assets/+b-knight.png ../assets/+b-bishop.png
// ../assets/+b-king.png
// ../assets/+b-queen.png
// ../assets/+b-bishop.png
// ../assets/+b-knight.png
// ../assets/+b-rook.png
// ../assets/+b-pawn.png


      render () {
            const url = this.props.url;
            // console.log(url);
            switch(url)
            {
                  case 'b-rook.png':
                        return (<img src={require('../assets/b-rook.png')}/>);
                  case 'w-rook.png':
                        return (<img src={require('../assets/w-rook.png')}/>);
                  case 'b-knight.png':
                        return (<img src={require('../assets/b-knight.png')}/>);
                  case 'w-knight.png':
                        return (<img src={require('../assets/w-knight.png')}/>);
                  case 'b-bishop.png':
                        return (<img src={require('../assets/b-bishop.png')}/>);
                  case 'w-bishop.png':
                        return (<img src={require('../assets/w-bishop.png')}/>);
                  case 'b-king.png':
                        return (<img src={require('../assets/b-king.png')}/>);
                  case 'w-king.png':
                        return (<img src={require('../assets/w-king.png')}/>);
                  case 'b-queen.png':
                        return (<img src={require('../assets/b-queen.png')}/>);
                  case 'w-queen.png':
                        return (<img src={require('../assets/w-queen.png')}/>);
                  case 'b-pawn.png':
                        return (<img src={require('../assets/b-pawn.png')}/>);
                  case 'w-pawn.png':
                        return (<img src={require('../assets/w-pawn.png')}/>);
                  default:
                        return (<img src={require('../assets/w-pawn.png')} style={{opacity: 0}}/>);


            }

      }
}
Image.proTypes = {
      url: PropTypes.object.isRequired
}


export default Image;
