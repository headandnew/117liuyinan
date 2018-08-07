import { combineReducers } from 'redux'
import * as ActionTypes from '../const/ActionType'

function author (state = {},action){
  switch(action.type){
    case ActionTypes.FETCH_HOMEWORK_INFO_SUC: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.autor
      };
    }
    default:
      return state;
  }
}

function classes (state = {},action){
  switch(action.type){
    case ActionTypes.FETCH_HOMEWORK_INFO_SUC: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.classes
      };
    }
    default:
      return state;
  }
}

function comments (state = {},action){
  switch(action.type){
    case ActionTypes.FETCH_HOMEWORK_INFO_SUC: {
      const entities =  action.response.entities
      console.log(entities)
      return {
        ...state,
        ...entities.comments
      };
    }
    default:
      return state;
  }
}

function homeworkList (state = {},action){
  switch(action.type){
    case ActionTypes.FETCH_HOMEWORK_INFO_SUC: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.homeworkList
      };
    }
    default:
      return state;
  }
}

export default combineReducers({
  classes,
  homeworkList,
  comments,
  author
});

