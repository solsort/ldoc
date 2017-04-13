//
//   AUTOGENERATED FILE
//   DO NOT EDIT
//
webpack = require('webpack');
module.exports = {
  entry: ['./ldoc.js'],
  devtool: 'source-map',
  module: {loaders: [{ 
    test: /\.js$/, 
    exclude: /(dist.js|dist.js.map|node_modules)/, 
    loader: 'babel-loader'
  }]},
  plugins: [
    new webpack.IgnorePlugin(/^(fs|child_process)$/)
  ],
  output: {
    libraryTarget: 'umd',
    filename: 'dist.js'
  }
}
