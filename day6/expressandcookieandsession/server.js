// 1. 引入模块
const path = require("path");
const express = require("express");
const session = require("express-session");
// 2. 创建服务器对象
const app = express();

// 注册了session中间件
app.use(
  session({
    secret: "fsfsfsscs", // 相当于是一个加密秘钥 值可以是任意字符串
    resave: false, // 强制session保存到session store中
    saveUninitialized: false, // 强制没有'初始化'的session保存到storage中
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);

// 3. 监听端口并启动服务器
app.listen(3000, () => {
  console.log("server is running at 127.0.0.1:3000");
});
// 4. 注册中间件
app.get("/", (req, res) => {
  // 先进行判断 如果没有登录的话 则要先进行登录
  // 登录成功后的跳转回有sessionId带过来
  console.log(req.session);
  if (req.session.isLogin == true) {
    // 说明 之前真的登陆过了
    res.sendFile(path.join(__dirname, "./views/index.html"));
  } else {
    res.redirect("/login");
  }
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

app.post("/login", (req, res) => {
  // console.log(req.body);
  let { userName, userPwd } = req.body;
  if (userName == "tom" && userPwd == "123") {
    // 登陆成功之后，应该要生成session session是一段加密后的数据
    // session是存在于服务器的内存当中的 同时给这段数据生成一个唯一的sessionId
    // 然后将这个sessionId再通过响应头响应给浏览器

    // 浏览器有一个自动的功能 就是在每次发送 请求的时候，都会携带着当前域名下的cookie信息发给服务器

    req.session.user = req.body;
    req.session.isLogin = true;

    // res.send({code:0,msg:'登陆成功'})
    res.redirect("/");
  }
});
