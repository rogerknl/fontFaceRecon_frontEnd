import React, { Component } from 'react';
import AppForm from '../form/AppForm';
import AppViewTag from '../view/AppViewTag';

import './AppMain.css';

class AppMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      styles: [],
      error: [],
      img:'',
      waiting:false
    }
  }
  checkURL(url){
    this.setState({
      img: '',
      styles : [],
      error:[],
      waiting: true
    });
    fetch(`http://127.0.0.1:3030/getStyles?url=${url}`)
    .then(response => response.json())
    .then(styles => {
      if (styles.errors){
        console.log(styles.errors)
        this.setState({
          error: styles.errors,
          waiting: false
        });
      }
      else {
        this.setState({
          img: styles.img,
          styles : styles.styles,
          error:[],
          waiting: false
        });
      }
    });
  }
  render() {
    let aux, content, waiting;
    if (this.state.waiting) waiting = (
      <div className="icon-hourglass">
        <span role="img" aria-label="Waiting" >🌀</span>
      </div>);
    //loading img if exist
    if (this.state.img !== '') aux = <img className="img-remote-site" src={`data:image/jpeg;base64,${this.state.img}`} alt="site"/>

    //render all fonts if there is no error in fetch
    if ( this.state.error.length === 0 ) {
       content = (
        <div className="App-content">
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
    //render error when fetch fails
    else {
      content = (
        <div className="App-content">
          <p>Error while trying to reach the URL</p>
        </div>
      );

    }

    return(
      <div className="App-main">
        <div className="App-form">
          <AppForm
            checkURL={
              (e)=>{this.checkURL(e)}
            }
          />
        </div>
        {waiting}
        {content}
      </div>
    );
  }
}

export default AppMain;