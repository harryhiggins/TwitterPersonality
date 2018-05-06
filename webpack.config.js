const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const client = {
    entry: {
        app: './app/index.js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['./dist'])
    ],
    module: {
      loaders: [
        {
          test: /\.css$/,
          use: 'style!css?modules',
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    }
};

const server = {
    entry: {
      server: './server/server.js'
    },
    externals: [
      nodeExternals()
    ],
    plugins: [
        new CleanWebpackPlugin(['./dist'])
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    target: 'node',
};

module.exports = [client, server];
