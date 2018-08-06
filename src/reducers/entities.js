import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'


function classes (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`: {
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

function teachers (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.teachers
      };
    }
    default:
      return state;
  }
}

function satisfiled (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.satisfiled
      };
    }
    case `${ActionTypes.REPLY_USER_FEED_BACK}`: {
      const { time } = action.params
      
      const targetItem = { ...state[time] }
      targetItem.reply_status = 1

      const nextState = { ...state, [time]: targetItem }
      return nextState
    }
    default:
      return state;
  }
}

function classes1 (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.classes1
      };
    }
    default:
      return state;
  }
}


function teachers1 (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.teachers1
      };
    }
    default:
      return state;
  }
}
function lessonList (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.lessonList
      };
    }
    default:
      return state;
  }
}


export default combineReducers({
  classes,
  teachers,
  satisfiled,
  classes1,
  teachers1,
  lessonList,
  
});