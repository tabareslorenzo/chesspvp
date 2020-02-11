import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './styles/space.css'
import Image from './image.js'
class Space extends Component
{
      state = {
            img:''

      }
      //       url: '',
      //       changeBackground: false,
      //       full: true,
      //       playable: this.yourTurn,

      select = (high,p,f) =>
      {
            console.log(high);
            console.log(p);
            console.log(f);
            console.log();
            if(high)
            {
                  this.props.move(this.props.key1[0],this.props.key1[1]);
                  console.log(10);
            }
            else if(p && f)
            {
                  this.props.selected(this.props.key1[0],this.props.key1[1]);
                  console.log(20);
            }
      }
      generateInner = (highlight) =>
      {

            if(highlight)
            {
                  return "highlight";
            }
            return "content";

      }
      // loadImage = (url) => {
      //   import(/* webpackMode: "eager" */ ${url}).then(image => {
      //     this.setState({
      //       image
      //     });
      //   });
      // };
      render () {
            // return (
            //       // <div className="wpace">
            //             <td key={this.props.key}>werwer</td>
            //       // </div>
            // )
            // console.log(this.props);
            const {url, changeBackground, full, playable} = this.props.content;
            //this.loadImage(url);
            // const images = require.context(url1, true);
            // let img = images('./' + props.imageName); `${path}`
            // console.log(url);
            // console.log(url.length);
            // console.log(changeBackground);
            // console.log(full);
            // console.log(playable);
            var style = this.generateInner(changeBackground);
            //const { image } = this.state.img;
            //{image && <img src={image} alt="" />}'../assets/'


            if((this.props.key1[0]%2) != (this.props.key1[1]%2))
            {
                  return (
                              <td className="space1" onClick={this.select.bind(this, changeBackground, playable, full)} key={this.props.key}>
                                    <div className={style}>
                                          <div className="image">
                                                <Image url={url}/>
                                          </div>
                                    </div>

                              </td>
                  )
            }

            else {
                  return (
                              <td className="space" onClick={this.select.bind(this, changeBackground, playable, full)} key={this.props.key}>
                                    <div className={style}>
                                          <div className="image">
                                                <Image url={url}/>
                                          </div>
                                    </div>
                              </td>
                  )
            }

      }
}

//PropTypes
Space.proTypes = {
      key1: PropTypes.object.isRequired,
      content: PropTypes.object.isRequired,
      key: PropTypes.object.isRequired,
}

export default Space;
