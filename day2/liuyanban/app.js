// 1. 引入模块
const http = require("http");
const fs = require("fs");
const path = require("path");
const template = require("art-template");
// 2. 创建服务器对象
const app = http.createServer();
// 3. 监听端口并启动服务器
app.listen(3000, () => {
  console.log("server is running at 127.0.0.1:3000");
});
// 4. 注册事件监听请求
app.on("request", (req, res) => {
  let method = req.method;
  let url = req.url;

  // 5. 根据请求的路径进行判断
  if (method == "GET" && (url == "/" || url == "/index.html")) {
    fs.readFile(path.join(__dirname, "./data.json"), "utf-8", (err, data) => {
      if (err) return console.log(err.message);
      let arr = JSON.parse(data); // 将读取到的字符串转换成数组对象

      // 准备对象数据
      let obj = {
        data: arr,
      };

      // 生成带有真正数据的html结构的标签
      let htmlStr = template(path.join(__dirname, "./views/index.html"), obj);
      res.end(htmlStr);
    });
  } else if (method == "GET" && url == "/css/index.css") {
    fs.readFile(path.join(__dirname, "./assets/css/index.css"), (err, data) => {
      if (err) return console.log(err.message);
      res.end(data);
    });
  } else if (method == "GET" && url.endsWith(".jpg")) {
    fs.readFile(path.join(__dirname, "./assets" + url), (err, data) => {
      if (err) return console.log(err.message);
      res.end(data);
    });
  } else {
    res.end("404");
  }
});
