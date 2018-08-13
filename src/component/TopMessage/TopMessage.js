import React from 'react'
import '../TopMessage/TopMessage.css'



export default class TopMessage extends React.Component{
     

                render(){
                 
                    return(
                        <div>
                        
                            <div> 点评权限</div>
                            <div className="aaaa">
                            <div className="qwe">  点评作业：拥有个人点评页，可以为学生作业进行点评  </div>
                            <div className="yyy" onClick={this.props.onClick}>权限管理</div>
                            </div>
                            <div className="aaa">
                            <div className="qwer"> 带课老师：拥有审核点评老师内容的权限，包括撤回点评，自行点评  </div>
                            <div className="yyyy"  >权限管理</div>
                        </div>
                        </div>
                    )


                }


}