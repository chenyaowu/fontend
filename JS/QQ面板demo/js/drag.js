function getById(id){return document.getElementById(id);}

function getByClass(clsName,parent){
	var oParent = parent?getById(parent):document;
	var elements = oParent.getElementsByTagName('*');
	var eles = [];

	for (var i = 0 ,l = elements.length; i < l; i++) {
		if(elements[i].className == clsName){
			eles.push(elements[i]);
		}
	}

	return eles;
}

//获取事件
function getEvent(e){
	return e = e || window.event;
}

//阻止事件冒泡
function stopBubble(e){
	getEvent(e);
	if(e.cancelBubble){
		e.cancelBubble = true;
	}else{
		e.stopPropagation();
	}
}


window.onload = drag;

function drag(){
	var oTitle = getByClass('login_logo_webqq','loginPanel')[0];
	//拖曳
	oTitle.onmousedown = fnDown;
	//关闭
	var oClose =  getById('ui_boxyClose');
	oClose.onclick = function(){getById('loginPanel').style.display = 'none';}
	//切换状态
	var loginState = getById('loginState');
	var stateList = getById('loginStatePanel');
	var lis = stateList.getElementsByTagName('li');
	var stateTxt =getById('login2qq_state_txt');
	var loginStateShow = getById('loginStateShow');

	loginState.onclick = function(e){
		stopBubble(e);
		stateList.style.display ='block';
	}
	//鼠标滑过、离开和点击状态列表事件
	for (var i = 0,l = lis.length ; i < l; i++) {
		lis[i].onmouseover = function(){this.style.background = '#567';}
		lis[i].onmouseout = function(){this.style.background = '#FFF';}
		lis[i].onclick = function(e){
			stopBubble(e);
			var id = this.id;
			stateList.style.display ='none';
			stateTxt.innerHTML = getByClass('stateSelect_text',id)[0].innerHTML;
			loginStateShow.className = 'login-state-show'+' '+id;
			
		}
	}

	document.onclick = function(e){stateList.style.display ='none';}


}

function fnDown(e){
	/*鼠标事件都是在浏览器窗口中的特定位置上发生的。这个位置信息保存在事件的clientX和clientY属性中。
	  它们的值表示事件发生时鼠标指针在窗口中的水平和垂直坐标。不包括页面滚动的距离*/
	getEvent(e);
	var oDrag = getById('loginPanel');
	//光标按下时，光标和面板之间左距离
	var disX =event.clientX - oDrag.offsetLeft;
	//光标按下时，光标和面板之间上距离
	var dixY = event.clientY - oDrag.offsetTop;
	//移动
	document.onmousemove = function(e){
		getEvent(e);
		fnMove(event,disX,dixY);
	}
	//释放鼠标
	document.onmouseup = function(event){
		document.onmousemove = null;
	}
}

function fnMove(e,posX,posY){
	var oDrag = getById('loginPanel');
	var l = e.clientX-posX;
	var r = e.clientY-posY;
	var winW = document.documentElement.clientWidth || document.body.clientWidth;
	var winH = document.documentElement.clientHeight || document.body.clientHeight;
	var maxW = winW - oDrag.offsetWidth-10;
	var maxH = winH - oDrag.offsetHeight;
	if(l<0){l=0;}
	if(r<10){r=10;}
	if(l>maxW){l = maxW;}
	if(r>maxH){r = maxH;}

	oDrag.style.left = l+'px';
	oDrag.style.top = r+'px';
}


