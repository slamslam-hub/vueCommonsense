var path = require("path");
const webpack = require("webpack");
const packagejson = require("./package.json");
module.exports = {
    //入口
    entry: {
        //可以有多个也可以只有一个
        "main1":'./src/main1.js',
        "main2":'./src/main2.js',
        "vendor":Object.keys(packagejson.dependencies),//获取生产环境所依赖的库
    },
    output: {
        path: path.resolve("./dist"),//相对路径转绝对路径
        filename: "[name].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:['vendor','runtime'],
            filename: '[name].js',
            minChunks:Infinity//从第三方库中分离出自定义的模块
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            filename: '[name].js',
            chunks:["main1","main2"],//从main1和main2中抽离出common Chunk
        }),
    ],
    watch: true,//文件监视改动，自动生成build.js

}
