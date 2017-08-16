import React,{Component} from "react";
import ReactDOM from "react-dom";
import './css/index.css';
import HeadModel from './components/header';
import LiModel from './components/Li';

class App extends Component{
  constructor(){
    super();
  
    this.state = {
      val:'',
      data:[
        {txt:'今天天气还不错',checked:true,id:1},
        {txt:'今天局地有雷暴',checked:false,id:2}
      ]
    }
  }
  //切换checked
  PchangeChecked = (id) => {
    let {data} = this.state;
    let data2 = Object.assign(data);
    
    data2.forEach(e=>{
      if(e.id === id){
        e.checked = !e.checked
      }
    });
    
    this.setState({
      data:data2
    });
    
  }
  //修改输入框的内容
  changeVal = (newVal) => {
    this.setState({
      val:newVal
    })
  }
  click = () => {
    this.setState({
      val:'3213skldjsakdjsakd'
    })
  }
  
  //添加数据
  changeData = (newData) => {
    let {data} = this.state;
    let data2 = Object.assign(data);
    data2.unshift(newData);
    this.setState({
      data:data2,
      val:''
    })
  }
  
  render(){
    //下面这2句话是放在div下的。
    // <button onClick={this.click}>点击改变老爹数据</button>
    // <span>{this.state.val}</span>
    let {data} = this.state;
    let list = null;
    
    list = data.map((e,i)=>{
      let data = {
        key:i,
        id:e.id,
        txt:e.txt,
        checked:e.checked,
        PchangeChecked:this.PchangeChecked
      }
      return <LiModel {...data} />
    });
    
    
    
    return (
      <div>
        <HeadModel
          changeData = {this.changeData}
          val={this.state.val}
          changeVal={this.changeVal}
        />
        <section className="main">
            <input
              className="toggle-all"
              type="checkbox"
              checked="" />
            <ul className="todo-list">
              {list}
            </ul>
        </section>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
