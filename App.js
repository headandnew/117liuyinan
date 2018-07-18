import React, { Component } from 'react';
import MessageItemView from './Message.js';
import ButtonItemView   from './Button.js';
import ClickItemView   from './Click.js';

import logo from './logo.svg';
import './App.css';



const icon1 = require('./img/u=2588965882,2465793598&fm=27&gp=0.jpg')
const icon2 = require('./img/u=2767472474,1074210705&fm=27&gp=0.jpg')
const icon3 = require('./img/u=3062426313,3718352357&fm=27&gp=0.jpg')
const icon4 = require('./img/对话信息.png')
const icon5 = require('./img/通讯录.png')
const icon6 = require('./img/搜索.png')
const icon7 = require('./img/用户.png')



 
class App extends Component {

  constructor(props){
    super(props);

    this.state={
      message : [
        {
          icon : icon1,
          title : '小王',
          description : '今天很热',
          time : '上午11:35' 
        },
        {
          icon : icon2,
          title : '小年糕',
          description : '辛苦了',
          time : '昨天' 
        },
        {
          icon : icon3,
          title : '小年糕前端训练营',
          description : '了解',
          time : '昨天' 
        },
      ],
      message2 :[
        {
          icon : icon4,
          title : '微信'
        },
        {
          icon : icon5,
          title : '通讯录'
        },
        {
          icon : icon6,
          title : '发现'
        },
        {
          icon : icon7,
          title : '我'
        }

      ],
        message3 :[
      {
        
          title1 : '全选'
      },
      {
        
        title1 : '增加'

      },
      {
       
        title1 : '修改'

      },
      {
       
        title1 : '删除'

      },
      ],
      showDailog : false
    }
  }
  onItemClick = (message) =>{
      console.log(message);
      this.setState({
        showDailog : true   
      })
  }
  onMsgClick1 = (message) =>{
    console.log(message.title1);
    if(
      this.setState.showDailog==true
    ){
      this.setState.showDailog==false
    }
    this.setState({
      showDailog : false  
    },
     
  )
}

  
 

  renderMessages = () => {
      const msg = this.state.message.map((item,idx) => {
        return <MessageItemView key={idx} item={item} onClick={this.onItemClick} />
    });
    return msg;
  }
  renderMessages1 = () => {
    const msg = this.state.message2.map((item,idx) => {
      return <ButtonItemView key={idx} item={item}  />
  });
  return msg;
  
}
renderMessages2 = () => {
  const msg = this.state.message3.map((item,idx) => {
    return <ClickItemView key={idx} item={item} onClick={this.onItemClick} />
});
return msg;
}



render() {
  return (
    <div>
          <ul>

            {
              this.renderMessages()
            }
          </ul>

          <nav className="chat-nav">
            
             {
              this.renderMessages1()
            }
           
          </nav>

          <ul className="new">
         
            {
              this.renderMessages2()
            }

          </ul>
    
    </div>



  );
}
}
export default App;
