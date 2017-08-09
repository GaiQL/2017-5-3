import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class U1 extends Component{
  constructor(){
    super();
    this.state = {
      num:0
    };
    this.click = this.click.bind(this);
  };
  click(){
    var n = this.state.num;
    n++
    this.setState({
      num:n
    })
  }
  render(){
    return <div>
            <button onClick={this.click}>点击这个按钮加加加加加加加</button>
            <p>{this.state.num}</p>
          </div>
  };
}
ReactDOM.render(<U1 />,document.getElementById('app'))
