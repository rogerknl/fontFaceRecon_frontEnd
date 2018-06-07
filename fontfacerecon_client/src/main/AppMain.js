import React, { Component } from 'react';
import AppForm from '../form/AppForm';
import AppViewTag from '../view/AppViewTag';

import './AppMain.css';

class AppMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      styles: [],
      error: []
    }
  }
  checkURL(url){
    fetch(`http://127.0.0.1:3030/getStyles?url=${url}`)
    .then(response => response.json())
    .then(styles => {
      if (styles.errors){
        console.log(styles.errors)
        this.setState({error: styles.errors});
      }
      else {
        this.setState({
          img: styles.img,
          styles : styles.styles,
          error:[]
        });
      }
    });
  }
  render() {
    let aux, content;
    //loading img if exist
    if (this.state.img) aux = <img src={`data:image/jpeg;base64,${this.state.img}`} alt="site"/>

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
        {content}
      </div>
    );
  }
}

export default AppMain;