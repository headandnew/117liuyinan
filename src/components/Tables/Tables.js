import React from 'react';
import { Table } from 'antd';
import './Tables.css'




export default class Tables extends React.Component{



    render(){
      
          const { dataSource, dataSource1,columns,columns1}=this.props;
        return( 
                <div>
                   <strong>在学课程</strong>
                   <Table dataSource={dataSource} columns={columns} />
                   <strong>历史课程</strong>
                   <Table dataSource={dataSource1} columns={columns1} />
                </div>
                )
             }
    }