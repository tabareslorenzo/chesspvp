import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import './styles/mode.css'


class Mode extends Component
{
      selectMult = () =>
      {
            if(!this.props.multiplayer)
            {
                  console.log("mult");
                  this.props.multSelected();
                  //this.props.
                  // call func
            }

      }
      selectSingle = () =>
      {
            if(this.props.multiplayer)
            {
                  console.log("single");
                  this.props.singleSelected();
                  //this.props.
                  // call func
            }

      }
      render ()
      {
            return (
                  <div className="btn-container" padding='10px'>
                        <div className="btn">
                              <Button onClick={this.selectMult} variant="outline-primary" size="lg">
                                    <p className="btn-txt">
                                    Multiplayer
                                    </p>
                              </Button>
                        </div>
                        <div className="btn">
                              <Button onClick={this.selectSingle} variant="outline-primary" size="lg">
                                    <p className="btn-txt">
                                    AI
                                    </p>
                              </Button>
                        </div>
                  </div>
            );
      }
}
Mode.propTypes = {
      multiplayer: PropTypes.object.isRequired
}

export default Mode;
