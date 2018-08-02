import React from 'react';
import { Tabs } from 'antd';
import ButtonBox from '../ButtonBox/ButtonBox';
import Tables from '../Tables/Tables';
import '../TabBar/TabBar';
import StudentMessage from '../StudentMessage/StudentMessage';
import ClassState from '../ClassState/ClassState'
import BasicMsg from '../BasicMsg/BasicMsg'
import Search from '../Search/Search'
import SatisifyTable  from '../SatisifyTable/SatisifyTable'
export default class TabBar extends React.Component{



    render(){
        const TabPane = Tabs.TabPane;
        const {
            LessonsList,
            historyLessonsList,
            SatisifyList,
            StudentList,
            LearnList,
            basicMsg,
            columns1,
            columns2,
            columns3,
        columns4}=this.props;
        function callback(key) {
          console.log(key);
        }
        
        return(
                <div>
 <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="课程信息" key="1">   
                 <ButtonBox/> 
                 <Tables  LessonsList={LessonsList} 
                            historyLessonsList={historyLessonsList} 
                            columns1={columns1} />       
    </TabPane>
    <TabPane tab="满意度反馈" key="2">
                
                <SatisifyTable SatisifyList={SatisifyList} columns4={columns4}/>
              
    </TabPane>
  
  </Tabs>                 
             </div>
        )
    }

    }