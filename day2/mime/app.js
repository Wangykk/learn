// 1. 引入模块
// 第三方模块的使用方式与内置核心模块是一样的
const mime = require("mime");

// 调用方法生成对应的mime
console.log(mime.getType(".css"));
console.log(mime.getType(".html"));
console.log(mime.getType(".js"));
console.log(mime.getType(".gif"));
console.log(mime.getType(".json"));

console.log(mime.getType("http://127.0.0.1:3000/index.css"));
console.log(mime.getType("http://127.0.0.1:3000/index.html"));
console.log(mime.getType("http://127.0.0.1:3000/index.js"));
console.log(mime.getType("http://127.0.0.1:3000/index.gif"));
console.log(mime.getType("http://127.0.0.1:3000/index.jpeg"));
console.log(mime.getType("http://127.0.0.1:3000/index.json"));
