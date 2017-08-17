import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
class App extends Component{
  constructor(){
    super();
    this.state={
      boolean:false
    }
  }
  changeBool = () => {
    this.setState({
      boolean:true
    })
  }
  change = () => {
    this.setState({
      boolean:false
    })
  }
  render(){
    let h=null;
    if(!this.state.boolean){
      h = <h1>你还没有登录</h1>
    }else{
      h =  <h1>欢迎<button onClick={this.change}>登出</button></h1>
    }
    return(
      <div>
        {h}
        <button>
          <Link to="/public">公共页面</Link>
        </button>
        <button>
          <Link to="/private">受限页面</Link>
        </button>
        <Route path="/public" component={Public}/>
        <Route path="/private" render={()=>{
          if(this.state.boolean){
            return <Private />;
          }else{
            return <Redirect to="/login"/>;
          }
        }}/>
        <Route path="/login" render={()=>{
          return <Login changeBool={this.changeBool}/>
        }}/>
      </div>
    )
  }
}
class Public extends Component{
  render(){
    return(
      <div>
        我是公共组件的内容
      </div>
    )
  }
}
class Private extends Component{
  render(){
    return(
      <div>
        我是受限组件内容
      </div>
    )
  }
}
class Login extends Component{
  constructor(){
    super();
    this.state={
      boo:false,
    }
  }
  click = () => {
    let {changeBool} = this.props;
    let {b} = this.state;
      changeBool();
      this.setState({
        boo:true
      })
  }
  render(){
    console.log(this.state.boo)
    if(this.state.boo){
      return(<Redirect to="/private" />)
    }
    return(
      <div>
        <button onClick={this.click}>
          请登录
        </button>
        <p>需要登录才能查看受限页面</p>
      </div>
    )
  }
}
ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App}/>
    </div>
  </Router>
  ,document.getElementById('root'))
if(module.hot){
  module.hot.accept();
}
