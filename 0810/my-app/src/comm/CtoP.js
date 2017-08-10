import React,{Component} from 'react';

/*
  子组件传递给父组件通过回调函数来让父组件处理数据

  1、把父组件数据处理函数传递给子组件
  2、当子组件触发某个事件的时候，调用父组件的这个数据处理函数
      会传递一些id之类数据，让父集知道修改谁

  //
*/
class CToP extends Component{
  constructor(){
    super();
    this.state = {
      arr:[
            {text:'一个对象',checked:false,id:0},
            {text:'两个对象',checked:true,id:1},
            {text:'三个对象',checked:false,id:2},
            {text:'四个对象',checked:false,id:3}
          ]
    }
  }
  changeChild = (id) => {
    let {arr} = this.state;
    let arr2 = Object.assign(arr)
    arr2.forEach((e,i)=>{
      if(e.id === id){
        e.checked = !e.checked
      }
    })
    this.setState({
      arr:arr2
    })
    console.log(this.state.arr)
  }

  // changeChild = (id) => {
  //   let {arr} = this.state;
  //   let arr2 = Object.assign(arr);
  //   arr2.forEach((e,i) => {
  //     if(e.id == id){
  //       e.checked = !e.checked
  //     }
  //   })
  //   this.setState({
  //     arr:arr2
  //   })
  //   console.log(this.state.arr)
  // }

  render(){
    let {arr} = this.state;
    let newArr = null;
    newArr = arr.map((e,i) => {
      let data = {
        txt:e.text,
        num:i,
        key:i,
        id:e.id,
        changeChild:this.changeChild,
        checked:e.checked


        // id:e.id,
        // checked:e.checked,
        // changeChild:this.changeChild
      }
      return <Li {...data}/>
    })
    return(
      <ul>
        {newArr}
      </ul>
    )
  }
}
class Li extends Component{
  // change = () => {
  //   this.props.changeChild(this.props.id)
  // }
  change = () =>{
    this.props.changeChild(this.props.id)
  }
  render(){
    return(
      <li>
        <input
          type="checkbox"
          onChange={this.change}
          checked={this.props.checked}
          // onChange={this.change}
          // checked={this.props.checked}
        />
        <p>{this.props.txt}</p>
      </li>
    )
  }
}

export default CToP;
