// let num = [10, 20, 30];
// console.log(num); // 打印数组本身
// console.log(num[0], num[1], num[2]);
// console.log(...num);

// 展开运算符的基本应用 复制数组

// let num1 = [1, 2, 3];
// let num2 = num1.concat([]);
// console.log(num2);

// 合并数组
let num1 = [10, 20, 30];
let num2 = [1, 2, 3];

// let num3 = num1.concat(num2);
let num3 = [...num1, ...num2];
console.log(num3);
