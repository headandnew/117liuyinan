import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import BasicMsg from '../components/BasicMsg/BasicMsg'
import ClassState from '../components/ClassState/ClassState'

import * as actionCreators from '../actions'; 
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
import { Link } from 'react-router'

class Class extends  React.Component{
  
  
      componentDidMount() {
        const { Actions } = this.props;
        const mid = 1;
        const id = 2;
        Actions.fetchUserInfo(mid)
        Actions.fetchLessonInfo(mid)
        Actions.fetchStudentInfo(id)
        Actions.fetchLearnInfo(id)
        }
    render(){
 const{ classState,studentMessage,tableColumns}=this.props
         return(
                     
             <div>                
             <BasicMsg basicMsg={classState.basicMsg}/>
                <ClassState LearnList={studentMessage.LearnList} columns3={tableColumns.columns3} />
                <Link  to="/student"><Button>返回</Button></Link>  
             </div>   
         )
    }

}
function mapStateToProps(state,ownProps){
    // state.list;
    const {   studentMessage,classState,tableColumns} = state;
    return {  studentMessage,classState,tableColumns};
  }
  const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch)
      // dispatch
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Class);