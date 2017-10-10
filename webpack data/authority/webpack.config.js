const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:{
    index:'./src/index.js'
  },
  output:{
    filename:'[name].bundle.js',
    chunkFilename:'[name].bundle.js',
    path:__dirname + '/dist'
  },
  plugins:[
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(['dist']),
  ]
}
