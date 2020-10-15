// 1. 引入mysql模块
const mysql = require("mysql");
// 2. 创建连接对象
let conn = mysql.createConnection({
  host: "127.0.0.1", // 数据库服务器地址
  user: "root", // 数据库服务器的用户名
  password: "jianhaiyu521", // 数据库服务器密码
  database: "bignews", // 数据库名称
});
// 3. 启动连接
conn.connect();
// 4. 使用SQL语句操作数据库中的数据
let sql = "select * from students order by id";
// 增删改查 都使用一个方法query()
// query有三个参数
// 第一个参数是要执行的SQL语句
// 第二个参数: 参数化的数据 可以省略
// 第三个参数是回调函数
conn.query(sql, (err, result) => {
  // err 成功时是null失败是一个错误对象
  // result 成功时 是查询到的数据存在数组当中 失败时是undefined
  // console.log(err.message);
  console.log(result);
});

// 注意: 查询时result是查询到的数据 是一个数组 数组中的每一条数据都是一个对象
// 增删改操作时,result是一个对象 里面有受影响的行数
