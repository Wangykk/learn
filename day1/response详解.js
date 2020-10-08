// 1. 引入http模块
const http = require("http");
// 2. 创建服务器对象
const app = http.createServer();
// 3. 监听端口并启动服务器
app.listen(3000, () => {
  console.log("server is running at 127.0.0.1:3000");
});
// 4. 注册事件监听请求
app.on("request", (req, res) => {
  // res.write("hello");
  // res.write("world");
  // res.write("aaaa");
  // res.end();
  // res.statusCode: 响应的状态码 200 404 500
  // res.statusMessage:响应的状态信息, OK Not Found, 会根据statusCode自动设置
  // res.statusCode = 200;
  // res.statusCode = 404
  // res.statusCode = 1
  // res.statusMessage = "获取文章分类成功";
  // 服务器是以utf-8的形式发送的中文内容 而浏览器在不有明确获悉如何渲染这些中文的时候默认会以GBK来渲染
  // 为了避免乱码 应该让服务器通过响应头 告诉浏览器如何渲染中文内容
  // res.setHeader(name,value); 设置响应头信息 比如content-type
  // res.setHeader('content-type','text/html;charset=utf-8')

  res.writeHead(200, {
    "content-type": "text/html;charset=utf-8",
  });
  res.end("还有两节课就要放假了");
});
