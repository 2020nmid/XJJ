const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/todolist.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "todolists",
            minify: {
                collapseWhitespace: true,//删除空格、换行
            },
            template: './src/todolist.html'
        })],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}