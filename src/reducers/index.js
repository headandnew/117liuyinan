import { ADD_TODO, CHANGE_TODO_STATUS } from '../const/ActionTypes'
import icon1 from '../resource/u=2588965882,2465793598&fm=27&gp=0.jpg';
import icon2 from '../resource/u=2767472474,1074210705&fm=27&gp=0.jpg';
import icon0 from '../resource/u=3062426313,3718352357&fm=27&gp=0.jpg';
import { DIALOG_SHOW_STATES } from '../const'


const inilailState={
messages: [
    {
      icon: icon1,
      title: '小年糕',
      descript: '。。。',
      time: '7-18 11:14'
    },
    {
      icon: icon2,
      title: '前端训练营',
      descript: '大家好',
      time: '7-18 11:15',
    },
    {
      icon: icon0,
      title: '小王',
      descript: 'hi 你好',
      time: '昨天',
    }
  ],
  // showDialog: DIALOG_SHOW_STATES.HIDE,
}

export default function todoMsglist(state = inilailState,action){
  switch(action.type){
    case ADD_TODO:{
      const newmessages = state.messages.slice();
      newmessages.unshift({
        title:action.title,
        descript:action.descript,
        time:action.time
       
      });
      const newState = { ...state };
      newState.messages = newmessages;
      return newState;
    }
    case CHANGE_TODO_STATUS: {
      const newmessages = state.messages.slice();
      const { idx, isCompleted } = action;
      newmessages[idx] = {...newmessages[idx], isCompleted };
      const newState = { ...state };
      newState.messages = newmessages;
      return newState;
    }
    default:
    return inilailState;
  }
}