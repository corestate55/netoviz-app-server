 const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './server/index.js',
  output: {
    path: __dirname,
    filename: 'main.js'
  },
  target: 'node',
  context: __dirname,
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  },
  externals: [nodeExternals()],
  devtool: 'cheap-module-source-map'
}
