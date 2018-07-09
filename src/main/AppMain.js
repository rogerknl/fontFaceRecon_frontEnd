import React, { Component } from 'react';



import AppViewTag from '../view/AppViewTag';

import './AppMain.css';

class AppMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      styles: [{
        h1: [{
          fontFamily: 'Lora, "Times New Roman", serif',
          color: ['rgb(245,245,245)'],
          font: 'normal normal 300 normal 50px / 60px Lora, "Times New Roman", serif',
          textDecoration: "none solid"}]
      },{
        h2:[{
          fontFamily: '"Permanent Marker", "Times New Roman", serif',
          color: ['rgb(245,245,245)'],
          font: 'normal normal 300 normal 40px / 50px "Permanent Marker", "Times New Roman", serif',
          textDecoration: "none solid"}]
      },{
        h3:[{
          fontFamily: 'Pacifico, "Times New Roman", serif',
          color: ['rgb(245,245,245)'],
          font: 'normal normal 300 normal 30px / 40px Pacifico, "Times New Roman", serif',
          textDecoration: "none solid"}]
      }],
      error: [],
      img:'',
      waiting:false,
      loaded: false,
    }
  }
  checkURL(url){
    this.setState({
      img: '',
      error:[],
      waiting: true,
      loaded: false,
    });
    fetch(`http://51.38.230.154:3030/getStyles?url=${url}`)
    .then(response => response.json())
    .then(styles => {
      if (styles.errors){
        console.log(styles.errors)
        this.setState({
          error: styles.errors,
          waiting: false,
          loaded: false,
        });
      }
      else {
        console.log(styles.styles)
        this.setState({
          img: styles.img,
          styles : styles.styles,
          error:[],
          waiting: false,
          loaded: true,
        });
      }
    });
  }
  render() {
    let aux, content, waiting;
    //loading img if exist
    if (this.state.img !== '') aux = (
      <div className="App-site-img">
        <p>This is your site Auto Font Style Guide:</p>
        <img className="img-remote-site" src={`data:image/jpeg;base64,${this.state.img}`} alt="site"/>
      </div>
    )
    else aux = (
      <div className="App-site-not-loaded">
        <p>Type your website to get a font style sheet like this:</p>
      </div>
    )

    //render all fonts if there is no error in fetch
    if ( this.state.error.length === 0 ) {
       content = (
        <div className="App-content">
            {aux}
          <div className="App-view">
          {this.state.styles.map(tagSty =>
           <AppViewTag
              key={Object.keys(tagSty)[0]}
              tag={Object.keys(tagSty)[0]}
              fonts={tagSty[Object.keys(tagSty)[0]] }
              waiting={this.state.waiting}
              opacity={this.state.loaded?1:0.5}
            >
            </AppViewTag>)}
          </div>
        </div>
      );
    }
    //render error when fetch fails
    else {
      content = (
        <div className="App-content">
          <div className="App-site-not-reached">
            <p>Error while trying to reach the URL</p>
          </div>
        </div>
      );

    }

    return(
      <div className="App-main">
        {waiting}
        {content}
      </div>
    );
  }
}

export default AppMain;