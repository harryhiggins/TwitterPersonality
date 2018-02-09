const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const client = {
    entry: {
        app: './app.js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};

const server = {
    entry: {
      server: './server.js'
    },
    externals: [
      nodeExternals()
    ],
    plugins: [
        new CleanWebpackPlugin(['./dist'])
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    target: 'node',
};

module.exports = [client, server];
