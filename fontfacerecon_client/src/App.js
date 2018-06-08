import React, { Component } from 'react';
import AppMain from './main/AppMain';
import AppForm from './form/AppForm';
import './App.css';

class App extends Component {
  //Catch the event and send it to AppMain
  checkURL(url) {
    this.search.checkURL(url);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.png"  className="App-logo" alt="logo" />
          <div className="App-form">
          <AppForm
            checkURL={
              (e)=>{this.checkURL(e)}
            }
          />
        </div>
        </header>
        <AppMain ref={appMain => this.search = appMain}/>
      </div>
    );
  }
}

export default App;
