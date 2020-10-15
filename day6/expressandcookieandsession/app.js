// 1. 引入模块
const express = require("express");
// const session = require("session");
// 2. 创建服务器对象
const app = express();
// 3. 监听端口并启动服务器
app.listen(3000, () => {
  console.log("server is running at 127.0.0.1:3000");
});
// 4. 注册中间件
app.get("/", (req, res) => {
  res.set("set-cookie", "aaa=bbb");
  res.send("ok");
});

app.get("/index", (req, res) => {
  res.end("ookk");
});
