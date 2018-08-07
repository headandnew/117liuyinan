import React, { Component } from 'react';
import { Select } from 'antd';
import { Input } from 'antd';
import './search.css'

export default class Search extends Component{

    render(){
        const Option = Select.Option;
        const Search = Input.Search;
        const { Actions } = this.props;
        return (
            <div className="search-bar">
                <Select defaultValue="mid" style={{ width: 80,marginRight:5 }} filterOption="true">
                    <Option value="mid">mid</Option>
                </Select>
               
                <Search
                    placeholder="MID/学员名"
                    onSearch={(value) => {Actions.changeTableItem(value)}}
                    style={{ width: 200 }}
                />
            </div>
        )
    }
}


  