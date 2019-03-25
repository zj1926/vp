const path = require('path');
const ServerCompilePlugin = require('./plugins/ServerCompilePlugin');
const serverConfig = require('./server');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: [
    './src/client/index.js',
  ],
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../../dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              "@babel/plugin-proposal-class-properties"
            ],
          },
        }],
      },
    ],
  },
  plugins: [
    new ServerCompilePlugin(serverConfig),
  ],
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    contentBase: './public', // set 'public' path, relative to root
    noInfo: true,
    hot: true,
    inline: true,
    port: '3001',
    host: 'localhost',
    open: 'Google Chrome',
    proxy: {
      '*': {
        target: 'http://localhost:3000',
        secure: false
      }
    },
    watchOptions: {
      aggregateTimeout: 1000,
    }
  },
};
