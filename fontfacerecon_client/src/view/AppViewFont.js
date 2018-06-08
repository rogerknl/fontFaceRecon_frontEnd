import React, { Component } from 'react';
import WebFont from 'webfontloader';

import { Table } from 'antd';



import AppViewColor from '../view/AppViewColor';
import './AppViewFont.css';


class AppViewFont extends Component {

  render() {
    //first load google fonts using webfont
    let str = this.props.font.fontFamily.split(',')[0].replace(/\w*=\w*/g,"").replace(/\s+"/,'"').replace(/"/g,'');
    WebFont.load({
      google: {
        families: [str]
      }
    });

    //
    let variant = 1;
    const styleInline = {
      font: this.props.font.font,
      fontFamily: this.props.font.fontFamily.replace(/\w*=\w*/g,"").replace(/\s+"/,'"'),
      textDecoration:this.props.font.textDecoration
    };
    const auxs = this.props.font.color.map(color =>
      <AppViewColor
        variant={ variant++ }
        key={ variant }
        color={color}
      >
      </AppViewColor>)
    const dataSource = [{
      key: '1',
      data: (<span style={styleInline} >
        {this.props.font.fontFamily.split(',')[0]
          .replace(/\w*=\w*/g,"")
          .replace(/\s+"/,'"')
          .replace(/"/g,'')}
        {this.props.font.font.split(' ')[4]}</span>),
    }, {
      key: '2',
      data: `Font: ${this.props.font.font}`,
    }, {
      key: '3',
      //data: `colors: ${this.props.font.color} <span>asd</span>`,
      data:(<div className="App-view-color-pre">{auxs}</div>),
    }, {
      key: '4',
      data: `Decoration: ${this.props.font.textDecoration}`
    },
    ];

    const columns = [{
      title: this.props.tag,
      dataIndex: 'data',
      key: 'data',
    }];



    return(
      <div className="App-view-font">

        <Table
          dataSource={dataSource}
          columns={columns}
          bordered={true}
          pagination={false}
        />
      </div>
    );
  }
}

export default AppViewFont;