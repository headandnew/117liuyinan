import * as ActionTypes from '../const/ActionTypes'
import icon1 from '../resource/u=2588965882,2465793598&fm=27&gp=0.jpg';
import icon2 from '../resource/u=2767472474,1074210705&fm=27&gp=0.jpg';
import icon0 from '../resource/u=3062426313,3718352357&fm=27&gp=0.jpg';
import { DIALOG_SHOW_STATUS } from '../const';







                               

function compList(state={
messages: [
    {
      icon: icon1,
      title: '小年糕',
      descript: '。。。',
      time: '7-18 11:14',
      isToTop: false,
    },
    {
      icon: icon2,
      title: '前端训练营',
      descript: '大家好',
      time: '7-18 11:15',
      isToTop: false,
    },
    {
      icon: icon0,
      title: '小王',
      descript: 'hi 你好',
      time: '昨天',
      isToTop: false,
    }
  ],
  handleItemIndex: null,
  showMultipleSelect: null,              
},action) {


  switch (action.type) {
    case ActionTypes.SET_CHAT_MESSAGES:
      return { ...state,
        messages: action.messages,
        showMultipleSelect: null,
      }
  
    case ActionTypes.SET_CHAT_MULTIPLE_SELECT:
      return { ...state,
        showMultipleSelect: action.messages,
      }
    default:
      return state
  }
}

export default compList