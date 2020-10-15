// 1. 引入js模块
const http = require("http");
// 2. 创建服务器对象
const app = http.createServer();
// 3. 监听端口并启动服务器
app.listen(3000, () => {
  console.log("server is running at 127.0.0.1:3000");
});
// 4. 注册时间啊监听请求
app.on("request", (req, res) => {
  // 只要有请求就会执行这个函数中的代码
  // headers:所有的请求头信息
  // method:请求的方式 GET/POST
  // url: 请求的地址 获取的端口号后面的所有的数据
  // console.log(req.headers);
  // console.log(req.method); // 请求方式
  console.log(req.url); // 获取的是请求地址中的端口号后面的所有内容 包括参数
  res.end("OK");
});
