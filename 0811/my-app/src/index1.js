import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//Route不能改名
// <Router>
//   <Route path="" component=""/>
// </Router>\
//注意：
    //Router中要有一个顶层标签
class APP extends Component{
  render(){
    return(
      <div>
        <p>你好世界</p>
        // <button>
        //   <Link to="/">回到首页</Link>
        // </button>
        // <button>
        //   <Link to="/ppx">去找PPX</Link>
        // </button>
      </div>
    )
  }
}
class PPA extends Component{
  render(){
    return(
      <div>hw</div>
    )
  }
}
class PPX extends Component{
  render(){
    return(
      <div>
        <p>我是皮皮虾</p>
        // <button>
        //   <Link to="/ppa ">去找PPA</Link>
        // </button>
      </div>
    )
  }
}
// <APP path="/ppa" component={PPA}/>
// const Child = ({ match }) => {
//   console.log(match)
//   return(
//   <div>
//     <h3>ID: {match.params.id}</h3>
//   </div>
// )}
const Child = ({ match }) => {
  console.log(match)
  let arr=[
    {app:<APP />},
    {ppx:<PPX />},
    {ppa:<PPA />}
  ];
  let r = arr.find((e)=>e[match.params.id]);
  return(r[match.params.id])
}
//match.params.id是  link to /后面的字段
//component里面即可以写组件，也可以接受一个函数，
//在这个函数中需要return一个组件
//这个函数的参数中有个match，它可以显示当前的路由是什么
//  match = {
//   path: "/:id",
//   url: "/ppa",
//   isExact: true,
//   params: {id:ppa}
// }
//match.params.id  就是路由的地址  (/后面的地址)
//patc中的id对应params中的id
//这个id是通过 path="/:id"来的
//    /:id 就是/+路由地址，通过match.params.id可以很方便的找到当前的路由是谁
ReactDOM.render(
  (<Router>
    <div>
      <ul>
        <li><Link to="/app">APP</Link></li>
        <li><Link to="/ppx">PPX</Link></li>
        <li><Link to="/ppa">PPA</Link></li>
      </ul>
      <Route path="/:id" component={Child}/>
    </div>
  </Router>),
  document.getElementById('root'));
  // match是一个对象：
  //
  //
  //
  // <Route path="/" component={APP}/>
  // <Route path="/ppa" component={PPA}/>
  // <Route path="/ppx" component={PPX}/>
  //通过  :id  可以拿到match对象，

  //exact:
      //加在Rote中：
        //  /ppa/xxx:
            // 没加：
              // /ppa:有的
              // /ppa/xxx:有的
            // 加了：
              // /ppa:有的
              // /ppa/xxx:没有
