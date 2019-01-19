/*
类型检测
typeof, instanceof, Object.prototype.toString, constructor, duck type

eg:
>typeof 100 
<"number"

>function Student(){}
>var stu = new Student();
>stu instanceof Student
<true

typeof: 适合基本类型及function检测，遇到null失效
[[Class]]: 通过{}.toString拿到，适合内置对象和基元类型，遇到null和undefined失效
instanceof: 适合自定义对象，也可以用来检测原生对象，在不同iframe和window间检测失效

------------------------------------------------------------------------------
delete运算符
eg1:
>var obj = {x:1};
>obj.x;
>delete obj.x;
>obj.x
<undefined

eg2:
>var obj = {};
>Object.defineProperty(obj,'x',{
	configurable: false,
	value:1
});
>delete obj.x;
<false
>obj.x;
<1


in运算符
eg:
>window.x = 1;
>'x' in window;
<true
------------------------------------------------------------------------------
try catch语句
eg:
try{
	throw new Error("oops");
}catch(ex){
	console.error("outer",ex.message);
}finally{
	
}


for..in 语句
1.顺序不确定
2.enumerable为false时不会出现
3.for in对象属性时受原型链影响
eg:
var p;
var obj = {x:1,y:2}
for(p in obj){}
------------------------------------------------------------------------------
严格模式
'use strict';
1.不允许用with
2.不允许未声明的变量被赋值
3.arguments变为参数的静态副本
4.delete参数、函数名报错
5.delete不可配置的属性报错
6.对象字面量重置属性名报错
7.禁止八进制字面量
8.eval,arguments变为关键字，不能作为变量、函数名
9.eval独立作用域
10.一般函数调用时(不是对象的方法调用，也不使用apply/call/bind等修改this)this指向null，而不是全局对象。
11.若使用apply/call，当传入null或undefined时，this将指向null或undefined，而不是全局对象。
12.试图修改不可写属性(writable=false)，在不可扩展的对象上添加属性时报TypeError，而不是忽略。
13.arguments.caller, arguments.callee被禁用

严格模式是一种特殊的运行模式，
它修复了部分语言上的不足，提供更强的错误检查，并增强安全性
------------------------------------------------------------------------------
创建对象
1.字面量
eg:
var obj1 = { x: 1, y: 2 };
var obj2 = {x: 1, y: 2, o: { z: 3, n: 4 } }

2.new/原型链
eg:
>function foo(){}
>foo.prototype.z = 3;
>var obj = new foo();
>obj.x = 1;
>obj.y = 2;
>obj.x
<1
>obj.y
<2
>obj.z
<3
>typeof obj.toString
<'function'
>'z' in obj
<true
>obj.hasOwnProperty('z');
<false

3.Object.create
>var obj = Object.create({x: 1});
>obj.x
<1
>typeof obj.toString
<'function'
>obj.hasOwnProperty('x');
<false
------------------------------------------------------------------------------
属性读写
>var obj = {x:1,y:2}
>obj.x
<1
>obj["y"]
<2
>obj["x"]=3;
>obj.y = 4;

属性删除
>var person = { age: 28, title: 'fe' }
>delete person.age
>person.age
<undefined

属性检测
>var cat = new Object;
>car.legs = 4;
>cat.name ='K'
>'legs' in cat;
<true
>'abc' in cat;
<false
>"toString" in cat;
<true,inherited property!!!

>cat.hasOwnProperty('legs');
<true
>cat.hasOwnProperty('toString');
<false

>cat.propertyIsEnumerable('legs');
<true
>cat.propertyIsEnumerable('toString');
<false


属性getter/setter方法
eg1:
>var man={
	name: 'aaa',
	get age(){
		return new Date().getFullYear();
	},
	set age(val){
		console.log('Age can\'t be set to' + val);
	}
}
>console.log(man.age)
<2019
>man.age = 100;
<Age can't be set to 100
>console.log(man.age);
<27

eg2:
>var man = {
	name: 'aaa',
	$age: null,
	get age(){
		if(this.$age == undefined){
			retuen new Date().getFullYear();
		}else{
			return this.$age;
		}
	},
	set age(val){
		val =+ val;
		if(!isNaN(val) && val > 0 && val < 150){
			this.$age =+ val ;
		}else{
			throw new Error('Incorrect val =' + val);
		}
	}
}
>console.log(man.age)
<2019
>man.age = 100
>console.log(man.age)
<100
>man.age = 'abc'
<erroe:Incrorrect val = NaN


get/set与原型链
eg1:
>function foo(){}
>Object.defineProperty(
	foo.prototype, 'z', get: function(){return 1;}
);
>var obj = new foo();
>obj.z
<1
>obj.z = 10;
<1

>Object.defineProperty(
	obj, 'z', {
		value: 100,
		configurable: true
	}
);
>obj.z
<100
>delete obj.z
>obj.z
<1

eg2:
>var o = {};
>Object.defineProperty(o, 'x', {value: 1});
>var obj = Object.create(o);
>obj.x
<1
>obj.x = 200;
>obj.x
<1

>Object.defineProperty(obj, 'x', {writeable: true, configurable: true, value: 100});
>obj.x
<100
>obj.x = 500;
>obj.x
<500


属性标签
value 值
writeable 是否可写
enumerable 遍历是否出现
configurable 是否属性是否可以修改

设置属性
eg1:
Object.defineProperty(person,'name',{
	configurable : false,
	writeable: true,
	enumerable: true,
	value: 'chen'
})

eg2:
Object.definePropertys(person,
	'name', { configurable : false, writeable: true, enumerable: true, value: 'chen' }
	'age', { configurable : false, writeable: true, enumerable: true, value: 'chen' }
})

获取属性
>Object.getOwnPropertyDescriptor(person,'name');
<Object{ configurable : false, writeable: true, enumerable: true, value: 'chen' }


对象标签
[[proto]] 原型标签
[[class]] class标签 
[[extensible]] extensible标签 对象属性是否可扩展

eg:
>var obj = {x: 1, y: 2};
>Object.isExtensible(obj);
<true
>Object.preventExtensions(obj);
>Object.isExtensible(obj);
<false
>obj.z = 1
>obj.z
<undefined


序列化：
eg:
var obj = {x: 1, y: true, z: [1, 2, 3], nullVal: null };
JSON.stringify(obj);  //"{"x": 1, "y": true, "z": [1, 2, 3], "nullVal": null}"
//如果值是undefined，不传
var o = {val: undefined, a: NaN, b: Infinity, c: new Date()};
JSON.stringify(obj);  //"{"a": null, "b": null, "c": "2019-01-19T20:00:00.000Z"}"

obj = JSON.parse('{"x": 1}');
obj.x; //1

自定义序列化：
var obj = {x: 1, y: 2, o: { o1: 1, o2: 2, toJSON: function(){ return this.o1 + this.o2 } } };
JSON.stringify(obj); // "{"x": 1, "y":2, "o": 3}"


其他对象方法
>var obj = {x: 1, y: 2};
>obj.toString();
<"[Object Object]"
>obj.toString = function(){ return this.x + this.y };
>obj.toString();
<3

>obj.valueOf = function(){return this.x + this.y + 100};
>obj.valueOf();
<103
------------------------------------------------------------------------------
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
