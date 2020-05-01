const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './server/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  target: 'node',
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
