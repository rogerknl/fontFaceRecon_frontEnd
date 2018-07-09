import React, { Component } from 'react';



import './AppViewColor.css';

class AppViewColor extends Component {
  render() {
    const styleColorDot = {
      backgroundColor: this.props.color,
      marginLeft: '10px'
    }
    const color = this.props.color.replace(/\w*\(|\).*|\s/gm,'').split(',');
    const colorHex = '#'+Number(color[0]).toString(16)+Number(color[1]).toString(16)+Number(color[2]).toString(16);

    return(
      <div className="App-view-Color">
        <p className="colorDescript"><span>Color {this.props.variant}: {this.props.color} or {colorHex}</span>  <span className="dot" style={styleColorDot}></span></p>
      </div>
    );
  }
}

export default AppViewColor;