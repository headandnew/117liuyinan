import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Header from '../components/Header/Header';
import TabBar from '../components/TabBar/TabBar';






class Op extends  React.Component{


    render(){



         return(

             <div>
              <Header  fixedMsg={this.props.compList.fixedMsg} 
                       personalMsg={this.props.compList.personalMsg}
              />
              <TabBar dataSource={this.props.allList.dataSource}
                      dataSource1={this.props.allList.dataSource1}
                      columns={this.props.allList.columns}
                      columns1={this.props.allList.columns1}/>
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