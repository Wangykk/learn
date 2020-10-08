// 1. 引入内置核心模块fs
const fs = require("fs");
// 2. 调用writeFile写入数据
// fs.writeFile(filePath,data,encoding,callback)
// 第一个参数 是待写入的文件路径
// 第二个参数 是要写入的数据 一般是字符串
// 第三个参数 是编码方式 默认是'utf-8'
// 第四个参数 是回调函数 写入成功与否是调用的代码内容
//      err是一个错误对象 如果写入成功则err是一个null 反之是一个错误对象
// fs.writeFile('./a.txt','啊哈哈啊',err=>{})
fs.writeFile("./a.txt", "哈哈哈哈", "utf-8", (err) => {
  // 写入成功会覆盖原来的内容
  console.log(err);
  // if (err) {
  //   // 对象只要不是null 转成boolean类型的值都是true
  //   console.log("写入数据失败...");
  //   return; // 阻止代码的向下执行
  // }

  if (err) return console.log("写入数据失败");
  console.log("写入数据成功");
});
