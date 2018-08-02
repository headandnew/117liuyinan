import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';



export default class App extends React.Component {

  constructor(props){
    super(props);
  }


    render() {
      const { children } = this.props
      return (
        <div>
          {children}
        </div>
      );
    }
  }
  
