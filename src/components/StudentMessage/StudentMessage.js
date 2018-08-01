import React from 'react';
import { Table } from 'antd';
import './StudentMessage.css';

export default class StudentMessage extends React.Component{

    constructor(){
        super();
        this.onexpandedRowKeys = true;
    }

    onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
      }
    render(){
        const { StudentList,columns2 } = this.props;
        return (

            <div>
                <Table dataSource={StudentList} columns={columns2} bordered />
            </div>
           
        )
    }
}
