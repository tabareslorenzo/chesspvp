import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Space from './space.js'
import './styles/grid.css'

class Grid extends Component
{

      selected = (x,y) =>
      {
            console.log(40);
            this.props.pieceSelected(x,y);

      }
      move = (x,y) =>
      {
            console.log(40);
            this.props.moveSelected(x,y);

      }

      render () {
            var rows = this.props.spaces.map((row, i) =>
            {
                  var spot = row.map((element, j) =>
            {
                  return(<Space key1={[i,j]} key={j} content={element} selected={this.selected} move={this.move}/>)
                  // return(<td key={j}> OJWEkjhwr</td>)
            })
            return(<tr key={i}>{spot}</tr>)
      });
            return (
                  <table className="Grid"><tbody>
                    {rows}
                </tbody></table>
            );
      }
}
Grid.proTypes = {
      spaces: PropTypes.array.isRequired
}


export default Grid;
