module.exports = {
    //入口
    entry: {
        //可以有多个也可以只有一个
        "main":'./main.js'
    },
    output: {
        filename: "./build.js"
    },
    watch: true,//文件监视改动，自动生成build.js

}