import React from 'react';
import Top from '../components/Top';
import List from '../components/List';
import Nav from '../components/Nav';

export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [{
        txt: '我',
        isChecked: false
      },
      {
        txt: '发现',
        isChecked: false
      },{
        txt: '通讯录',
        isChecked: false
      }, {
        txt: '用户',
        isChecked: false
      }],

      isChanged: false
    };
  }

  getFilterList = list => {
    return list.filter(item => item.isChecked)
  }

 /* handleTop= txt => {
    const newList = this.state.todoList.slice();
    newList.unshift({
      txt: txt,
      isChecked: false
    })
    this.setState({
      todoList: newList
    });
  }*/

  handleTodoItemClick = (item, idx) => {
    const newTodoList = this.state.todoList.slice();
    newTodoList[idx].isChecked = !newTodoList[idx].isChecked;
    this.setState({
      todoList: newTodoList
    });
  }
/*
  handleisChangedClick = () => {
    this.setState({
      isChanged: !this.state.isChanged
    });
  }*/

  render() {
    const list = this.state.isChanged
      ? this.getFilterList(this.state.todoList)
      : this.state.todoList;
    return (
      <div className="todo-ctn">
        <Top />
        <List list={list} onTodoItemClick={this.handleTodoItemClick} />
        <Nav  />
      </div>
    );
  }
}
