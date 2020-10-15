// 1. 引入模块
const mysql = require("mysql");
// 2. 创建连接对象
let conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "jianhaiyu521",
  database: "bignews",
});
// 3. 启用连接
conn.connect();
// 4. 调用方法 根据SQL语句来执行操作

// 4.1 根据条件来查询数据
// let name = "zxb";
// // let sql = `select * from students where name = '${name}'`;
// let sql = `select * from students where name = ?`;
// conn.query(sql, name, (err, result) => {
//   if (err) return console.log(err.message);
//   console.log(result);
// });

// 4.2 根据前端传递过来的数据 添加一条数据到数据库
// let obj = {
//   name: "rose",
//   age: 22,
//   gender: "女",
//   address: "嘉定",
//   phone: 13321234567,
//   score: 89,
// };

// let sql = `insert into students (name,age,gender,address,phone,score) values (?,?,?,?,?,?)`;
// conn.query(
//   sql,
//   [obj.name, obj.age, obj.gender, obj.address, obj.phone, obj.score],
//   (err, result) => {
//     if (err) return console.log(err.message);
//     console.log(result);
//   }
// );

// 添加的理想方式
// let sql = `insert into students set ?`;
// conn.query(sql, obj, (err, result) => {
//   if (err) return console.log(err.message);
//   console.log(result);
// });

// 删除数据
// let sql = `delete from students where id = ?`;
// conn.query(sql, [15], (err, result) => {
//   if (err) return console.log(err.message);
//   if(result.affectedRows == 1){
// console.log('删除成功');
// }
// });

// 更新操作
let obj = {
  id: 16,
  name: "哈哈",
  age: 27,
  gender: "男",
  address: "黄浦",
  phone: 13812345678,
  score: 100,
};

// let sql = `update students set name = '',age = 20 `;
// let sql = `update students set name = ? age = ? where id = ?`;
// conn.query(sql, [obj.name, obj.age, obj.id], (err, result) => {
//   if (err) return console.log(err.message);
//   if (result.affectedRows == 1) {
//     console.log("更新成功");
//   }
// });

let id = obj.id; // 先把id存储起来
delete obj.id; // 删除对象中的id
// 参数化更简单的更新
let sql = `update students set ? where id = ?`;
conn.query(sql, [obj, id], (err, result) => {
  if (err) return console.log(err.message);
  if (result.affectedRows == 1) {
    console.log("更新成功");
  }
});
