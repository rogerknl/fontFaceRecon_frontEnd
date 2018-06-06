import React, { Component } from 'react';
import AppForm from '../form/AppForm';
import AppView from '../view/AppView';

import './AppMain.css';

class AppMain extends Component {

  render() {
    return(
      <div className="App-main">
        <p>Hello from main</p>
        <div className="App-form">
          <AppForm />
        </div>
        <div className="App-view">
          <AppView />
        </div>
      </div>
    );
  }
}

export default AppMain;