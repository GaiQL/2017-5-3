const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
  console.log(req.url)
  switch (req.url) {
    case '/da.html':
      fs.readFile('da.html',(error,data)=>{
        res.write(data);
        res.end();
      })
      break;
    case '/user':
      res.write('{"name":"nizp"}');
      res.end();
      break
    default:
        res.write('404');
        res.end();
        break;
  }
})
server.listen(88);
