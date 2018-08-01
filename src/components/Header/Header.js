import React from 'react';
import './Header.css'
import{ Button } from'antd';
import { Input } from 'antd';
import { Avatar } from 'antd';
import {Icon} from "antd"

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input_content: '',
        }
    }

    renderHeadMsg=()=>{
        const { userMsg } = this.props;
     
     const arrtr=['学员编号:','历史付费','在学课程','累计学习天数','入学时间','最后登录时间']
    const arrtd=[userMsg.mid,userMsg.history_pay,userMsg.learningLesson,userMsg.totalLearningDays,userMsg.enterDate,
        userMsg.lastLoginDate
    ]
      const msg=arrtr.map((item,idx)=>{
         return<div><span>{item}:{arrtd[idx]}</span></div>
      }
    )

    return msg;

    }
    render(){
        const { userMsg } = this.props;
        return(<div className="header-wrap">
        <Avatar size="large" src={userMsg.hurl} style={{width:"100px",height:"100px"}}/>
        <div className="head">三班人</div>
        <div className="header-content-left">
        {this.renderHeadMsg()}
        </div>
        
        <div className="header-content-right">
        <div>
        <span className="num">手机号码：<span>{userMsg.tel}</span></span>
        <Icon style={{fontSize:'16px'}} type="file" />
        </div>
        <div>
        <span>微信号码：</span>
        <Input style={{width:'100px'}} size="small" placeholder=""  value={userMsg.weiChatCode}/>
        <Button style={{width:'30px',height:'25px',fontSize:'12px',padding:'0',color:'#000'}}>提交</Button>
        </div>
        <div>
        <span className="remark">备注：</span>
        <Input style={{width:'100px'}} size="small" placeholder="" />
        <Button style={{width:'30px',height:'25px',fontSize:'12px',padding:'0',color:'#000'}}>提交</Button>
        </div>
        </div>
        </div>
                
        )
    }
    }
  