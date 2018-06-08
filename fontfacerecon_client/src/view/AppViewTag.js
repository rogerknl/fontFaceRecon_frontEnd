import React, { Component } from 'react';
import AppViewFont from '../view/AppViewFont';

import './AppViewTag.css';

class AppViewTag extends Component {

  render() {
    let keyAux=0, snf = (<div className="empty-div"></div>);
    if ( this.props.fonts.length > 0){
      snf = (
        <div className="App-view-tag">
        {
          this.props.fonts.map(font =>
          <AppViewFont
            key={this.props.tag + keyAux++}
            font={font}
            tag={this.props.tag}
          >
          </AppViewFont>)}
      </div>
      );
    }
    return snf;
  }
}

export default AppViewTag;