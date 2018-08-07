import React, { Component } from 'react';
import { Switch } from 'antd';
import './workdetail.css'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../action/index';


class WorkWrap extends Component {
  
  render() {
   const { item,Actions,idx } = this.props;
    return (
      <div className="workdetail-wrap">
           <div>
                <span>作业号：{item.id}</span>
                {/* <img src={} /> */}
           </div>
           <div>
                <span>作业：{item.description}</span> 
                <p>
                    <span>学生id：{item.author.mid}</span>
                     &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>班级老师{item.classInfo.name}/{item.commentator}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>点评人：{item.commentator}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>提交时间：{item.time}</span>
                </p>
           </div>
           <div>
               佳作：
                <Switch Checked onChange={(checked,idx)=>{Actions.changeWorkStatus(checked,idx)}} />
           </div>
      </div>
      );
  }
}

function mapStateToProps(state,ownProps){
  const { homeworkdata } = state;
  return  { homeworkdata };
} 

const mapDispatchToProps = dispatch => {
return {
  Actions: bindActionCreators(actionCreators, dispatch),
}
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkWrap);


