import React, { Component } from 'react';


import './AppForm.css';

class AppForm extends Component {

  render() {
    let inputURL;
    return(
      <div className="App-form">
        <form onSubmit={
           (event)=>{event.preventDefault();
            inputURL.value!==''&&
            this.props.checkURL(inputURL.value);
           }} >
          <h2>INTRODUCE URL:</h2>
          <input className="in-url" ref={node => inputURL = node} type='text' placeholder='URL'/>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default AppForm;