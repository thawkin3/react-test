var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/scripts/main.js'
    },
    output: {
        filename: './dist/scripts/[name].js'
    },
    devtool: 'source-map', 
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                // loaders: ['style-loader', 'css-loader', 'sass-loader']
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
        })
    ]
}