import React,{Component} from 'react';
import MessageItemView from './MessageItem';

export default class MessageList extends Component{
    constructor(){
        super();

    }


    handleCircleItemClick = (index) => {
        const newMessage = this.state.messages.slice();
        const m = newMessage[index];
        newMessage.splice(index,1)
        newMessage.unshift(m)
        this.setState({
          messages : newMessage,
        })
      
      }
    
    
      


    render(){
            const { messages,onCircleItemClick } = this.props;
            const msg = messages.map((item,idx) => {
                return  <MessageItemView 
                          key={idx} 
                          item={item} 
                          index={idx}
                          onCircleClick={onCircleItemClick}
                        />
            })
            return msg;
    }
}