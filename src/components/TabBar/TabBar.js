import React from 'react';
import { Tabs } from 'antd';
import ButtonBox from '../ButtonBox/ButtonBox';
import Tables from '../Tables/Tables';
import '../TabBar/TabBar'


export default class TabBar extends React.Component{



    render(){
        const TabPane = Tabs.TabPane;
        const {dataSource,dataSource1,columns,columns1}=this.props;
        function callback(key) {
          console.log(key);
        }
        return(
                <div>
 <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="课程信息" key="1">   
                 <ButtonBox/> 
                 <Tables dataSource={dataSource} columns={columns}
                 dataSource1={dataSource1} columns1={columns1}/>       
    </TabPane>
    <TabPane tab="满意度反馈" key="2">Content of Tab Pane 2</TabPane>
  </Tabs>
                   

                </div>







        )



    }

    }