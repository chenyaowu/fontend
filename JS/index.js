//直接向HTML输出流写内容
var mystr="我是";
var mychar="JavaScript";
document.write(mychar+"<br>");
document.write(mystr+mychar+"的忠实粉丝");
//警告消息对话框
  function rec(){
    var mychar="I love JavaScript";
    alert(mychar);
  }
//确认消息对话框
  function rec(){
    var mymessage=confirm();         ;
    if(mymessage==true){document.write("你是女士!"); }
    else{ document.write("你是男士!"); }
  }
  //提问消息对话框
  function rec(){
	var score; //score变量，用来存储用户输入的成绩值。
	score = prompt("请输入你的成绩","");               ;
	if(score>=90){ document.write("你很棒!");}
	else if(score>=75){document.write("不错吆!");}
	else{document.write("要努力了!");}
  }
//打开新窗口 window.open([URL], [窗口名称], [参数字符串])
/*
URL：可选参数，在窗口中要显示网页的网址或路径。如果省略这个参数，或者它的值是空字符串，那么窗口就不显示任何文档。
窗口名称：可选参数，被打开窗口的名称。
    1.该名称由字母、数字和下划线字符组成。
    2."_top"、"_blank"、"_self"具有特殊意义的名称。
       _blank：在新窗口显示目标网页
       _self：在当前窗口显示目标网页
       _top：框架网页中在上部窗口中显示目标网页
    3.相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。
   4.name 不能包含有空格。
参数字符串：可选参数，设置窗口参数，各参数用逗号隔开。
参数        值      说明
top        number  窗口顶部离开屏幕顶部的像素数
left       number  窗口顶部离开屏幕左端的像素数
width      number  窗口的宽度
menubar    yes,no  窗口有没菜单
toolbar    yes,no  窗口有没工具条
scrollbars yes,no  窗口有没滚动条
status     yes,no  窗口有没状态
*/

//关闭窗口 <窗口对象>.close();关闭指定的窗口
window.close();//关闭本窗口


//DOM

//通过Id获取元素
document.getElementById("id");

//返回带有指定名称的节点对象的集合(返回的是一个数组)
document.getElementsByName("name");

//返回带有指定标签名的节点对象的集合。返回元素的顺序是它们在文档中的顺序。
document.getElementsByTagName("Tagname")

//通过元素节点的属性名称获取属性的值。 elementNode.getAttribute(name)
//setAttribute() 方法增加一个指定名称和值的新属性，或者把一个现有的属性设定为指定的值。  elementNode.setAttribute(name,value)


//获取或替换HTML元素的内容 Object.innerHtml
var mychar=document.getElementById("con");           ;
 document.write("原标题:"+mychar.innerHTML+"<br>"); //输出原h2标签内容
 mychar.innerHTML="Hello world!"
 document.write("修改后的标题:"+mychar.innerHTML); //输出修改后h2标签内容

//改变HTML样式Object.style.property=new style
   var mychar = document.getElementById("pcon");
   mychar.style.color="red";
   mychar.style.fontSize="20";
   mychar.style.backgroundColor ="blue";

//显示和隐藏属性 Object.style.display = value   value:none(隐藏) block(显示)

//控制类名 object.className = classname
 function add(){
	var p1 = document.getElementById("p1");
	//原来类名：p1.className;
	//更改
	p1.className="one";
}

/*
在文档对象模型 (DOM) 中，每个节点都是一个对象。DOM 节点有三个重要的属性 ：

1. nodeName : 节点的名称

2. nodeValue ：节点的值

3. nodeType ：节点的类型

一、nodeName 属性: 节点的名称，是只读的。

1. 元素节点的 nodeName 与标签名相同
2. 属性节点的 nodeName 是属性的名称
3. 文本节点的 nodeName 永远是 #text
4. 文档节点的 nodeName 永远是 #document

二、nodeValue 属性：节点的值

1. 元素节点的 nodeValue 是 undefined 或 null
2. 文本节点的 nodeValue 是文本自身
3. 属性节点的 nodeValue 是属性的值

三、nodeType 属性: 节点的类型，是只读的。以下常用的几种结点类型:

元素类型    节点类型
  元素          1
  属性          2
  文本          3
  注释          8
  文档          9
*/

//访问选定元素节点下的所有子节点的列表，返回的值可以看作是一个数组，他具有length属性。  elementNode.childNodes

