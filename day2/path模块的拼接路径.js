// 1. 引入path模块
const path = require("path");
// 2. 调用join方法
let p1 = path.join("a", "b", "c");
// 无论拼接路径的时候 有没有点 path.join都会给我们拼接成一个正确的路径
// 可以保证在window或linux系统下都可以使用
console.log(p1);
console.log(path.join("m", "n", "a.html"));
console.log(path.join("m", "n", "./a.html"));
console.log(path.join("a", "b", "c", "d.html"));
console.log(path.join("a", "b", "c", "../../d.html"));
