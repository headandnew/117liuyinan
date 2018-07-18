import React, { Component } from 'react';
import './App.css';


export default class ClickItem extends Component{
    constructor(props){
        super(props);
    }
    onMsgClick1 = () => {
        const { onClick,item } = this.props;
        if(onClick){  
            onClick(item);
        }
    }

  
    render(){
        const {item} = this.props;
        return(
            
           <button className="button" onClick={this.onMsgClick1}>{item.title1}</button>
            
         
        )
    }

}