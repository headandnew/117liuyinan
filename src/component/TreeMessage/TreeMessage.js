import React from 'react'
import { Tree } from 'antd';
import { Table } from 'antd'
import { Input } from 'antd'
import '../TreeMessage/TreeMessage.css'
const Search=Input.Search
const TreeNode = Tree.TreeNode;
const data=[ { name:'王鹏1',
                type:'mid',
                mid:'2004124'
              } ,
              { name:'王鹏2',
              type:'mid',
              mid:'2004124'
              } ,
              { name:'王鹏3',
                type:'mid',
                mid:'2004124'
              } ,
              { name:'王鹏4',
                type:'mid',
                mid:'2004124'
              } ,
              { name:'王鹏5',
                 type:'mid',
                mid:'2004124'
              } 

]
const data1= [{ name:'白帆1',
                type:'mid',
                mid:'2004124'
            
              } ,
              { name:'白帆2',
              type:'mid',
              mid:'2004124'
              } ,
              { name:'白帆3',
                type:'mid',
                mid:'2004124'
              } ,
              { name:'白帆4',
                type:'mid',
                mid:'2004124'
              } ,
              { name:'白帆5',
                 type:'mid',
                mid:'2004124'
              } 

]
const columns=[{
    title: '',
    dataIndex: 'name',
    key: 'name',
   
  }, {
    title: '',
    dataIndex: 'type',
    key: 'type',
  }, {
    title: '',
    dataIndex: 'mid',
    key: 'mid',
  }]
const treeData = [{
    title: '总',
    key: '0-0',
    children: [{
      title: '分1',
      key: '0-0-0',
      children: [
        { title: '部门1', key: '0-0-0-0' },
        { title: '部门2', key: '0-0-0-1' },
        { title: '部门3', key: '0-0-0-2' },
      ],
    }, {
      title: '分2',
      key: '0-0-1',
      children: [
        { title: '部门4', key: '0-0-1-0' },
        { title: '部门5', key: '0-0-1-1' },
        { title: '部门6', key: '0-0-1-2' },
      ],
    }, {
      title: '分3',
      key: '0-0-2',
    }],
  }, 
   ];
export default class TreeMessage extends React.Component{
    state = {
        expandedKeys: ['0-0-0', '0-0-1'],
        autoExpandParent: true,
        checkedKeys: ['0-0-0'],
        selectedKeys: [],
      }
      onExpand = (expandedKeys) => {
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.setState({
          expandedKeys,
          autoExpandParent: false,
        });
      }
    
      onCheck = (checkedKeys) => {
        console.log('onCheck', checkedKeys);
        this.setState({ checkedKeys });
      }
   
      onSelect = (selectedKeys, info) => {
        console.log('onSelect', info);
        this.setState({ selectedKeys });
      }
    
      renderTreeNodes = (data) => {
        return data.map((item) => {
          if (item.children) {
              console.log(item)
            return (
              <TreeNode title={item.title} key={item.key} dataRef={item}>
                {this.renderTreeNodes(item.children)}
              </TreeNode>
            );
          }
          return <TreeNode {...item} />;
        });
      }
renderHandle=()=>{
    const { selectedKeys }= this.state
    if(selectedKeys=='0-0-0-0'){
        return <div> <Table columns={columns} dataSource={data1} /></div>
    }
    else if(selectedKeys=='0-0-0-1'){
    return<div> <Table columns={columns} dataSource={data} /></div>}
    else if(selectedKeys=='0-0-0-2'){
        return <div>6565621321</div>
    }
}
        render(){
      

   
            return(
                <div >
                            
                    <div className="tree-message">
                    <Search
            style={{ width: 200 }}
            enterButton
            onSearch={this.onSearch}
          />
                    {this.renderHandle()}</div>
                    <div className="tree">
                   <Tree
        checkable
        onExpand={this.onExpand}
        expandedKeys={this.state.expandedKeys}
        autoExpandParent={this.state.autoExpandParent}
        onCheck={this.onCheck}
        checkedKeys={this.state.checkedKeys}
        onSelect={this.onSelect}
        selectedKeys={this.state.selectedKeys}
      >
        {this.renderTreeNodes(treeData)}
       
      </Tree>
    
                   </div>
      

                </div>
            )
        }
}