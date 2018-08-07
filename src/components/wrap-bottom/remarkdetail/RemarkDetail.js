import React, { Component } from 'react';
import './remarkdetail.css'

export default class RemarkDetail extends Component {


  renderRemarkDetail = () => {
    const { homeworkList } = this.props;
    console.log(homeworkList)
    // const msg = homeworkList.map((value,i) => {
  
      // if(homeworkList[i].comments.from == 'autor') {
      //   return <li>
      //             <span>  { value.nick }   mid: { value.id }    </span>
      //             <span>  { value.time }    </span>
      //             <span>  { value.content }    </span>
      //         </li>
      // }
      // if(homeworkList[i].status == 'reject') {
      //   return  <li>
      //               <span> {value.nick} ( {value.commentator.role}   {value.commentator.nick}):   </span>
      //               <span>   {value.content}   </span>
      //               <span>  { value.time }    </span>
      //               <span> ( 消息被退回，退回原因： {value.reason}  )     </span>
      //           </li>
      // }
      // if(homeworkList[i].status == 'unrevised') {
      //   return  <li>
      //               <span>   { value.nick } ( {value.commentator.role}   {value.commentator.nick}):     </span>
      //               <span> 退回  </span>
      //               <span>{ value.content }</span>
      //           </li>
      // }
    // })
      // return msg;
  }
  render() {
    return (
      <div className="remarkdetail-wrap">
            <ul className="detail">
                {this.renderRemarkDetail()}
            </ul>
      </div>
      );
  }
}

