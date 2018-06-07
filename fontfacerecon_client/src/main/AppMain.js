import React, { Component } from 'react';
import AppForm from '../form/AppForm';
import AppViewTag from '../view/AppViewTag';

import './AppMain.css';

class AppMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      styles: []
    }
  }
  checkURL(url){
    fetch(`http://127.0.0.1:3030/getStyles?url=${url}`)
    .then(response => response.json())
    .then(styles => this.setState({
      img: styles[0],
      styles : styles[1]
    }));
  }
  render() {
    let aux;
    if (this.state.img) aux = <img src={`data:image/jpeg;base64,${this.state.img}`} alt="site"/>
    return(
      <div className="App-main">
        <div className="App-form">
          <AppForm
            checkURL={
              (e)=>{this.checkURL(e)}
            }
          />
        </div>
        <div className="App-site-img">
          {aux}
        </div>
        <div className="App-view">
        {this.state.styles.map(tagSty =>
          <AppViewTag
            key={Object.keys(tagSty)[0]}
            tag={Object.keys(tagSty)[0]}
            fonts={tagSty[Object.keys(tagSty)[0]] }>
          </AppViewTag>)}
        </div>
      </div>
    );
  }
}

export default AppMain;