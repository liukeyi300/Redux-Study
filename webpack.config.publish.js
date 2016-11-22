/**
 * Created by Liukeyi on 2016/11/21.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('css/[name].[chunkhash:8].css');

var buildPath = path.resolve(__dirname, 'publish');

var config = {
    devtool: false,
    entry : {
        index : './entry',
        vendor: ['react', 'redux']
    },
    extensions: ['', '.js', '.json', '.css', '.less'],
    output: {
        path: buildPath,
        filename: '[name].[hash:8].js'
    },
    module: {
        loaders: [
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules | bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        extractCSS,
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ]
};

module.exports = config;