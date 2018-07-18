import React, { Component } from 'react';
import './App.css';


export default class MessageItem extends Component{
    constructor(props){
        super(props);
    }


    onMsgClick = () => {
        const { onClick,item } = this.props;
        if(onClick){   //判断这个对象是否存在
            onClick(item);
        }
    }


    render(){
        const {item} = this.props;
        return(
            <li className="chat-list__item"  onClick={this.onMsgClick}>
     
          <img   className="chat-list__item__avatar" src={item.icon} alt="图片未显示"/>
          <div className="chat-list__item__content">
            <div className="chat-list__item__content__topBar">
              <h2  className="chat-list__item__content__title">{item.title}</h2>
              <div   className="chat-list__item__content__time">{item.time}</div>
            </div>
            
            <div   className="chat-list__item__content__recentMsg">{item.description}</div>
          </div>
      
        </li>
        )
    }

}