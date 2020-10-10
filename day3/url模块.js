// 1. 引入模块
const http = require("http");
const url = require("url");
// 2. 创建服务器对象
const app = http.createServer();
// 3. 监听端口并启动服务器
app.listen(3000, () => {
  console.log("server is running at 127.0.0.1:3000");
});
// 4. 注册事件监听请求
app.on("request", (req, res) => {
  let obj = url.parse(req.url, true);
  let pathname = obj.pathname;
  let query = obj.query;
  console.log(obj);
  res.end("ok");
});
