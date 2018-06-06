import React, { Component } from 'react';
import AppForm from '../form/AppForm';
import AppView from '../view/AppView';

import './AppMain.css';

class AppMain extends Component {
  checkURL(url){
    console.log(url);
    fetch(`http://127.0.0.1:3030/getStyles?url=${url}`)
    .then(response => response.json())
    .then(styles => console.log(styles));
  }
  render() {
    return(
      <div className="App-main">
        <div className="App-form">
          <AppForm
            checkURL={
              (e)=>{this.checkURL(e)}
            }
          />
        </div>
        <div className="App-view">
          <AppView />
        </div>
      </div>
    );
  }
}

export default AppMain;