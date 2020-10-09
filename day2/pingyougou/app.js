// 1. 引入模块
const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("mime");
// 2. 创建服务器对象
const app = http.createServer();
// 3. 监听端口并开启服务器
app.listen(3000, () => {
  console.log("server is running at 127.0.0.1:3000");
});
// 4. 注册事件监听请求
app.on("request", (req, res) => {
  let url = req.url;
  let method = req.method;
  if (method == "GET" && (url == "/favicon.ico" || url == "/")) {
    res.end("404");
  } else {
    fs.readFile(path.join(__dirname, url), (err, data) => {
      if (err) return console.log(err.message);
      // 对于每一次正确数据的响应 都应该要设置一个对应的响应头
      res.writeHead(200, {
        "content-type": mime.getType(url) + ";charset=utf-8",
      });
      res.end(data);
    });
  }
});
