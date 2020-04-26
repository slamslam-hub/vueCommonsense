var path = require("path");
const webpack = require("webpack");
const packagejson = require("./package.json");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    //入口
    entry: {
        //可以有多个也可以只有一个
        "main":'./src/main.js',
        "vendor":Object.keys(packagejson.dependencies),//获取生产环境所依赖的库
    },
    output: {
        path: path.resolve("./dist"),//相对路径转绝对路径
        filename: "[name].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:"common",
            filename: '[name].js',
        }),
        new htmlWebpackPlugin({
            //chunks主要用于多入口文件，当你有多个入口文件的时候，他就会编译生成多个打包后的文件，chunks就能选择你要使用哪些js文件
            chunks:["common","vendor","main"],
            template:"./src/index.html",
            inject:true
        })
    ],
    watch: true,//文件监视改动，自动生成build.js

}
