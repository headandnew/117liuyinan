import React from 'react'
import '../Slider/slider.css'
import{Icon} from 'antd'



export default class Slider extends React.Component{
           state={
               autoPlay:true,
               drag:false
           }
    clcikLine = e => {
        const len = this.line.clientWidth / 24;
        // 将整个进度条分为24份
        const windowWidth = window.innerWidth - this.line.clientWidth - this.line.offsetLeft - 20;
        let lineWidth;
        if (windowWidth > 240) {
          // 当导航显示时，计算整个滑块的宽度要减去导航的宽度240px
          lineWidth = e.pageX - this.line.offsetLeft - 240;
        } else {
          lineWidth = e.pageX - this.line.offsetLeft;
        }
        // 将最终的滑块宽度按百分比进行转换
        const innerWidth = Math.round(lineWidth / len);
        this.inner.style.width = 100 / 24 * innerWidth + '%';
      }
      handlePlay = () => {
        // 设置播放按钮
        this.setState({
          autoPlay: !this.state.autoPlay,
        });
        // 清楚定时器
        clearInterval(this.timer);
     
        setTimeout(() => {
          if (this.state.autoPlay) {
            const wrapWidth = this.line.clientWidth;
            const innerWidth = this.inner.clientWidth;
            if (innerWidth < wrapWidth) {
              this.timer = setInterval(() => {
                // 设置定时器，每1000毫秒执行一次，每1000毫秒滑块长度增加进度条的1%长度
                this.inner.style.width = Math.round(this.inner.clientWidth / this.line.clientWidth * 100) + 10 + '%';
                // 每次获得的增加的百分比长度都进行四舍五入
                if (this.inner.clientWidth >= this.line.clientWidth) {
                  // 当滑块的长度大于等于进度条的长度时，清楚定时器，并且关闭播放按钮
                  clearInterval(this.timer);
                  this.setState({
                    autoPlay: false
                  });
                }
              }, 1000);
            } else {
              // 当滑块宽度大于进度条宽度时，点击播放按钮，延时1000毫秒自动关闭播放按钮
              setTimeout(() => {
                this.setState({
                  autoPlay: false
                });
              }, 1000);
            }
          }
        }, 20);
      }
      handleMouseDown = e => {
        // 鼠标按下时打开可拖功能
        this.setState({
          drag: true,
        });
      }
     
      handleMouseMove = e => {
        // 当可拖拽功能打开时
        if (this.state.drag) {
          // 滑块宽度小于进度条宽度或大于0时
          if (this.inner.clientWidth <= this.line.clientWidth || this.inner.clientWidth <= 0) {
            // 将进度条分为200份
            const len = this.line.clientWidth / 200;
            // 判断导航是否隐藏
            const windowWidth = window.innerWidth - this.line.clientWidth - this.line.offsetLeft - 20;
            let lineWidth;
            if (windowWidth > 240) {
              // 导航未隐藏
              lineWidth = e.pageX - this.line.offsetLeft - 240;
            } else {
              // 导航隐藏
              lineWidth = e.pageX - this.line.offsetLeft;
            }
            const innerWidth = Math.round(lineWidth / len);
            // 滑块宽度每次增加或减少0.5%的宽度
            this.inner.style.width = 0.5 * innerWidth + '%';
          }
        }
      }
     
      handleMouseUp = e => {
        // 当鼠标放开或者离开进度条时关闭拖拽功能
        this.setState({
          drag: false,
        });
      }
          
    render(){
                 
           
         return(
        
     <div className="play" ref={play => { this.play = play; }}>
          <span className="palyButton" onClick={this.handlePlay}><Icon type="caret-right" style={{ display: this.state.autoPlay ? 'none' : 'inline-block' }} /><Icon type="pause" style={{ display: this.state.autoPlay ? 'inline-block' : 'none' }} /></span>
          <span className="lineWrap" onMouseMove={this.handleMouseMove} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseUp} onClick={this.clcikLine} ref={line => { this.line = line; }}>
            <span className="lineInner" ref={inner => { this.inner = inner; }}>
              <span className="lineDot" onMouseDown={this.handleMouseDown} ref={dot => { this.dot = dot; }} />
            </span>
          </span>
        </div>

    
     )
 
 
    }


}