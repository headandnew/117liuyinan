import React from 'react';
import Delebtn from '../components/Delebtn.js';
import DialogView from '../components/DialogView.js';
import NavBar from '../components/NavBar';
import { DIALOG_SHOW_STATUS } from '../const';
import '../App.css';
import Nav from '../components/Nav.js'
// const icon = require('./resource/icon_Good_B-2.png');
//import More from './components/More.js'
import icon1 from '../resource/u=2588965882,2465793598&fm=27&gp=0.jpg';
import icon2 from '../resource/u=2767472474,1074210705&fm=27&gp=0.jpg';
import icon0 from '../resource/u=3062426313,3718352357&fm=27&gp=0.jpg';
import More from '../components/More.js';
import { connect } from 'react-redux'
import { handleAddItem as AddTodoCreator } from '../actions'


class Todo extends React.Component {

  constructor(){
    super();

    this.state = {
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
     // isDialogActive: DIALOG_SHOW_STATUS.HIDE,
     // handleItemIndex: null,
     // showMultipleSelect: null,
    }
  }

  // handleItemClick = (message) => {
  //  console.log(message);
 // }
   //更多
  handleItemMoreClick = (index) => {
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.SHOW_MORE_BTN,
      handleItemIndex: index,
    })
   
  }
  // 删除
  handleDeleteItem = () => {
    const { handleItemIndex, messages } = this.state
    const messageTmp = messages.slice()
    messageTmp.splice(handleItemIndex, 1)
    this.setState({
      messages: messageTmp,
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    })
  }
  //多选
  handleMultipleClick = () => {
    const { handleItemIndex } = this.state
    this.setState({
      showMultipleSelect: [handleItemIndex],
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    })
  }
   
  handleSelectItem = index => {
    const { showMultipleSelect } = this.state
    const showMultipleSelectTmp = showMultipleSelect.slice()
    const idx = showMultipleSelectTmp.findIndex(item => item === index)   // 选择数组下标
    if (idx >= 0) {
      showMultipleSelectTmp.splice(idx, 1)
    } else {
      showMultipleSelectTmp.push(index)
    }
    this.setState({
      showMultipleSelect: showMultipleSelectTmp,
    })
  }
   //多选删除
  handleDeleteMultiple = () => {
 const { showMultipleSelect, messages } = this.state
    const messagesTmp = messages.slice();
    function sortNumber(a,b) {
      return b - a
    }
    const showMultipleSelectTmp = showMultipleSelect.sort(sortNumber)
    showMultipleSelectTmp.forEach(item => {
      messagesTmp.splice(item, 1)
 
    })
  
    this.setState({
      messages: messagesTmp,
      showMultipleSelect: null,
    })
    
  }
   //置顶
  handleSetToTop = () => {
    const { handleItemIndex, messages } = this.state
    const messageTmp = messages.slice()
    const message = messageTmp.splice(handleItemIndex, 1)
    messageTmp.unshift(message.pop())
  
    this.setState({
      messages: messageTmp,
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    })
  }
  //close
  handleShowDialog=()=>{

    this.setState({
      isDialogActive:DIALOG_SHOW_STATUS.HIDE,
    })
  }
//展示添加
  handleShowAddViewClick = () => {
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.SHOW_ADD_MESSAGE,
    })
  }
//添加
  handleAddItem = item => {
    const { dispatch } = this.props;
    const action =AddTodoCreator(item);
    dispatch(action);
   /* const newMessages = this.state.messages.slice();
    newMessages.unshift({
      icon: icon2,
      ...item,
    });
    this.setState({
      messages: newMessages,
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    });*/
  }

 //更新后的界面
 
//弹出多选界面
  

  render() {
      const { messages,dispatch }=this.props;
    return (
      <div>
          
        <NavBar onShowAddViewClick={this.handleShowAddViewClick} />
       
     
      <More
            messages={this.state.messages}
            showMultipleSelect={this.state.showMultipleSelect}
            onItemClick={this.handItemClick}
            onItemMoreClick={this.handleItemMoreClick}
            onSelectItem={this.handleSelectItem}
            dispatch={dispatch}
            />
   <Delebtn showMultipleSelect={this.state.showMultipleSelect}
       onDeleteMultiple={this.handleDeleteMultiple}
      
        />
       <Nav />
        <DialogView
          isActive={this.state.isDialogActive}
          onCloseClick={this.handleShowDialog}
          handleAddItem={this.handleAddItem}
          handleDeleteItem={this.handleDeleteItem}
          handleSetToTop={this.handleSetToTop}
          handleMultipleClick={this.handleMultipleClick}
          dispatch={dispatch}
          />
         
      </div>
    );
  }
  
}
function mapStateToProps(state,ownProp){
    // state.messages;
  const props= state;
    return props;
  }
export default connect(mapStateToProps)(Todo);