/*访问子节点的第一和最后项*
firstChild 属性返回‘childNodes’数组的第一个子节点。如果选定的节点没有子节点，则该属性返回 NULL。
lastChild 属性返回‘childNodes’数组的最后一个子节点。如果选定的节点没有子节点，则该属性返回 NULL
/

//获取指定节点的父节点 elementNode.parentNode

//访问兄弟节点 nextSibling 属性可返回某个节点之后紧跟的节点（处于同一树层级中）。

/*插入节点 
appendChild(newnode);       在指定节点的最后一个子节点列表之后添加一个新的子节点
insertBefore(newnode,node); 在已有的子节点前插入一个新的子节点 newnode: 要插入的新节点 node: 指定此节点前插入节点。
*/

//删除节点 nodeObject.removeChild(node) 方法从子节点列表中删除某个节点。如删除成功，此方法可返回被删除的节点，如失败，则返回 NULL。

//替换元素节点 node.replaceChild (newnode,oldnew) 实现子节点(对象)的替换。返回被替换对象的引用

//创建元素节点 document.createElement(tagName) 创建元素节点。此方法可返回一个 Element 对象。

//创建文本节点 document.createTextNode(data)  创建新的文本节点，返回新创建的 Text 节点。




//一维数组
var myarr=new Array(); //定义数组
 myarr[0]=80; 
 myarr[1]=60;
 myarr[2]=99;
//二维数组
var myarr=new Array();  //先声明一维 
for(var i=0;i<2;i++){   //一维长度为2
   myarr[i]=new Array();  //再声明二维 
   for(var j=0;j<3;j++){   //二维长度为3
   myarr[i][j]=i+j;   // 赋值，每个数组元素的值为i+j
   }
 }

 /*事件
onclick       点击事件
onmouseover   鼠标经过事件
onmouseout    鼠标移开事件
onchange      文本框内容改变事件
onselect      文本框内容选中事件
onfocus       光标聚集
onblur        光标离开
onload        网页导入
onunload      关闭网页
 */

/*日期对象*/
var d= new Date();//当前系统事件
var d1 = new Date(2019,1,1);
/*常用方法
get/setDate()      返回/设置日期
get/setFullYear()  返回/设置年份，用四位数表示
get/setYear()      返回/设置年份
get/setMonth()     返回/设置月份 0：一月....11：十二月
get/setHours()     返回/设置小时 24小时制
get/setMinutes()   返回/设置分钟数
get/setSeconds()   返回/设置秒数
get/setTime()      返回/设置时间（毫秒为单位）
get/setDay()	   返回/设置星期 0：星期日....6:星期六
*/

/*字符串对象
toUpperCase()               将小写字母转换为大写字母
toLowerCase()		        将大写字母转换为小写字母
charAt(index)               返回指定位置字符
indexOf(substring,startpos) substring 需要检索的字符串 startpos 可选整数 返回某个字符首次出现的位置
split(separator,limit)      separator 从该参数指定的地方切割 limit 可选参数，切割次数 将字符串切割为字符串数组
substring(startPos,stopPos) startPos 开始位置 stopPos 可选，结束位置  截取字符串从startPos-stopPos
substr(startPos,length)		startPos 开始位置 length	  可选，结束位置  截取字符串指定长度
*/

/*window对象

计时器

在执行时，从载入页面后每隔指定的时间（毫秒）执行代码
setInterval(代码，交互时间);
取消计时器
clearInterval(id_of_setInterval)

setTimeout()计时器，在载入后延迟指定时间后,去执行一次表达式,仅执行一次
setTimeout(代码,延迟时间);
停止计时器。
clearTimeout(id_of_setTimeout)


history
window.history.[属性|方法]

length    返回浏览器历史列表中的URL数量

back()    加载history列表中的前一个Url
forward() 加载histroy列表中的下一个Url
go(index) 加载histroy列表中的摸个具体的页面

location
location.[属性|方法]

hash  		设置或返回从#开始的url
host        设置或返回主机名和当前url的端口号
hostname    设置或返回当前url的主机名
href        设置或返回完整的url
pathname    设置或返回当前url的路径部分
port        设置或返回url的端口号
protocol    设置或返回当前url的协议
search      设置或返回从?开始的url

assign()    加载新的文档
reload()    重新加载当前文档
replace()   用新的文档替换当前文档

navigator
navigator.属性

appCodeName  浏览器代码的字符串表示
appName      返回浏览器的名称
appVersion   返回浏览器的平台和版本信息
platform     返回运行浏览器的操作系统平台
userAgen     返回由客户机发送服务器的user-agent头部的值
*/


