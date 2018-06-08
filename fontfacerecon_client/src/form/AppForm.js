import React, { Component } from 'react';
import { Input } from 'antd';

import './AppForm.css';

const Search = Input.Search;
class AppForm extends Component {

  render() {
    return(
      <div className="App-form">
        <form onSubmit={(e)=>e.preventDefault()}>
          <Search
            placeholder="https://yourwebsite.com"
            enterButton="Scan"
            size="large"
            onSearch={(value)=>{
            value!==''&&
            this.props.checkURL(value);
           }}/>
        </form>
      </div>
    );
  }
}

export default AppForm;