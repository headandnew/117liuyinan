import React from 'react'
import '../Switch/switch.css'


export default class Switch extends React.Component{

          render(){


             return(


              <div className="switch-container">
            <input id="switch" type="checkbox" className="switch" />
            <label for="switch" onclick="test()"></label>
        </div>

             )









          }


}