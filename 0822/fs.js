const fs = require('fs');
//读文件
fs.readFile('2.txt',(error,data)=>{
  if(error){
    console.log('没有这个文件啊');
  }else{
    console.log(data.toString());
  }
});
