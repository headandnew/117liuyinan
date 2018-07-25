import { ADD_TODO, CHANGE_TODO_STATUS } from '../const/ActionTypes'

export function handleAddItem(title,descript,time){
  return {
    type: ADD_TODO,
    
    title,
    descript,
    time


  }
}

export function changeStatus(idx, isCompleted){
  return {
    type: CHANGE_TODO_STATUS,
    idx,
    isCompleted
  }
}