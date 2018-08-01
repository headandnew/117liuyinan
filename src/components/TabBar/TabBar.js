import React from 'react';
import { Tabs } from 'antd';
import ButtonBox from '../ButtonBox/ButtonBox';
import Tables from '../Tables/Tables';
import '../TabBar/TabBar'


export default class TabBar extends React.Component{



    render(){
        const TabPane = Tabs.TabPane;
        const {state}=this.props;
        function callback(key) {
          console.log(key);
        }
        return(
                <div>
 <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="课程信息" key="1">   
                 <ButtonBox/> 
                 <Tables state={state}
                         
             />       
    </TabPane>
    <TabPane tab="满意度反馈" key="2">Content of Tab Pane 2</TabPane>
  </Tabs>
                   

                </div>







        )



    }

    }