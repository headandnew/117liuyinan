import React, { Component } from 'react';
import { Table } from 'antd';
import '../ClassState/ClassState.css'


export default class ClassState extends Component{

    render(){
        const { LearnList,columns3 } = this.props;
        return (
            <div>
                <Table dataSource={LearnList} columns={columns3} bordered />
            </div>
           
        )
    }
}