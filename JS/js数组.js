/*
数组
数组是值的有序集合。每个值叫做元素，每个元素在数组中都有数字位置编号，也就是索引。
JS中的数组是弱类型的，数组中可以含有不同类型的元素。数组元素甚至可以是对象或其它数组。

创建数组
字面量
eg:
var BAT = ['Alibaba', 'Tencent', 'Baidu'];

new Array
eg:
var arr = new Array(); 

元素增删
var arr = [];
arr[0] = 1;
arr[1] = 2;
arr.push(3);
arr; // [1, 2, 3]

arr[arr.length] = 4; // equal to arr.push(4);
arr; // [1, 2, 3, 4]

arr.unshift(0);
arr; // [0, 1, 2, 3, 4];


delete arr[2];
arr; // [0, 1, undefined, 3, 4]
arr.length; // 5
2 in arr; // false

arr.length -= 1;
arr; // [0, 1, undefined, 3, 4],  4 is removed

arr.pop(); // 3 returned by pop
arr; // [0, 1, undefined], 3 is removed

arr.shift(); // 0 returned by shift
arr; // [1, undefined]

数组方法
Array.prototype.join 将数组转为字符串
eg:
var arr = [1, 2, 3];
arr.join(); // "1,2,3"
arr.join("_"); // "1_2_3"

Array.prototype.reverse 将数组逆序
eg:
var arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
arr; // [3, 2, 1]

Array.prototype.sort 排序
eg:
var arr = ["a", "d", "c", "b"];
arr.sort(); // ["a", "b", "c", "d"]

arr = [13, 24, 51, 3];
arr.sort(); // [13, 24, 3, 51]
arr; // [13, 24, 3, 51]

Array.prototype.concat 数组合并
eg:
var arr = [1, 2, 3];
arr.concat(4, 5); // [1, 2, 3, 4, 5]
arr; // [1, 2, 3]

arr.concat([10, 11], 13); // [1, 2, 3, 10, 11, 13]

arr.concat([1, [2, 3]]); // [1, 2, 3, 1, [2, 3]]

Array.prototype.slice 返回部分数组
var arr = [1, 2, 3, 4, 5];
arr.slice(1, 3); // [2, 3]
arr.slice(1); // [2, 3, 4, 5]
arr.slice(1, -1); // [2, 3, 4]
arr.slice(-4, -3); // [2]

Array.prototype.splice 数组拼接
var arr = [1, 2, 3, 4, 5];
arr.splice(2); // returns [3, 4, 5]
arr; // [1, 2];

arr = [1, 2, 3, 4, 5];
arr.splice(2, 2); // returns [3, 4]
arr; // [1, 2, 5];

arr = [1, 2, 3, 4, 5];
arr.splice(1, 1, 'a', 'b'); // returns [2]
arr; // [1, "a", "b", 3, 4, 5]

Array.prototype.forEach 数组遍历
eg:
var arr = [1, 2, 3, 4, 5];
arr.forEach(function(x, index, a){
    console.log(x + '|' + index + '|' + (a === arr));
});
// 1|0|true
// 2|1|true
// 3|2|true
// 4|3|true
// 5|4|true

Array.prototype.map 数组映射
eg:
var arr = [1, 2, 3];
arr.map(function(x) {
     return x + 10;
}); // [11, 12, 13]
arr; // [1, 2, 3]

Array.prototype.filter 数组过滤
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.filter(function(x, index) {
     return index % 3 === 0 || x >= 8;
}); // returns [1, 4, 7, 8, 9, 10]
arr; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.every & some 数组判断
eg1:
var arr = [1, 2, 3, 4, 5];
arr.every(function(x) {
     return x < 10;
}); // true

arr.every(function(x) {
     return x < 3;
}); // false

eg2:
var arr = [1, 2, 3, 4, 5];
arr.some(function(x) {
     return x === 3;
}); // true

arr.some(function(x) {
     return x === 100;
}); // false

Array.prototype.reduce&reduceRight
eg1:
max = arr.reduceRight(function(x, y) {
     console.log(x + "|" + y);
     return x > y ? x : y;
});
// 6|9
// 9|3
max; // 9

eg2:
var arr = [1, 2, 3];
var sum = arr.reduce(function(x, y) {
     return x + y
}, 0); // 6
arr; //[1, 2, 3]

arr = [3, 9, 6];
var max = arr.reduce(function(x, y) {
     console.log(x + "|" + y);
     return x > y ? x : y;
});
// 3|9
// 9|6
max; // 9

Array.prototype.indexOf&lastIndexOf 数组检索
eg:
var arr = [1, 2, 3, 2, 1];
arr.indexOf(2); // 1
arr.indexOf(99); // -1
arr.indexOf(1, 1); // 4
arr.indexOf(1, -3); // 4
arr.indexOf(2, -1); // -1
arr.lastIndexOf(2); // 3
arr.lastIndexOf(2, -2); // 3
arr.lastIndexOf(2, -3); // 

Array.isArray 判断是否为数组
eg:
Array.isArray([]); 
*/