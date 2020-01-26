const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ServerStartPlugin = require('./plugins/ServerStartPlugin');

const {
  withoutCssModuleFiles,
  clientBaseConfig,
  serverBaseConfig,
} = require('./base');

const client = Object.assign(clientBaseConfig, {
  watch: true,
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
      },
    },
  },
  output: {
    publicPath: '/static/',
    path: path.join(__dirname, '../local/public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-syntax-dynamic-import'],
            },
          },
        ],
      },

      {
        test: /\.sass$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],
        include: withoutCssModuleFiles,
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
        exclude: withoutCssModuleFiles,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
});

const server = Object.assign(serverBaseConfig, {
  watch: true,
  mode: 'development',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../local'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-syntax-dynamic-import'],
            },
          },
        ],
      },
      {
        test: /\.sass$/,
        use: ['null-loader'],
      },
    ],
  },
  plugins: [new ServerStartPlugin()],
  watchOptions: {
    ignored: /node_modules/,
  },
});

module.exports = [client, server];
