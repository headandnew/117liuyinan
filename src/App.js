import React from 'react';
import Op from './container/Op.js';

import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer  from './reducers'
import { createLogger } from 'redux-logger';
import 'antd/dist/antd.css';


const logger = createLogger();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
  )
)

export default class App extends React.Component {



  render() {

    return (
      <Provider store={store}>
       <Op />
      </Provider> 
   
    )
  }
}
