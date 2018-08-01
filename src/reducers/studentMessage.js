import * as ActionTypes from '../const/ActionTypes';
const initState = {
    
    LessonsList:'',
    historyLessonsList:'',
    StudentList:'',
    LearnList:'',
}

export default function studentMessage(state = initState,action){
   
    switch(action.type){
        case ActionTypes.FETCH_LESSON_INFO_SUC:
            const LessonsList = action.response.data.currentLessonsList;
            const historyLessonsList = action.response.data.historyLessonsList;
            return Object.assign({...state}, { LessonsList, historyLessonsList })
        case ActionTypes.FETCH_STUDENT_INFO_SUC:
            const StudentList = action.response.data;
            return Object.assign({...state}, { StudentList })
        case ActionTypes.FETCH_LEARN_INFO_SUC:
            const LearnList = action.response.data.list;
            return Object.assign({...state}, { LearnList })
        default:
            return state;}
}