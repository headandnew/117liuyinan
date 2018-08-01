import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Header from '../components/Header/Header';
import TabBar from '../components/TabBar/TabBar';
import axios from 'axios';
import * as api from '../api/index'





class Op extends  React.Component{
      constructor(){
          super();
          this.state = {
              userData:[]
             
          }
      }
    componentWillMount(){

        axios({
          method:'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          url:'http://xly-wkop.xiaoniangao.cn/getUserInfo',
          data:{
           mid:'MID330900002'
          } 
       }).then(res=>{
         console.log(res);
         this.setState({userData: res.data.data})
         console.log(this.state.userData)
     
       }).catch(err=>{
         console.log(err);
       });
      
      }


      componentDidMount() {
        const { dispatch } = this.props;
       api.fetchlesson(dispatch);
        api.fetchuser(dispatch);
        }
    render(){
        const { todoActions,dispatch } = this.props;
   //console.log(this.props.allList.learningLessonsList)

         return(
                     
             <div>
              <Header  userData={this.state.userData}          
              />
              <TabBar state={this.props}
                     
                    
                      />
             </div>   
         )
    }

}
function mapStateToProps(state,ownProps){
    // state.list;
    const { allList, compList } = state;
    return { allList, compList };
  }
  
export default connect(mapStateToProps)(Op);