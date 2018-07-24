import React,{Component} from 'react';
import '../../App.css'


const icon = require('../../image/check.png')

export default class TopBar extends Component{
    constructor(){
        super();

        this.state = {
            circle : [{
                txt: '微信',
                icon: icon,
                color: 'red',
                isChanged: false
            },{
                txt: '通讯录',
                icon: icon,
                color: 'pink',
                isChanged: false
            },{
                txt: '发现',
                icon: icon,
                color: 'black',
                isChanged: false
            },{
                txt: '我',
                icon: icon,
                color: 'yellow',
                isChanged: false
            }],
            
        }
    }

  
    renderCircleItem = () => {
        const { circle,isChanged } = this.state;
        const c = circle.map((item,idx) => {
            if(!isChanged){
                return  <div className="content">
                            <div className={item.color} onClick={() => this.handleCircleItemClick(item, idx)}></div>
                        </div>
            }
            return <div className="content">
                        <div className={item.color} onClick={() => this.handleCircleItemClick(item, idx)}>
                            <img src={item.icon}/>
                        </div>
                   </div>
        })
        return c;
    }

  
    handleCircleItemClick = (item, idx) => {
        
        const { onCircleClick } = this.props;
        onCircleClick && onCircleClick(item,idx);
        // console.log(idx)


        //点击出现对勾   //有点问题
        const { isChanged } = this.state.circle[idx].isChanged;
        this.setState({
            isChanged: !isChanged
        });
        
        //点击放到前面
        const newCircle = this.state.circle.slice();
        newCircle.splice(idx,1)
        newCircle.unshift({
        ...item
        })
        this.setState({
            circle : newCircle,
        })

    }
    // const newCircle = this.state.circle.slice();
    // newCircle[idx].isChanged = !newCircle[idx].isChanged
    // this.setState({
    //     circle: newCircle
    // });

   
 



    render(){
        const { item } = this.props;
        return (
            <li className="message">
                <span>{item.txt}</span>
                {this.renderCircleItem()}
            </li>   
        )
    }
}