// 1. 引入模块
const http = require("http");
const fs = require("fs");
const path = require("path");
// 2. 创建服务器对象
const app = http.createServer();
// 3. 监听端口并启动服务器
app.listen(3000, () => {
  console.log("server is running at 127.0.0.1");
});
// 4. 注册事件监听请求
app.on("request", (req, res) => {
  // 读取文件中的内容 响应给浏览器
  let url = req.url; // 获取请求的路径 获取的是端口号后面的所有内容
  let method = req.method;
  if (
    method == "GET" &&
    (url == "/" || url == "/index" || url == "/index.html")
  ) {
    fs.readFile(path.join(__dirname, "./views/index.html"), (err, data) => {
      if (err) return console.log(err.message);
      res.end(data);
    });
  } else if (method == "GET" && (url == "/login" || url == "/login.html")) {
    fs.readFile(path.join(__dirname, "./views/login.html"), (err, data) => {
      if (err) return console.log(err.message);
      res.end(data);
    });
  } else if (method == "GET" && (url == "/list" || url == "/list.html")) {
    fs.readFile(path.join(__dirname), "./views/list.html", (err, data) => {
      if (err) return console.log(err.message);
      res.end(data);
    });
  } else if (method == "GET" && (url == "/movie" || url == "/movie.html")) {
    fs.readFile(path.join(__dirname, "./views/movie.html"), (err, data) => {
      if (err) return console.log(err.message);
      res.end(data);
    });
  } else if (method == "GET" && url == "/assets/css/index.css") {
    fs.readFile(path.join(__dirname, "./assets/css/index.css"), (err, data) => {
      if (err) return console.log(err.message);
      // 在响应给客户端css样式的时候 最好是加一个正确的响应头信息
      res.writeHead(200, {
        "content-type": "text/css;charset=utf-8",
      });
      res.end(data);
    });
  } else if (method == "GET" && url == "/assets/images/chizhutou.gif") {
    fs.readFile(
      path.join(__dirname, "./assets/images/chizhutou.gif"),
      (err, data) => {
        if (err) return console.log(err.message);
        res.end(data);
      }
    );
  } else if (method == "GET" && url == "/assets/js/index.js") {
    fs.readFile(path.join(__dirname, "./assets/js/index.js"), (err, data) => {
      if (err) return console.log(err.message);
      res.end(data);
    });
  } else {
    res.end("404");
  }
});
