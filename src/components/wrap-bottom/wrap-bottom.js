import React, { Component } from 'react';

import Picture from './pic/picture';
import WorlDetail from './workDeatail/WorlDetail'
import RemarkWord from './remarkword/RemarkWord'
import RemarkDetail from './remarkdetail/RemarkDetail'
import './wrap-bottom.css'


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../action/index';


class WrapBottom extends Component {

 
    render() {
        const { item,idx,entities } = this.props;
        return (
            <div className="bottom-wrap">
                <div className="left">
                    <Picture item={item}/>
                    <WorlDetail item={item} idx={idx}/>
                    <RemarkWord />  
                </div>
                <div className="right">
                    <RemarkDetail homeworkList={entities.homeworkList}/>
                </div>
            </div>   
        );        
    }
}


function mapStateToProps(state,ownProps){
    const { entities } = state;
    return  { entities };
  } 

const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(WrapBottom);









