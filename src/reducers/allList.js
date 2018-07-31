import React from 'react';
import {Icon} from 'antd';

import * as ActionTypes from '../const/ActionTypes'
import { DIALOG_SHOW_STATUS } from '../const';
/*
const init_state= {dataSource : [{
  key: '1',
  banji: '高级班',
  zhuangtai: '进行中',
  kaikeshijian: '2017-04-20',
  jiaoshi:'小白老师',
  shangkelv:'3/21',
  zuoyetijiaolv:'67.98%',
  beidianpingqingkuang:'87.98%',
  dakalv:'3/21',
  manyidu:'90.14%'

}, {
   key: '2',
   banji: '进阶班',
   zhuangtai: '进行中',
   kaikeshijian: '2017-04-21',
   jiaoshi:'小白老师',
   shangkelv:'5/21',
   zuoyetijiaolv:'76.89%',
   beidianpingqingkuang:'31.87%',
   dakalv:'5/21',
   manyidu:'98.14%'

}, {
  key: '3',
  banji: '提高班',
  zhuangtai: '进行中',
  kaikeshijian: '2017-04-22',
  jiaoshi:'小白老师',
  shangkelv:'13/21',
  zuoyetijiaolv:'13.89%',
  beidianpingqingkuang:'21.76%',
  dakalv:'13/21',
  manyidu:'88.01%'

}, {
  key: '4',
  banji: '入门班',
  zhuangtai: '进行中',
  kaikeshijian: '2017-04-23',
  jiaoshi:'小白老师',
  shangkelv:'20/21',
  zuoyetijiaolv:'98.45%',
  beidianpingqingkuang:'98.67%',
  dakalv:'20/21',
  manyidu:'30.10%'

}, {
  key: '5',
  banji: '体验班',
  zhuangtai: '进行中',
  kaikeshijian: '2017-04-24',
  jiaoshi:'小白老师',
  shangkelv:'21/21',
  zuoyetijiaolv:'31.54%',
  beidianpingqingkuang:'78.76%',
  dakalv:'21/21',
  manyidu:'94.10%'

}
],

 columns : [{
  title: '班级',
  dataIndex: 'banji',
  key: 'banji',
  render: text=><div><Icon type="exclamation-circle" />{text}</div>
}, {
  title: '状态',
  dataIndex: 'zhuangtai',
  key: 'zhuangtai',
}, {
  title: '开课时间',
  dataIndex: 'kaikeshijian',
  key: 'kaikeshijian',
}, {
  title: '教师',
  dataIndex: 'jiaoshi',
  key: 'jiaoshi',
  render: text=><div><Icon type="star" />{text}</div>
}, {
  title: '上课率',
  dataIndex: 'shangkelv',
  key: 'shangkelv',
  render:text=>{
    let num1=parseInt(text.split("/")[0],10);
    let num2=parseInt(text.split("/")[1],10);
    let num=num1/num2;
    if(num<0.8){
    return <span className="Red">{text}</span>
    }
    else if(num>0.95){
    return <span className="Orange">{text}</span>
    }
    else{
    return <span>{text}</span>
    }
    }

  
}, {
  title: '作业提交率',
  dataIndex: 'zuoyetijiaolv',
  key: 'zuoyetijiaolv',
  render:text=>{
    let num=parseInt(text, 10);
    if(num<80){
    return <span className="Red">{text}</span>
    }
    else if(num>95){
    return <span className="Orange">{text}</span>
    }
    else{
    return <span>{text}</span>
    }
    }
  
}, {
  title: '被点评情况',
  dataIndex: 'beidianpingqingkuang',
  key: 'beidianpingqingkuang',
  render:text=>{
    let num=parseInt(text, 10);
    if(num<80){
    return <span className="Red">{text}</span>
    }
    else if(num>95){
    return <span className="Orange">{text}</span>
    }
    else{
    return <span>{text}</span>
    }
    }
}, {
  title: '打卡率',
  dataIndex: 'dakalv',
  key: 'dakalv',
  render:text=>{
    let num1=parseInt(text.split("/")[0],10);
    let num2=parseInt(text.split("/")[1],10);
    let num=num1/num2;
    if(num<0.8){
    return <span className="Red">{text}</span>
    }
    else if(num>0.95){
    return <span className="Orange">{text}</span>
    }
    else{
    return <span>{text}</span>
    }
    }
}, {
  title: '满意度',
  dataIndex: 'manyidu',
  key: 'manyidu',
  render:text=>{
    let num=parseInt(text, 10);
    if(num<80){
    return <span className="Red">{text}</span>
    }
    else if(num>95){
    return <span className="Orange">{text}</span>
    }
    else{
    return <span>{text}</span>
    }
    }
}],

 dataSource1 : [{
  key: '1',
  banji: '高级班',
  zhuangtai: '已结束',
  kaikeshijian: '2017-04-30',
  jiaoshi:'小白老师',
  shangkelv:'21/21',
  zuoyetijiaolv:'8/10',
  beidianpingqingkuang:'10/10',
  dakalv:'5/21',
  manyidu:'90.00%'

}],
 columns1 : [{
  title: '班级',
  dataIndex: 'banji',
  key: 'banji',
 
}, {
  title: '状态',
  dataIndex: 'zhuangtai',
  key: 'zhuangtai',
}, {
  title: '开课时间',
  dataIndex: 'kaikeshijian',
  key: 'kaikeshijian',
}, {
  title: '教学组责任人',
  dataIndex: 'jiaoshi',
  key: 'jiaoshi',
}, {
  title: '上课率',
  dataIndex: 'shangkelv',
  key: 'shangkelv',
  render:text=>{
    let num1=parseInt(text.split("/")[0],10);
    let num2=parseInt(text.split("/")[1],10);
    let num=num1/num2;
    if(num<0.8){
    return <span className="Red">{text}</span>
    }
    else if(num>0.95){
    return <span className="Orange">{text}</span>
    }
    else{
    return <span>{text}</span>
    }
    }
}, {
  title: '作业提交率',
  dataIndex: 'zuoyetijiaolv',
  key: 'zuoyetijiaolv',
  render:text=>{
    let num1=parseInt(text.split("/")[0],10);
    let num2=parseInt(text.split("/")[1],10);
    let num=num1/num2;
    if(num<0.8){
    return <span className="Red">{text}</span>
    }
    else if(num>0.95){
    return <span className="Orange">{text}</span>
    }
    else{
    return <span>{text}</span>
    }
    }
}, {
  title: '被点评情况',
  dataIndex: 'beidianpingqingkuang',
  key: 'beidianpingqingkuang',
  render:text=>{
    let num1=parseInt(text.split("/")[0],10);
    let num2=parseInt(text.split("/")[1],10);
    let num=num1/num2;
    if(num<0.8){
    return <span className="Red">{text}</span>
    }
    else if(num>0.95){
    return <span className="Orange">{text}</span>
    }
    else{
    return <span>{text}</span>
    }
    }
}, {
  title: '打卡率',
  dataIndex: 'dakalv',
  key: 'dakalv',
  render:text=>{
    let num1=parseInt(text.split("/")[0],10);
    let num2=parseInt(text.split("/")[1],10);
    let num=num1/num2;
    if(num<0.8){
    return <span className="Red">{text}</span>
    }
    else if(num>0.95){
    return <span className="Orange">{text}</span>
    }
    else{
    return <span>{text}</span>
    }
    }
}, {
  title: '满意度',
  dataIndex: 'manyidu',
  key: 'manyidu',
  render:text=>{
    let num=parseInt(text, 10);
    if(num<80){
    return <span className="Red">{text}</span>
    }
    else if(num>95){
    return <span className="Orange">{text}</span>
    }
    else{
    return <span>{text}</span>
    }
    }
}]
}
export default function allList(state = init_state, action){
  switch(action.type){
    default:
    return state;
    
  }
      
}*/
const init_state = {
  learningLessonsList: [],
  historyLessonsList: []
}

export default function tablelist(state = init_state, action) {
  switch (action.type) {
    case ActionTypes.FETCH_LESSONINFO_SUC:

      let learningLessonsList = action.data.currentLessonsList;
      let historyLessonsList1 = action.data.historyLessonsList;
    
      return Object.assign({}, state, { learningLessonsList, historyLessonsList:historyLessonsList1 })
    case ActionTypes.FETCH_USERINFO_SUC:
      let historyLessonsList = action.next.data.historyLessonsList;
      return Object.assign({}, state, { historyLessonsList })
    default:
      return state;
  }
} 