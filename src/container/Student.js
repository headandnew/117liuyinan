import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import ButtonBox from '../components/ButtonBox/ButtonBox'
import Search from '../components/Search/Search'
import StudentMessage from '../components/StudentMessage/StudentMessage'

import * as actionCreators from '../actions'; 
import { bindActionCreators } from 'redux';


class Student extends  React.Component{
  
  
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
            <ButtonBox/>
                 <Search/>
                <StudentMessage StudentList={studentMessage.StudentList} columns2={tableColumns.columns2}/>
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
  
export default connect(mapStateToProps,mapDispatchToProps)(Student);