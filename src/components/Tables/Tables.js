import React from 'react';
import { Table } from 'antd';
import './Tables.css'




export default class Tables extends React.Component{



    render(){
      const { LessonsList,historyLessonsList,columns1 } = this.props;
          
        return( 
                <div>
                   <strong>在学课程</strong>
                   <Table dataSource={LessonsList} columns={columns1}
                   bordered pagination={false} />
                   <strong>历史课程</strong>
                   <Table dataSource={historyLessonsList} columns={columns1}
                    bordered />
                </div>
                )
             }
    }