const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool:'source-map',
  entry:__dirname + '/app/main.js',//入口文件路径
  //    __dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录；
  output:{
    path:__dirname + '/build',//打包后文件存放的地方。
    filename:'bundle.js',//打包后输出文件的文件夹名称。
  },
  devServer:{
    contentBase:"./build",
    historyApiFallback:true,
    inline:true
  },
  module:{
    rules:[
      {
        test:/(\.jsx|\.js)$/,
        use:{
          loader:'babel-loader'
        },
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use:[
          {
            loader:"style-loader"
          },
          {
            loader:"css-loader",
          },
          {
            loader:"postcss-loader",
          }
        ],
        exclude:/node_modules/
      }
    ]
  },
  plugins:[
    new webpack.BannerPlugin('版权所有，哈哈哈哈哈哈哈哈哈哈哈哈哈'),
    new HtmlWebpackPlugin({
      template:__dirname + '/app/index.tmpl.html'
    })
  ]
}
