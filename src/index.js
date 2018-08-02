
import { Provider } from 'react-redux'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router';
import Op from './container/Op';
import Student from './container/Student';
import Class from './container/Class';
const store = configureStore();


const routes = [{
path: '/',
component: App,
indexRoute: { component: Op },
childRoutes: [
{ path: 'student', component: Student },
{ path: 'class', component: Class },
{ path: 'op', component: Op },


]
}]

ReactDOM.render(
<Provider store={store}>
<Router routes={routes} history={browserHistory}/>
</Provider>,
document.getElementById('root')
);
registerServiceWorker();
