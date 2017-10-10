// import _ from 'lodash';
// import printMe from './print.js';
// //直接引入使用Import，大多浏览器还不支持，打包后
// function element(){
//   var element = document.createElement('div');
//   var btn = document.createElement('button');
//   element.innerHTML = _.join(['Hello','webpack'],'');
//   btn.innerHTML = 'Click me and check the console';
//   btn.onclick = printMe;
//   element.appendChild(btn);
//   return element;
// }
// document.body.appendChild(element());

function getComponent(){
  return import(/* webpackChunkName:"lodash" */'lodash').then(_=>{
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello','webpack'],'');
    return element
  }).catch(error => 'An error occurred while loading the component')
}
getComponent().then(component => {
  document.body.appendChild(component);
})
