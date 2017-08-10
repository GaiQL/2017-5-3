import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import U1 from './comm/app';
// import Todo from './comm/enter';
import CToP from './comm/CtoP';
// import inputs from './comm/inputs';
// ReactDOM.render(<inputs />, document.getElementById('root'));
// ReactDOM.render(<Todo />, document.getElementById('root'));
ReactDOM.render(<CToP />, document.getElementById('root'));

// ReactDOM.render(<U1 />, document.getElementById('root'));
// registerServiceWorker();
if(module.hot){
  module.hot.accept();
}
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// class U1 extends Component{
//   constructor(){
//     super()
//     this.state = {
//       arr:['静静','张特','彭博','楠姐','只读']
//     }
//   }
//   render(){
//     let list = this.state;
//     let newArr = null;
//     // let newArr = list.arr.map((e,i)=>{
//     //   return <li key={i}>{e}</li>
//     // })
//       newArr = list.arr.map((e,i) => {
//         let data = {
//           txt:e,
//           num:i,
//           key:i,
//         }
//         return <Li {...data}/>
//       })
//     return (
//       <ul>
//         {newArr}
//       </ul>
//     )
//   }
// }
