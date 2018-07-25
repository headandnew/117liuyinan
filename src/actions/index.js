import { ADD_TODO, CHANGE_TODO_STATUS } from '../const/ActionTypes'

export function handleAddItem(icon,title,descript,time){
  return {
    type: ADD_TODO,
    icon,
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