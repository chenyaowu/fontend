/*XMLHttpRequest对象
open(method,url,async)
send(string)
eg:
request.open("GET","get.jsp",true);
request.setRequestHeader("Content-type","application/x-www.-form-urlencoded");
request.send("name=zhangsan&sex=boy");


responseText : 获得字符串形式的响应数据
responseXML  : 获取XML形式的响应数据
status和statusText ：以数字和文本形式返回HTTP状态码
getAllResponseHeader() : 获取所有的响应报头
getResponseHeader() : 查询响应中的某个字段的值
readyState属性 
0：请求未初始化,open还没调用
1:服务器连接已经建立,open已经调用
2:请求已接收，也就是接收到头信息了
3:请求处理中，也就是接收到响应主体了
4:请求以完成，且响应已就绪，也就是响应完成了
eg:
var request = new XMLHttpRequest();
request.open("GET","get.php",true);
request.send();
request.onreadystatchange = function(){
	if(request.readyState === 4 && request.status === 200){
		//do something
	}
}



JQuery实现ajax

$.ajax({
	type: "POST",                                               //请求方式
	url: url,                                                   //请求路径
	date: date,                                                 //请求参数
	dateType: "json",                                           //参数类型
	asyn: true,                                                 //请求是否异步
	cache: false,                                               //是否从浏览器缓存中加载请求信息
	timeout: 1000,												//请求超时时间,毫秒
	contentType: "application/x-www-form-urlencoded",			//发送信息至服务器时内容编码类型，默认"application/x-www-form-urlencoded"
	global: true,												//是否触发全局 AJAX 事件,默认true,
	ifModified: false,											//(默认: false) 仅在服务器数据改变时获取新数据。使用 HTTP 包 Last-Modified 头信息判断
	processData: true,											//(默认: true) 默认情况下，发送的数据将被转换为对象(技术上讲并非字符串) 以配合默认内容类型 "application/x-www-form-urlencoded"。如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。
	beforeSend: function(XMLHttpRequest){},                     //请求前处理 
	success: function(data,textStatus){},						//请求成功处理
	error: function(XMLHttpRequest,textStatus,errorThrown){},   //请求出错处理
	complete: function(XMLHttpRequest,textStatus){}				//请求完成处理
});



跨域处理方式
一、代理(后端)
eg:
www.bejjing.com 需要请求www.shanghai.com/service.jsp,在www.beijing.com/proxy-shanghaiservice.jsp

二、JSONP(只对get请求起作用)
eg:
前端：
$.ajaz({
	type: "GET",                                               
	url: url,                                                
	date: date,                                                 
	dateType: "jsonp",
	jsonp:"callback",                                           
	asyn: true,                                                 
	cache: false,                                               
	beforeSend: function(XMLHttpRequest){},                      
	success: function(data,textStatus){},
	error: function(XMLHttpRequest,textStatus,errorThrown){},
	complete: function(XMLHttpRequest,textStatus){}
});

后端：
String jsonp = request.getParamter("callback");//获取jsonp
return jsonp+"resultjson";//返回数据前加jsonp;

三、XHR2(不支持IE10以下)
eg:
后端
header("Content-Type:application/json;charset=utf-8");
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Method:POST,GET");
*/
