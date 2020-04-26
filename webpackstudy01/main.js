//从esModule的模块导入
import Vue from './node_modules/vue/dist/vue.js'
import App from './App.js'
import {num1,num2,add} from './App.js'

console.log(num1);
console.log(num2);
add(3,4);
new Vue({
    el:"#app",
    components:{
        App
    },
    template:'<App/>',
});