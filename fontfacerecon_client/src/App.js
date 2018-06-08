import React, { Component } from 'react';
import AppMain from './main/AppMain';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.png"  className="App-logo" alt="logo" />
        </header>
        <AppMain />
      </div>
    );
  }
}

export default App;
