// 1. 引入art-template模板
const path = require("path");
const template = require("art-template");

// 2. 调用方法实现渲染
// 基于模板名渲染模板
// template(filename,data);
// template有两个参数
// 第一个参数表示要渲染的文件路径 这个路径必须是绝对路径
// 第二个参数是数据 这个数据必须是对象
let obj = {
  name: "rose",
  gender: "女",
  age: 23,
};
let htmlStr = template(path.join(__dirname, "./views/index.html"), obj);
console.log(htmlStr);
