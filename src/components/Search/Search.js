import React, { Component } from 'react';
import { Input } from 'antd';
import { Select } from 'antd';
import  '../Search/Search.css'
import * as actionCreators from '../../actions/index'; 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

 class Search extends Component{

    render(){
        const Option = Select.Option;
        const Search = Input.Search;
        const {Actions}=this.props;
        return (
            <div className="search-bar">
                <Select defaultValue="mid" style={{ width: 60 }} filterOption="true">
                    <Option value="mid">mid</Option>
                </Select>
               
                <Search
                    placeholder="input search text"
                    onSearch={(value)=>{Actions.changeItem(value)}}
                    style={{ width: 200 }}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      Actions: bindActionCreators(actionCreators, dispatch)
      // dispatch
    }
  }
  
export default connect(mapDispatchToProps,)(Search);