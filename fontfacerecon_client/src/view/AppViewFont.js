import React, { Component } from 'react';
import WebFont from 'webfontloader';


import './AppViewFont.css';

class AppViewFont extends Component {


  render() {
    let str = this.props.font.fontFamily.split(',')[0].replace(/\w*=\w*/g,"").replace(/\s+"/,'"').replace(/"/g,'');
    WebFont.load({
      google: {
        families: [str]
      }
    });
    const styleInline = {
      // font: this.props.font.font,
      font: this.props.font.font,
      fontFamily: this.props.font.fontFamily.replace(/\w*=\w*/g,"").replace(/\s+"/,'"'),
      textDecoration:this.props.font.textDecoration
    };

    return(
      <div className="App-view-font">
        <p style={styleInline}> {this.props.font.fontFamily.split(',')[0].replace(/\w*=\w*/g,"").replace(/\s+"/,'"').replace(/"/g,'')} {this.props.font.font.split(' ')[4]}</p>
        <p><span className="bold">Font:</span> {this.props.font.font}</p>
        <p><span className="bold">Color:</span> {this.props.font.color}</p>
        <p><span className="bold">Decoration:</span> {this.props.font.textDecoration}</p>
        <p><span className="bold">Class:</span> {this.props.font.class}</p>
      </div>
    );
  }
}

export default AppViewFont;