
document.getElementById("aBtn").onclick=function () {

    //异步加载js文件
    require.ensure([],function (require) {
        var a = require('./A.js');
        alert(a.data);
    })
};
document.getElementById("bBtn").onclick=function () {
    require.ensure([],function (require) {
        var b = require('./B.js');
        alert(b.data);
    })
}

