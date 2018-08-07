import * as ActionTypes from '../const/ActionType';

const initState = {
    homeworkList:{}
}

export default function homeworkdata(state = initState,action){
    switch(action.type){
        case ActionTypes.FETCH_HOMEWORK_INFO_SUC:
            const homeworkList = action.response.data;
            return Object.assign({...state}, { homeworkList })
        default:
            return state;
        }
}