import React, { Component } from 'react';
import './DialogView.css';

export default class FuctionView extends Component {

  handleClose = () => {
    this.props.onCloseClick(false);
  }

  render() {
    console.log('component render');
    const { isActive } = this.props;
    const{ em } =this.props; 
    if (!isActive) {
      return null;
    }
    return (
      <div className="mask-ctn">
        <div className="close-btn" onClick={this.handleClose}>close</div>
        <div className="dialog-ctn">
        
        <button  className="mask-sub"  onClick={em}>  删除</button>
        <button  className="mask-sub"  onClick={em}>  置顶</button>
        <button  className="mask-sub"  onClick={em}> 多选删除</button>

        </div>
      </div>
    );
  }
}

