const http = require('http');
// console.log(http)

//创建了一个服务器
const server = http.createServer((request,response)=>{
  // request, 请求 => 可以访问到浏览器发动的信息
  // response 响应 => 向浏览器发送信息
  // console.log(request.url) => 可以拿到前端的信息;
  // response.write('呵呵');
  response.write('{"name":"nizp"}')
  response.end();
})

server.listen(88);
