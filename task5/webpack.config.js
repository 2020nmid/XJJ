/*
    webpack.config.js webpack的配置文件
    作用：指示webpack运作
*/
const { resolve } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

process.env.NODE_ENV = 'development';

module.exports ={
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.js',
        path:resolve(__dirname , 'build')
    },
    module:{
        rules:[{
            //处理CSS资源
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader,'css-loader',
            //CSS兼容性配置
            {   
                loader:'postcss-loader',
                options:{
                    ident:'postcss',
                    plugins:() =>[
                        require('postcss-preset-env')()
                    ]
                }
            }]
        },
        {   //处理图片资源
            test:/\.(jpg|png|gif)$/,
            loader:'url-loader',
            options:{
                limit:8 * 1024,
                outputPath:'imgs'
            }
        }]
    },
    plugins:[
            //处理html资源
        new HtmlWebPackPlugin({
            template: './src/index.html',
           minify:{
               //移除空格
               collapseWhitespace:true,
               //移除注释
               removeComments:true
           }
        }),
        new MiniCssExtractPlugin(),
        //压缩CSS
        new OptimizeCssAssetsWebpackPlugin()
    ],
    mode:'production',
}