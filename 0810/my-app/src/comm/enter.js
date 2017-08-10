import React,{Component} from 'react';
import Li from './li';

class Todo extends Component{
  constructor(){
    super();
    this.state={
      val:'',
      arr:[],
    }
  }
  Keyup = (ev) => {
    if(ev.keyCode === 13){
      let {arr} = this.state;
      let arr2 = Object.assign(arr);
      arr2.push(ev.target.value);
      this.setState({
        arr:arr2,
        val:''
      })
    // ev.target.value = '';
    }
  }
  change = (ev) =>{
    this.setState({
      val:ev.target.value
    })
  }
  render(){
    let {arr} = this.state;
    let arr2 = [];
    arr2 = arr.map((e,i) => {
      let data ={
        key:i,
        num:i,
        txt:e
      }
      return <Li {...data}/>
    })

    return(
      <div>
        <input
          type="text"
          value={this.state.val}
          // defaultValue={this.state.val}
          onKeyUp={this.Keyup}
          onChange={this.change}/>
        <ul>
          {arr2}
        </ul>
      </div>
    )
  }
}
export default Todo;
