import React from 'react';
import { Tabs } from 'antd';
import ButtonBox from '../ButtonBox/ButtonBox';
import Tables from '../Tables/Tables';
import '../TabBar/TabBar';
import StudentMessage from '../StudentMessage/StudentMessage';
import ClassState from '../ClassState/ClassState'
import BasicMsg from '../BasicMsg/BasicMsg'
export default class TabBar extends React.Component{



    render(){
        const TabPane = Tabs.TabPane;
        const {
            LessonsList,
            historyLessonsList,
            StudentList,
            LearnList,
            basicMsg,
            columns1,
            columns2,
            columns3}=this.props;
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
    <TabPane tab="学员档案" key="2">
                 <ButtonBox/>
                <StudentMessage StudentList={StudentList} columns2={columns2}/>
    </TabPane>
    <TabPane tab="上课详情" key="3">
                 <BasicMsg basicMsg={basicMsg}/>
                <ClassState LearnList={LearnList} columns3={columns3} />
    </TabPane>
  </Tabs>
                   

                </div>







        )



    }

    }