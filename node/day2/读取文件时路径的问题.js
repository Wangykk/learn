// 1. 引入内置核心模块
const fs = require("fs");
console.log(123);
// 2. 调用方法读取数据
fs.readFile("./a.txt", "utf-8", (err, data) => {
  // readFile这个方法 会执行node命令的那个文件夹中查找要读取的文件
  // 最终实现的目的 是无论在哪里执行node命令都能够正确读取到文件的内容
  if (err) return console.log(err.message);
  console.log(data);
});
