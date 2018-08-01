import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Header from '../components/Header/Header';
import TabBar from '../components/TabBar/TabBar';
import * as actionCreators from '../actions'; 
import { bindActionCreators } from 'redux';


class Op extends  React.Component{
  
  
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
              <Header   userMsg={classState.userMsg}          
              />
              <TabBar 
              LessonsList={studentMessage.LessonsList} 
              historyLessonsList={studentMessage.historyLessonsList} 
              StudentList={studentMessage.StudentList}
              LearnList={studentMessage.LearnList}
              basicMsg={classState.basicMsg}
              columns1={tableColumns.columns1}
              columns2={tableColumns.columns2}
              columns3={tableColumns.columns3} 
              />
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
  
export default connect(mapStateToProps,mapDispatchToProps)(Op);