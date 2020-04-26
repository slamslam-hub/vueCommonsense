import './main.css'
import imgSrc from'./boot.png'
var App = {
    data(){
      return{
          srcImg:imgSrc,
      }
    },
    template:'<div>我是一个入口组件' +
        '<img :src="srcImg">' +
        '</div>'
};
//声明并导出
export var num1 = 1;//作为一整个对象key导出
//声明之后再导出
var num2 = 2;
export {num2};
export function add(x,y) {
    return console.log(x+y);
}
export default App;