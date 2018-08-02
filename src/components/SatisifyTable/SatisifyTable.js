import React, { Component } from 'react';
import { Table } from 'antd';



export default class SatisifyTable extends Component{

render(){

 
const { SatisifyList ,columns4} = this.props;
return (
<div>
<Table dataSource={SatisifyList} columns={columns4} bordered />
</div>
)
}
}