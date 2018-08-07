import * as ActionTypes from '../const/ActionType';
import { normalize } from 'normalizr'
import * as schemes from '../schema/index'



export function fetchHomeWorkInfo(token,isReviewed) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_HOMEWORK_INFO,
      endpoint: '/getHomeWork',
      params: {
        token,
        isReviewed
      },
      normailzerFun:response=> {
        return normalize(response.data, schemes.HOMEWORKLIST)
      }
    }
  }
}


export function changeWorkStatus(status,i){
  return {
    type:ActionTypes.CHANGE_WORK_STAUS,
    status,
    i
  }
}
