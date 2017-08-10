import React,{Component} from 'react';
import Li from './li';
class U1 extends Component{
  constructor(){
    /*
      bind():只改this指向，不调用
      this.click = this.click.bind(this)
      this指向U1实例化对象

      当state发生变化的时候，那么就会执行一次render
    */
    super()
    this.state = {
      arr:['静静','张特','彭博','楠姐','只读']
    }
  }
  //不用再使用bind
  click = () => {
    let {arr} = this.state;
    let arr3 = Object.assign(arr); //能够知道它上一次是谁，可不写
    arr3.push('呵呵')               //操作数据
    this.setState({         //每次更新state的时候就会更新一次render
      arr:arr3
    })
  }
  render(){
    let list = this.state;
    let newArr = null;
    // let newArr = list.arr.map((e,i)=>{
    //   return <li key={i}>{e}</li>
    // })
      newArr = list.arr.map((e,i) => {
        let data = {
          txt:e,
          num:i,
          key:i,
        }
        return <Li {...data}/>
      })
    return (
      <div>
        <button onClick={this.click}>按钮</button>
        <ul>
          {newArr}
        </ul>
      </div>
    )
  }
}
export default U1;
