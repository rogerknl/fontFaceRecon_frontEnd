import React, { Component } from 'react';



import './AppViewColor.css';

class AppViewColor extends Component {
  render() {
    const styleColorDot = {
      backgroundColor: this.props.color,
      marginLeft: '10px'
    }

    return(
      <div className="App-view-Color">
        <p className="colorDescript"><span className="bold">Color {this.props.variant}: {this.props.color}</span>  <span className="dot" style={styleColorDot}></span></p>
      </div>
    );
  }
}

export default AppViewColor;