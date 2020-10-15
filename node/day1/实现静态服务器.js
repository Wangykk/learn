// 1. 引入模块
const http = require("http");
const fs = require("fs");
// 2. 创建服务器对象
const app = http.createServer();
// 3. 监听端口并启动服务器
app.listen(3000, () => {
  console.log("server is running at 127.0.0.1:3000");
});
// 4. 注册事件监听请求
app.on("request", (req, res) => {
  // res.end('OK');
  // res.writeHead(200, {
  //   "content-type": "text/html;charset=utf-8",
  // });
  // res.end("<p>这是一个段落标签</p>");

  // 读取file/index.html内容 响应给客户端
  fs.readFile("./file/index.html", (err, data) => {
    if (err) return console.log(err.message);
    res.end(data);
  });
});
