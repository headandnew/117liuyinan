import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import userActions from '../actions/user'
import TopMessage from '../component/TopMessage/TopMessage'
import TreeMessage from '../component/TreeMessage/TreeMessage'
 export default class Root extends Component {
     state={
        showDialog : false
    }
    
    onClick=()=>{ 
        const {showDialog}=this.state
        console.log(showDialog)
        if(showDialog==true){
            this.setState( {showDialog:false} )
            
        }else if(
            showDialog==false
        ){
           this.setState({showDialog:true}) 
        
        }
            
                }
//   componentDidMount() {
//     const { userActions } = this.props
//     userActions.fetchStudentList()
//   }
  render () {
    // const { studentList, userActions } = this.props
    // const options = [
    //   {
    //     value: 'mid',
    //     text: '根据mid搜索'
    //   },
    //   {
    //     value: 'nick',
    //     text: '根据名字搜索'
    //   }
    // ]
    return (
      <div>
            <TopMessage state={this.state} onClick={this.onClick}/>
            {
                this.state.showDialog ? <TreeMessage /> : null 
            }
      </div>
    )
  }
}
// const getAfterFilterList = (list, filter) => {
//   if (!filter) return list
//   const { keyName, value } = filter
//   return list.filter(item => {
//     console.log(item[keyName], value)
//     if (`${item[keyName]}` === value || value === '') {
//       return true
//     }
//     return false
//   })
// }
// const mapStateToProps = state => {
//   const {
//     studentLib: { 
//       list: studentList,
//       filterOption
//     }
//   } = state
//   return {
//     studentList: getAfterFilterList(studentList, filterOption)
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     userActions: bindActionCreators(userActions, dispatch)
//   }
// };


// export default connect(mapStateToProps, mapDispatchToProps)(Root)