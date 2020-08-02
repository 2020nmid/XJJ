const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
});

module.exports = {
    mode: 'development',
    entry: [path.join(__dirname, './src/index.js'), path.join(__dirname, './src/1.js')],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        htmlPlugin,
        new HtmlWebpackPlugin({
            title: "压缩html",
            minify: {
                collapseWhitespace: true,//删除空格、换行
            },
        }),],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=11700' }
        ]
    }
}