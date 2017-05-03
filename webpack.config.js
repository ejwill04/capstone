const webpack = require('webpack')
//
// new webpack.DefinePlugin({
//   'process.env': {
//     NODE_ENV: JSON.stringify('production')
//   },
// })

module.exports = {
  entry: './app',
  output: {
    path: './build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.mp4$/, loader: 'url' },
      { test: /\.(png|svg)$/, loader: 'url' },
    ],
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        },
      }),
    ],
  },
  devServer: {
    contentBase: './build',
    inline: true,
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.css', '.scss'],
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
}
