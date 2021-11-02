const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'), //Main file for the app
    output: { //Output file for the result
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [new htmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
    })],
    module: {
        rules: [{
            test: /\.tsx$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    }
}