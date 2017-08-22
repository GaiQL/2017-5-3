const fs = require('fs');
//写文件     fs.writeFile(file, data[, options], callback)
// fs.writeFile('3.txt','我是中文233333333',(error)=>{
//   if(error){
//     console.log('创建失败');
//   }else{
//     console.log('创建成功');
//   }
// });


//异步的删除文件
fs.unlink('3.txt',()=>{
  console.log('删除成功')
})
//同步的删除文件
fs.unlinkSync(path)
console.log('删除成功')
