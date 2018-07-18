import React, { Component } from 'react';
import './App.css';


export default class ButtonItem extends Component{
    constructor(props){
        super(props);
    }


  
    render(){
        const {item} = this.props;
        return(
            
            <div className="chat-nav__item">
              <img className="chat-nav__item__icon" src={item.icon} alt=""/>
              <div className="chat-nav__item__name" >{item.title}</div>
            </div>
            
         
        )
    }

}