import React, { Component } from 'react';
import './DialogView.css';

export default class DialogView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      descript: '',
      time: '',
    }
  }

  handleClose = () => {
    this.props.onCloseClick(false);
  }

  handleTitleChange = event => {
    // console.log(event.target.value)
    // console.log(this.titleDom.value)
    this.setState({
      title: event.target.value,
    })
  }


  handleDescChange = event => {
    
    this.setState({
      descript: event.target.value,
    })
  }


  handleTimeChange = event => {
    
    this.setState({
      time: event.target.value,
    })
  }

  handleSubmitClick = () => {
    const { title, descript, time } = this.state
    this.props.handleAddMessage({
      title,
      descript,
      time,
    })
  }

  render() {
    console.log('component render');
    const { isActive } = this.props;
    const{ e } =this.props; 
    if (!isActive) {
      return null;
    }
    return (
      <div className="mask-ctn">
        <div className="close-btn" onClick={this.handleClose}>close</div>
        <div className="dialog-ctn">
          <div>     标题   <input type="text" ref={ref => this.titleDom = ref } onChange={this.handleTitleChange}/></div>
            <div>   内容   <input type="text" onChange={this.handleDescChange}/></div>
              <div> 时间   <input type="text" onChange={this.handleTimeChange}/></div>
        
        <div onClick={this.handleSubmitClick}>提交</div>

        </div>
      </div>
    );
  }
}

