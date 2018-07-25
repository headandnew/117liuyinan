import React,{Component} from 'react';

export default class Delebtn extends Component{

constructor(){
    super();
}

render(){



    const { showMultipleSelect,onDeleteMultiple } = this.props;
    if (!Array.isArray(showMultipleSelect)) {
      return null
    }
    return (
      <div>
          
        <div className="multipleDeleteBtn" onClick={onDeleteMultiple}>删除</div>
      </div>
    )
  





}






}