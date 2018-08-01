import React from 'react';
import { Table } from 'antd';
import './Tables.css'




export default class Tables extends React.Component{



    render(){
      const { state } = this.props;
          
        return( 
                <div>
                   <strong>在学课程</strong>
                   <Table dataSource={state.compList.dataSource} columns={state.allList.columns}
                   bordered pagination={false} />
                   <strong>历史课程</strong>
                   <Table dataSource={state.allList.dataSource} columns={state.allList.columns}
                    bordered />
                </div>
                )
             }
    }