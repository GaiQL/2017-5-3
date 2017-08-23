const http = require('http');
const fs = require('fs');
const url2 = require('url');
const queryString = require('queryString');
const arr = [
  {username:'小管管',password:123456},
  {username:'小秦秦',password:54321},
  {username:'大仙仙',password:123456}
]
http.createServer((request,response)=>{
  if(request.url !== '/favicon.ico'){
    let str = '';
    request.on('data',(data)=>{
      str += data;
    })
    request.on('end',()=>{
      let json = queryString.parse(str);
      let obj = {};
      if(!json.act){
        obj.code = 3;
        obj.msg = '参数错误';
      }else{
        switch (json.act) {
          case 'add':
            //注册
            if(arr.find(e=>e.username == json.username)){
              //用户名已经被注册
              obj.code = 2;
              obj.msg = '用户名已经被注册';
            }else{
              //注册成功，要把数据放到数据库中
              arr.push({username:json.username,password:json.password})
              obj.code = 0;
              obj.msg = '注册成功';
              obj.users = json.username;
            }
            break;
          case 'login':
            console.log(obj);
            if(arr.find(e=>e.username == json.username)){
              if(arr.find(e=>e.password == json.password)){
                obj.code = 0;
                obj.msg = '登录成功';
                obj.users = json.username;
              }else{
                obj.code = 2;
                obj.msg = '密码错误';
              }
            }else{
              obj.code = 1;
              obj.msg = '没有这个用户';
            }
            break;
          default:
            obj.code = 1;
            obj.msg = '参数错误';
            break;
      }
      response.write(JSON.stringify(obj));
      response.end();
    }
    })
    // let urlObj = url2.parse(request.url,true);
    // if(urlObj.pathname == '/user'){
    //   let json = urlObj.query;
    // //将字符串问号后面的数据截出来
    // // if(request.url.includes('user')){
    //   // let json = {}; //queryString将字符串转成对象。
    //   /*
    //     user
    //       act:[add,login]
    //       username:xxx,
    //       password:xxx
    //       返回 '{"code":num,msg:"文字描述"}'
    //       num：0   成功
    //       num: 1   参数错误
    //       num: 2   用户名已经被注册
    //   */
    //   // let arr2 = request.url.split('?')[1].split('&');
    //   let obj = {};
    //   // arr2.forEach(e=>{
    //   //   let arr = e.split('=');
    //   //   json[arr[0]] = arr[1];
    //   // });
    //   if(!json.act){
    //     obj.code = 1;
    //     obj.msg = '参数错误';
    //   }else{
    //     switch (json.act) {
    //       case 'add':
    //         //注册
    //         if(arr.find(e=>e.username == json.username)){
    //           //用户名已经被注册
    //           obj.code = 2;
    //           obj.msg = '用户名已经被注册';
    //         }else{
    //           //注册成功，要把数据放到数据库中
    //           arr.push({username:json.username,password:json.password})
    //           obj.code = 0;
    //           obj.msg = '注册成功';
    //           obj.users = json.username;
    //         }
    //         break;
    //       case 'login':
    //         console.log(obj);
    //         if(arr.find(e=>e.username == json.username)){
    //           if(arr.find(e=>e.password == json.password)){
    //             obj.code = 0;
    //             obj.msg = '登录成功';
    //             obj.users = json.username;
    //           }else{
    //             obj.code = 2;
    //             obj.msg = '密码错误';
    //           }
    //         }else{
    //           obj.code = 1;
    //           obj.msg = '没有这个用户';
    //         }
    //         break;
    //       default:
    //         obj.code = 1;
    //         obj.msg = '参数错误';
    //         break;
        }
        response.write(JSON.stringify(obj));
        response.end();
      }
    }else{
      let fileName = 'www';
      request.url = (request.url === '/'?'/index.html':request.url)
      fs.readFile(fileName+request.url,(error,data)=>{
        response.write(data);
        response.end();
      });
    }
  }
}).listen(89);
