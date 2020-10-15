// 1. 引入内置核心模块fs
const fs = require("fs");
// 2. 调用appendFile方法来追加文件内容
fs.appendFile("./a.txt", "\n今天下午就放假了,要早点放学", (err) => {
  if (err) return console.log("写入内容失败");
  console.log("写入内容成功");
});
