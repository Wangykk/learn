// let name = "tom";
// let fn = function () {
//   console.log("这是a.js中的函数调用了");
// };

// module.exports.name = name;
// module.exports.fn = fn;

// let f1 = function () {
//   console.log("这是a.js中的一个简单函数");
// };

// let f2 = function () {
//   console.log(123);
// };

// module.exports = f1;
// module.exports = {
//   f1() {
//     console.log("这是a.js中的一个简单函数");
//   },
//   f2() {
//     console.log("这是a.js中的一个简单函数");
//   },
// };

// export相当于是module.exports的一个副本 但是个别地方有点问题(对象)

// let name = "tom";

// module.exports.name = name;
// exports.name = name;
// exports.fn = function () {
//   console.log(123);
// };
exports = {
  name: "tom",
  age: 20,
  sayHi() {
    console.log(123);
  },
};

/*
1. 模块中的数据是以module.exports向外导出为主
2. exports是module.exports的一个副本
3. exports是可以导出简单的一些数据 字符串 数字 布尔 一个函数
4. 如果给exports直接复制一个对象的话 则exports和module.exports的关联就断开了
5. 以后用模块导出数据的话 尽量使用module.exports
*/
