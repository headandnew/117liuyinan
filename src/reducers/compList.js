import * as ActionTypes from '../const/ActionTypes'







                               

const init_state= {fixedMsg : {
 
  xueyuanbianhao: '学员编号',
  zhuangtai: '在学课程',
  kaikeshijian: '入学时间',
  jiaoshi:'历史付费额',
  shangkelv:'累计学习天数',
  zuoyetijiaolv:'最后登录日期',
  
},
 personalMsg:{

 
  xueyuanbianhao: 'MID3309000002',
  zhuangtai: '摄影课 绘画课',
  kaikeshijian: '2018-03-30',
  jiaoshi:'987',
  shangkelv:'876天',
  zuoyetijiaolv:'2018-03-30',
  

 }
}
export default function compList(state = init_state, action){
  switch(action.type){
    default:
    return state;
    
  }
      
}