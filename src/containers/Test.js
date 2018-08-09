import React from 'react';
import ActionSheet from '../components/weui/ActionSheet';
import AndroidActionSheet from '../components/weui/AndroidActionSheet'


export default class DemoExample extends React.Component {
  state = {
    isActionSheetActive: false,
    title: '',
    menus: [],
    type:''
  };

  handleShowActionSheet = () => {
    this.setState({
      isActionSheetActive: true,
      type:'ios',
      title: '这是一个标题',
      menus: [{
        title: '示例菜单1',
        click: () => console.log('示例菜单1')
      }, {
        title: '示例菜单2',
        click: () => console.log('示例菜单2')
      }]
    });
  }

  handleShowActionSheet2 = () => {
    this.setState({
      isActionSheetActive: true,
      type:'android',
      title: '示例菜单',
      menus: [{
        title: '示例菜单1',
        click: () => console.log('示例菜单1')
      }, {
        title: '示例菜单2',
        click: () => console.log('示例菜单2')
      }]
    });
  }

  handleHideActionSheet = () => {
    this.setState({
      isActionSheetActive: false
    });
  }
renderHandle=()=>{
  const {type}  =this.state 
  if (type == 'ios'){
    return  <ActionSheet
    isActive={this.state.isActionSheetActive}
    title={this.state.title}
    menus={this.state.menus}
    onCancel={this.handleHideActionSheet}
    type={this.state.type}
  />
  }else if(type == 'android'){
    return <AndroidActionSheet
    isActive={this.state.isActionSheetActive}
    title={this.state.title}
    menus={this.state.menus}
    onCancel={this.handleHideActionSheet}
    type={this.state.type}/>
  }

}
  render() {
    return (
      <div>
          {/* <input type="range" name="points" min="1" max="10" />  */}
        <div onClick={this.handleShowActionSheet}>iOS actionsheet</div>
        <div onClick={this.handleShowActionSheet2}>Android actionsheet</div>
         {/* <Progress/>   */}
        {/* <Switch/> */}
       {this.renderHandle()}
           
       
         
       
      </div>
    );
}
}
