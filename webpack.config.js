const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production'


module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'), //Main file for the app
    output: { //Output file for the result
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devServer: { static: path.resolve(__dirname, 'public'), hot: true },
    plugins: [new htmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
    }, isDevelopment && new ReactRefreshWebpackPlugin())].filter(Boolean),
    module: {
        rules: [{
            test: /\.(j|t)sx$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
}