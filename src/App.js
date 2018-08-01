import React from 'react';
import Op from './container/Op.js';
import { Provider } from 'react-redux';

import  configureStore from './store/configureStore'
import 'antd/dist/antd.css';


const store=configureStore();
export default class App extends React.Component {



  render() {

    return (
      <Provider store={store}>
       <Op />
      </Provider> 
   
    )
  }
}
