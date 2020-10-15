// 1. 引入mysql模块
const mysql = require("mysql");
// 2. 创建连接对象
let conn = mysql.createConnection({
  host: "127.0.0.1", // 数据库服务器的地址
  user: "root", // 数据库服务器的用户名
  password: "jianhaiyu521", // 数据库服务器的密码
  database: "bignews", // 数据库名称
});

// 3. 启动连接
conn.connect();

// 4. 根据sql语句操作数据库
// 添加数据

// let sql = "select * from students";

// let sql =
//   "insert into students (name,age,gender,address,phone,score) values ('jack',18,'男','宝山','13412345678',99)";

// let sql = "delete from students where id = 3";

let sql = "update students set address = '闵行区',score = 100 where id = 2 ";

conn.query(sql, (err, result) => {
  // console.log(err);
  // console.log(result);
  if (err) return console.log(err.message);
  console.log(result);
});
