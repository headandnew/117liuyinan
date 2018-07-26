import React from 'react';
import Delebtn from '../components/Delebtn.js';
import DialogView from '../components/DialogView.js';
import NavBar from '../components/NavBar';
import { DIALOG_SHOW_STATUS } from '../const';
import '../App.css';
import Nav from '../components/Nav.js'
// const icon = require('./resource/icon_Good_B-2.png');
//import More from './components/More.js'

import More from '../components/More.js';
import { connect } from 'react-redux'
import icon0 from '../resource/u=2767472474,1074210705&fm=27&gp=0.jpg'
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../actions'


class Todo extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
     // handleItemIndex: null,
      showMultipleSelect: null,
    }
  }

  // handleItemClick = (message) => {
  //  console.log(message);
 // }
   //更多
   handleItemMoreClick = (index) => {
    const { todoActions } = this.props;
    todoActions.setChatSelectIdx(index)
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.SHOW_MORE_BTN,
    })
  }
  // 删除
  handleDeleteItem = () => {
    const { compList, handleItemIndex, todoActions } = this.props
    const messageTmp = compList.messages.slice()
    messageTmp.splice(handleItemIndex, 1)
    todoActions.acSetChatMessages(messageTmp)
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    })
  }
/*
  //多选
  handleMultipleClick = () => {
    const { handleItemIndex, dispatch } = this.props
    dispatch(setChatMultipleSelect([handleItemIndex]))
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    })
  }*/
/*
  handleSelectItem = index => {
    const { showMultipleSelect, todoActions } = this.props
    const showMultipleSelectTmp = showMultipleSelect.slice()
    const idx = showMultipleSelectTmp.findIndex(item => item === index)
    if (idx >= 0) {
      showMultipleSelectTmp.splice(idx, 1)
    } else {
      showMultipleSelectTmp.push(index)
    }
    todoActions.setChatMultipleSelect(showMultipleSelectTmp)
  }
*/
   //多选删除
  /* handleDeleteMultiple = () => {
    const { showMultipleSelect, messages, dispatch } = this.props
    const messagesTmp = messages.slice()
    let showMultipleSelectTmp = showMultipleSelect.slice()
    showMultipleSelectTmp = showMultipleSelectTmp.sort((a, b) => b - a)
    showMultipleSelectTmp.forEach(item => {
      messagesTmp.splice(item, 1)
    })
    dispatch(acSetChatMessages(messagesTmp))
  }*/

  handleSetToTop = () => {
    const { handleItemIndex, compList,allList, todoActions } = this.props
    const messageTmp = compList.messages.slice()
    const message = messageTmp.splice(handleItemIndex, 1)
    messageTmp.unshift({
      ...message.pop(),
      isToTop: true,
    })
    todoActions.acSetChatMessages(messageTmp)
    this.setState({
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
  const { compList,todoActions } = this.props;
  const newMessages = compList.messages.slice();
  let firstNotTopIdx = -1;
  newMessages.forEach((item, idx) => {
    if (item.isToTop) {
      firstNotTopIdx = idx
    }
  });
  newMessages.splice(firstNotTopIdx + 1, 0, {
    icon: icon0,
    isToTop: false,
    ...item,
  });
  todoActions.acSetChatMessages(newMessages)
  this.setState({
    isDialogActive: DIALOG_SHOW_STATUS.HIDE,
  });
}

 //更新后的界面
 
//弹出多选界面
  

  render() {
    
      const { compList }=this.props;
     
 
    return (
      <div>
          
        <NavBar onShowAddViewClick={this.handleShowAddViewClick} />
       
     
      <More
            messages={compList.messages}
            showMultipleSelect={this.state.showMultipleSelect}
            onItemClick={this.handItemClick}
            onItemMoreClick={this.handleItemMoreClick}
            onSelectItem={this.handleSelectItem}
           
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
      
          />
         
      </div>
    );
  }
  
}

/*
function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}*/
function mapStateToProps(state,ownProps){
  // state.list;
  const { allList, compList } = state;
  return { allList, compList };
}

function mapDispatchToProps(dispatch){
  return {
    todoActions: bindActionCreators(todoActionCreators, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);
