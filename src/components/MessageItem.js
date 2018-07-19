import React, { Component } from 'react';

export default class MessageItem extends Component {



  
  onMsgClick = () => {
    const { onClick, item } = this.props;
   
    if (onClick) {
      onClick(item);
    }
  }
  handleShowDialog = isActive => {
 
    this.setState({ isDialogActive: isActive });
   
  }

  render(){
    const { item } = this.props;
    const{ more }=this.props;
   
    return(
      <li className="chat-list__item" >
        <img className="chat-list__item__avatar" src={item.icon} alt="" />
        <div className="chat-list__item__content">
          <div className="chat-list__item__content__topBar">
            <h2 className="chat-list__item__content__title">{item.title}</h2>
            <div className="chat-list__item__content__time">{item['time']}</div>
          </div>
          <div className="chat-list__item__content__recentMsg">{item['descript']}</div>
          <button className="chat-list__item__content__time" onClick={more} >更多</button>
         
        </div>
      </li>
    );
  }
}

