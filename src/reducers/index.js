import { combineReducers } from 'redux';

import studentMessage from './studentMessage';
import classState from './classState';
import tableColumns from './tableColumns';


export default combineReducers({
 
  studentMessage,
  classState,
  tableColumns
  
});


