import React  from 'react'
import '../App.css'
import icon1 from '../resource/对话信息.png'; 
import icon2 from '../resource/通讯录.png'; 
import icon3 from '../resource/搜索.png'; 
import icon4 from '../resource/用户.png'; 

export default class Nav extends React.Component {

  constructor(props) {
    super(props)
  }


  handleShowDialog = isActive => {
    this.setState({ isDialogActive: isActive });
  }

  render() {
    
    return (
      <div>
         <nav className="chat-nav">
          <div className="chat-nav__item" onClick={this.handleAddItem}>
            <img className="chat-nav__item__icon" src={icon1} alt="" />
            <div className="chat-nav__item__name">微信</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon2} alt="" />
            <div className="chat-nav__item__name">通讯录</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon3} alt="" />
            <div className="chat-nav__item__name">发现</div>
          </div>
          <div className="chat-nav__item" onClick={this.handleShowDialog.bind(this, true)}>
            <img className="chat-nav__item__icon" src={icon4} alt="" />
            <div className="chat-nav__item__name">我</div>
          </div>
        </nav>
      </div>
    )
  }
}