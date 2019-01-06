/*
事件流
eg:
<body>
	<div>
		<input type="button" value = "按钮" id = "btn">
	</div>
</body>

事件冒泡
即事件最开始由最具体的元素接收，然后逐级向上传播至最不具体的那个节点
事件顺序: button-> div -> body

事件捕获
不太具体的节点应该更早接收到事件，而最具体的节点最后接收到事件
事件顺序: body-> div ->button
*/

/*
使用事件处理程序
1.HTML事件处理程序(缺点 HTML和JS代码紧密耦合)
直接加载标签上，eg:<input type="button" value = "按钮" id = "btn" onclick="showMsg()">

2.Dom0级事件处理程序
把一个函数赋值给一个事件的处理程序属性，
eg:
<input type="button" value = "按钮" id = "btn">
var btn = document.getElementById("btn");
btn.onclick=function(){alert('这是通过DOM0级添加的事件');}

3.DOM2级事件处理程序
定义了2个方法，用于处理指定和删除事件处理程序的操作
addEventListener()和removeEventListener()接收3个参数：要处理的事件名、作为事件处理程序的函数、布尔值(true表示捕获阶段调用程序，false表示冒泡阶段，一般false)。
eg:
<input type="button" value = "按钮" id = "btn">
function showMes(){}
var btn = document.getElementById("btn");
btn.addEventListener('click',showMes,false);添加事件
btn.removeEventListener('click',showMsg,false);删除事件

可以引用当前元素的值
btn.addEventListener('click',function(){
	alert(this.value);
},false);

IE事件处理程序
attachEvent()添加事件
detachEvent()删除事件
接收2个参数：要处理的事件名、作为事件处理程序的函数
eg:
function showMes(){}
var btn = document.getElementById("btn");
btn.attachEvent('onclick',showMsg);
btn.detachEvent('onclick',showMsg);

跨浏览器事件处理程序
var eventUtil = {
	//添加句柄
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else(element.attachEvent){
			element.attachEvent('on'+type,handler);
		}else{
			//element.onclick == element[onclick]
			element['on'+type] = handler;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else(element.detachEvent){
			element.detachEvent('on'+type,handler);
		}else{
			element['on'+type] = null;
		}
	}
}
function showMes(){}
var btn = document.getElementById("btn");
eventUtil.addHandler(btn,'click',showMes());
*/

/*
事件对象event（在触发DOM上的事件时都会产生一个对象）
eg:
<input type="button" value = "按钮" id = "btn">
function showMes(event){
	alert(event.type);
}
var btn = document.getElementById("btn");
btn.addEventListener('click',showMes,false);添加事件

type   用于获取事件类型
target 用户获取事件目标(即元素)
stopPropagation()方法 用于阻止事件冒泡
preventDefault()方法 阻止事件的默认行为

IE中的事件对象
type 	     用于获取事件类型
srcElement   用于获取事件的目标
cancelBubble 用于阻止事件冒泡(true 阻止 false不阻止)
returnValue  用于阻止事件的默认行为(false表示阻止 true 表示不阻止)
*/