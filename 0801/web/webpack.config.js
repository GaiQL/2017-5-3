const path=require('path');
module.exports = {
  entry:{
    app:'./two'
  },
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,'build/src')
  },
  module:{
    rules:[
      {test:/\.js$/,
      use:{
        loader:'babel-loader',
        options:{
          presets:['env']
        }
      }}
    ]
  }
}
