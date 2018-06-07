import React, { Component } from 'react';
import AppViewFont from '../view/AppViewFont';

import './AppViewTag.css';

class AppViewTag extends Component {

  render() {
    let snf;
    if ( this.props.fonts.length === 0) snf = 'Selector not found';
    let keyAux=0;
    return(
      <div className="App-view-tag">
        <h3>{'<'+this.props.tag+'>'}</h3>
        {snf}
        {
          this.props.fonts.map(font =>
          <AppViewFont
            key={this.props.tag + keyAux++}
            font={font}
          >
          </AppViewFont>)}
      </div>
    );
  }
}

export default AppViewTag;