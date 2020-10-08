const { fstat } = require("fs");
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
  let method = req.method; // 获取请求方式
  let url = req.url; // 获取请求路径 是端口号后面的所有的内容
  if (method == "GET" && url == "/") {
    fs.readFile("./file/index.html", (err, data) => {
      if (err) return console.log(err.message);
      res.end(data);
    });
  } else if (method == "GET" && url == "/css/index.css") {
    fs.readFile("./file/css/index.css", (err, data) => {
      if (err) return console.log(err.message);
      res.end(data);
    });
  } else if (method == "GET" && url == "/images/chizhutou.gif") {
    fs.readFile("./file/images/chizhutou.gif", (err, data) => {
      if (err) return console.log(err.message);
      res.end(data);
    });
  } else if (method == "GET" && url == "/js/index.js") {
    fs.readFile("./file/js/index.js", (err, data) => {
      if (err) return console.log(err.message);
      res.end(data);
    });
  } else {
    res.end("404");
  }
});
