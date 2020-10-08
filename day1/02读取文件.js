// 1. 引入内置核心模块fs
const fs = require("fs");
// 2. 调用readFile方法读取文件
fs.readFile("./a.txt", "utf-8", (err, data) => {
  // readFile有三个参数
  // 第一个参数 表示要读取的文件路径
  // 第二个参数 编码格式
  // 第三个参数 回调函数 又有两个参数
  //      err: 如果读取文件失败则err是一个错误对象 反之err是null
  //      data: 读取成功则data是读到的数据 反之undefined

  if (err) return console.log("读取文件失败");
  // 阻止代码向下执行
  console.log(data);
});
