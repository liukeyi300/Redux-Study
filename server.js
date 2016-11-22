/**
 * Created by Liukeyi on 2016/11/21.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev.js');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true
}).listen(1234, 'localhost', function(err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('listen at http://localhost:1234/');
});