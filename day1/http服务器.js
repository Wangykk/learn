// 1. 引入http模块
const http = require("http");
// 2. 创建http服务器
const server = http.createServer();
// 3. 监听端口并启动服务器
// 第一个参数 是端口号 要使用系统中没有被占用的端口号
// 第二个参数 是服务器的地址 不写默认是当前本机回环地址 127.0.0.1
// 第三个参数 是回调函数 当服务器启动起来要执行
server.listen(3000, () => {
  console.log("server is running at http//:127.0.0.1:3000");
});
// 4. 注册事件 监听请求
let num = 0;
server.on("request", (req, res) => {
  num++;
  // req:request的缩写 表示请求对象 所有与请求相关的内容都在这个对象中
  // res:response的缩写 表示响应内容  多有与响应相关的内容都在res这个对象中
  // res.write('hello'); // 表示向客户端响应内容
  // res.end(); // 表示响应结束的内容
  res.writeHead(200, {
    "content-type": "text/plain;charset=utf-8",
  });
  res.end("来了,老弟" + num); // 向浏览器响应内容后结束
});
