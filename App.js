import React from 'react';
import MessageItemView from './components/MessageItem.js';
import DialogView from './components/DialogView.js';
import './App.css';
import FuctionView from './components/FunctionView.js';
// const icon = require('./resource/icon_Good_B-2.png');

import icon1 from './img/u=2588965882,2465793598&fm=27&gp=0.jpg';
import icon2 from './img/u=2767472474,1074210705&fm=27&gp=0.jpg';
import icon3 from './img/u=3062426313,3718352357&fm=27&gp=0.jpg';
import icon4 from './img/对话信息.png';
import icon5 from './img/通讯录.png';
import icon6 from './img/搜索.png';
import icon7 from './img/用户.png';
import icon8 from './img/添加.png';




class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      messages: [
        {
          icon: icon1,
          title: '小年糕',
          descript: 'hello 小年糕',
          time: '7-18 11:14'
        },
        {
          icon: icon2,
          title: '小板凳',
          descript: 'hello 小板凳',
          time: '7-18 11:15',
        },
        {
          icon: icon3,
          title: '小豆包',
          descript: 'hi 小豆包',
          time: '7-17 10:00',
        }
      ],
      isDialogActive: false
    }
  }

  onItemClick = (message) => {
    console.log(message);
  }

    handleAddItem = () => {
    const newMessages = this.state.messages.slice();
    newMessages.unshift({
      icon: icon3,
      title: '小年糕',
      descript: '哎呦不错',
      time: '20180719'
    });
    this.setState({
      messages: newMessages
    });
  }
 
  handleShowDialog = isActive => {
    this.setState({ isDialogActive: isActive });
    
  }
  handleShowDialog1 = isActive => {
    this.setState({ isDialogActive1: isActive });
    
  }


  renderMessageList = () => {
    const messageViews = this.state.messages.map((item,i) => {
      return <MessageItemView key={i} item={item} onClick={this.onItemClick}/>
    });
    return messageViews;
  }

  render() {
    return (
      <div>
       <div className="chat-top">
               微信                 
         <img src={icon8} onClick={this.handleShowDialog.bind(this, true)}/>  
       </div>
   
        { this.renderMessageList()   
                                        }
       
     
        <nav className="chat-nav">
          <div className="chat-nav__item" onClick={this.handleAddItem}>
            <img className="chat-nav__item__icon" src={icon4} alt="" />
            <div className="chat-nav__item__name">微信</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon5} alt="" />
            <div className="chat-nav__item__name">通讯录</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon6} alt="" />
            <div className="chat-nav__item__name">发现</div>
          </div>
          <div className="chat-nav__item" >
            <img className="chat-nav__item__icon" src={icon7} alt="" />
            <div className="chat-nav__item__name">我</div>
          </div>
        </nav>
        <DialogView isActive={this.state.isDialogActive} onCloseClick={this.handleShowDialog} e={this.handleAddItem}/>
       <FuctionView isActive={this.state.isDialogActive1} em={this.handleShowDialog}/>
      

      </div>
    );
  }
}

export default App;
