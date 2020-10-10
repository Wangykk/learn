// 1. 引入模块
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring"); // 可以将查询的字符串转换成对象
const template = require("art-template");
const mime = require("mime");
const moment = require("moment");
// 2. 创建服务器对象
const app = http.createServer();
// 3. 监听端口并启动服务器
app.listen(3000, () => {
  console.log("server is running at 127.0.0.1:3000");
});
// 4. 注册事件监听请求
app.on("request", (req, res) => {
  // 获取请求的方式 请求的路径(不带参数的路径)
  let method = req.method;
  // 使用解构赋值的方式获取对应的路径和参数
  let { pathname, query } = url.parse(req.url, true);
  // console.log(pathname);
  // console.log(query);
  // 设置对应的mime类型
  res.writeHead(200, {
    "content-type": mime.getType(pathname),
  });
  // 根据不同的路径返回不同的数据
  if (
    method == "GET" &&
    (pathname == "/" || pathname == "/index" || pathname == "/index.html")
  ) {
    // 返回主页面
    fs.readFile(path.join(__dirname, "./data.json"), (err, data) => {
      if (err) return console.log(err.message);
      let arr = JSON.parse(data); // 将读取的数据转换成真正的数组
      // 将数据渲染到index.html页面
      let obj = {
        data: arr,
      };
      let htmlStr = template(path.join(__dirname, "./views/index.html"), obj);
      // htmlStr此时就是带有真正数据的标签内容 将这些内容响应给浏览器
      res.end(htmlStr);
    });
  } else if (method == "GET" && pathname == "/add") {
    // 返回添加内容页面
    // let htmlStr = template(path.join(__dirname, "./views/add.html"), {});
    fs.readFile(path.join(__dirname, "./views/add.html"), (err, data) => {
      if (err) return console.log(err.message);
      res.end(data);
    });
  } else if (method == "POST" && pathname == "/add") {
    // 是添加的功能
    // 1. 接收客户端发送过来的数据
    // 定义了一个post变量 用于暂存请求体的信息 请求体一开始发送过来的是字符串内容
    let post = "";
    // 通过req的data事件监听函数 每当接收到请求体的数据 就累加到post变量中
    // 因为post请求发送的数据可能会比较大 是分块传递的 chunk是块的意思
    req.on("data", (chunk) => {
      post += chunk;
    });
    // 在end事件触发后 通过querystring.parse将post解析为真正的POST请求格式 然后向客户端返回
    req.on("end", function () {
      let obj = querystring.parse(post); // 查询字符串转换成对象
      // let createTime = moment().format("YYYY-MM-DD HH:mm:ss");
      // obj.createTime = createTime;
      obj.createTime = moment().format("YYYY-MM-DD HH:mm:ss");
      // 读取data.js数据
      fs.readFile(path.join(__dirname, "./data.json"), (err, data) => {
        if (err) return console.log(err.message);
        // 将读取到的数据转换成真正的数组
        let arr = JSON.parse(data);
        // 给obj添加一个id
        obj.id = arr[arr.length - 1].id + 1;
        // 将数据追加到这个数组当中
        arr.push(obj);
        // 将添加后的数据再写回data.json中
        fs.writeFile(
          path.join(__dirname, "./data.json"),
          JSON.stringify(arr),
          (err) => {
            if (err) return console.log(err.message);
            // 提示用户跳转到主页面
            res.writeHead(302, {
              Location: "/",
            });
            res.end();
          }
        );
      });
    });
  } else if (method == "GET" && pathname == "/edit") {
    // 返回带数据的编辑页面
    // 接收传过来的id
    let { id } = query;
    // 读取data.json中的数据
    fs.readFile(path.join(__dirname, "./data.json"), (err, data) => {
      if (err) return console.log(err.message);
      // 将数据转换成数组
      let arr = JSON.parse(data);
      // 获取id对应的那一项数据
      arr.some((item) => {
        if (item.id == id) {
          // 将数据渲染到edit.html页面当中返回给浏览器
          let htmlStr = template(
            path.join(__dirname, "./views/edit.html"),
            item
          );
          res.end(htmlStr);
          return true;
        }
      });
    });
  } else if (method == "POST" && pathname == "/edit") {
    // 要实现的是更新操作
    // 接收客户端发送过来的数据 注册两个事件 data end
    let str = "";
    req.on("data", (chunk) => {
      str += chunk;
    });
    req.on("end", () => {
      // 将接收的字符串转换成对象
      let obj = querystring.parse(str);
      obj.createTime = moment().format("YYYY-MM-DD HH:mm:ss");
      // 读取data.json中数据
      fs.readFile(path.join(__dirname, "./data.json"), (err, data) => {
        if (err) return console.log(err.message);
        // 将data中的数据转换成真正的数组
        let arr = JSON.parse(data);
        // 遍历arr 查找id对应的那一项
        arr.some((item, index) => {
          if (obj.id == item.id) {
            arr.splice(index, 1, obj);
            return true;
          }
        });
        // 将修改后的内容再写回data.json中
        fs.writeFile(
          path.join(__dirname, "./data.json"),
          JSON.stringify(arr),
          (err) => {
            if (err) return console.log(err.message);
            // 告诉浏览器要重新定向
            res.writeHead(302, {
              Location: "/",
            });
            res.end();
          }
        );
      });
    });
  } else if (method == "GET" && pathname == "/del") {
    // 删除功能
    // 获取传递过来的id query.id
    let { id } = query;
    // 读取data.json数据
    fs.readFile(path.join(__dirname, "/data.json"), (err, data) => {
      if (err) return console.log(err.message);
      // 转成真正的数组
      let arr = JSON.parse(data);
      // 遍历数组 删除id对应的那一项数据
      arr.some((item, index) => {
        if (item.id == id) {
          arr.splice(index, 1);
          return true;
        }
      });
      // 再将数据写回data.json中
      fs.writeFile(
        path.join(__dirname, "./data.json"),
        JSON.stringify(arr),
        (err) => {
          if (err) return console.log(err.message);
          res.writeHead(302, {
            Location: "/",
          });
          res.end();
        }
      );
    });
  } else if (method == "GET" && pathname == "/static/css/index.css") {
    fs.readFile(path.join(__dirname, "./static/css/index.css"), (err, data) => {
      if (err) return console.log(err.message);
      res.end(data);
    });
  } else if (method == "GET" && pathname.endsWith(".jpg")) {
    fs.readFile(path.join(__dirname, pathname), (err, data) => {
      if (err) return console.log(err.message);
      res.end(data);
    });
  } else {
    res.end("404");
  }
});
