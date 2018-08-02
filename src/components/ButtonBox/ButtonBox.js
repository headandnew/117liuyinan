import React from 'react';
import '../ButtonBox/ButtonBox.css';
import { Button } from 'antd';
import { Link } from 'react-router'


export default class ButtonBox extends React.Component{



    render(){

        return(
                <div className="button">
                   <div className="button_left">
                       <Button>汇总</Button>
                       <Button style={{backgroundColor:'gray'}}>摄影课</Button>
                       <Button>绘画课</Button>
                   </div>
                   <div className="button_right">
                   <Link  to="/student"><Button>返回</Button></Link>  
                   </div>
                   

                </div>







        )





    }












}