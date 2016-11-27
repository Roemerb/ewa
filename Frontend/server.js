var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
    publicPath: 'http://localhost:8081/',
    contentBase: './app',
    hot: true,
    noInfo: false,
    historyApiFallback: true
});

server.listen(8081, 'localhost', function(err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:8081');
});
