
import MessageItemView from '../components/MessageItem.js';
import React,{Component} from 'react'

export default class More extends Component{

constructor(){
  super();
}

         render(){
          const{
            onItemClick,onItemMoreClick,showMultipleSelect,onSelectItem,messages
          }=this.props;
              
                const messageViews = messages.map((item,i) => {
                  return <MessageItemView
                    key={i}
                    item={item}
                    index={i}
                    onClick={onItemClick}
                    onItemMoreClick={onItemMoreClick}
                    showMultipleSelect={showMultipleSelect}
                    onSelectItem={onSelectItem}
                  />
                });
                return messageViews;
              }


 
            

                        
          }
















