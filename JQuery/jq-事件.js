/*
鼠标事件

click与dbclick事件
方法一：$ele.click() 绑定$ele元素，不带任何参数一般是用来指定触发一个事件，用的比较少
eg:
$("#test").click(function(){
     $("ele").click()  //手动指定触发事件 
});

方法二：$ele.click( handler(eventObject) ) 绑定$ele元素，每次$ele元素触发点击操作会执行回调 handler函数，这样可以针对事件的反馈做很多操作了，方法中的this是指向了绑定事件的元素
eg:
$("#test").click(function() {
    //this指向 div元素
});

方法三：$ele.click( [eventData ], handler(eventObject) ) 使用与方法二一致，不过可以接受一个数据参数，这样的处理是为了解决不同作用域下数据传递的问题
eg:
$("#test").click(11111,function(e) {
    //this指向 div元素
    //e.data  => 11111 传递数据
});

---------------------------------------------------------------------------------------------------
mousedown与mouseup事件
方法一：$ele.mousedown() 绑定$ele元素，不带任何参数一般是用来指定触发一个事件，可能一般用的比较少
eg:
<div id="test">点击触发<div>
$("ele").mousedown(function(){
    alert('触发指定事件')
})
$("#test").mousedown(function(){
     $("ele").mousedown()  //手动指定触发事件 
});

方法二：$ele.mousedown( handler(eventObject) ) 绑定$ele元素，每次$ele元素触发点击操作会执行回调 handler函数
<div id="test">点击触发<div>
$("#test").mousedown(function() {
    //this指向 div元素
});

方法三：$ele.mousedown( [eventData ], handler(eventObject) ) 使用与方法二一致，不过可以接受一个数据参数，这样的处理是为了解决不同作用域下数据传递的问题
<div id="test">点击触发<div>
$("#test").mousedown(11111,function(e) {
    //this指向 div元素
    //e.data  => 11111 传递数据
});
---------------------------------------------------------------------------------------------------
mousemove事件
方法一：$ele.mousemove()  绑定$ele元素，不带任何参数一般是用来指定触发一个事件，用的比较少
eg:
<div id="test">点击触发<div>
$("ele").mousemove(function(){
    alert('触发指定事件')
})
$("#test").click(function(){
     $("ele").mousemove()  //指定触发事件 
});
方法二：$ele.mousemove( handler(eventObject) ) 绑定$ele元素，每次$ele元素触发点击操作会执行回调 handler函数
eg:
<div id="test">滑动触发<div>
$("#test").mousemove(function() {
    //this指向 div元素 
});
方法三：$ele.mousemove( [eventData ], handler(eventObject) ) 使用与方法二一致，不过可以接受一个数据参数，这样的处理是为了解决不同作用域下数据传递的问题
eg:
<div id="test">点击触发<div>
$("#test").mousemove(11111,function(e) {
    //this指向 div元素
    //e.data  => 11111 传递数据
});
---------------------------------------------------------------------------------------------------
mouseover与mouseout事件
方法一：$ele.mouseover() 绑定$ele元素，不带任何参数一般是用来指定触发一个事件，用的比较少
eg:
<div id="test">点击触发<div>
$("ele").mouseover(function(){
    alert('触发指定事件')
})
$("#test").click(function(){
     $("ele").mouseover()  //指定触发事件 
});
方法二：$ele.mouseover( handler(eventObject) )
eg:
<div id="test">滑动触发<div>
$("#test").mouseover(function() {
    //this指向 div元素 
});
方法三：$ele.mouseover( [eventData ], handler(eventObject) )
eg:
<div id="test">点击触发<div>
$("#test").mouseover(11111,function(e) {
    //this指向 div元素
    //e.data  => 11111 传递数据
});
---------------------------------------------------------------------------------------------------
mouseenter与mouseleave事件
三种参数传递方式与mouseover和mouseout是一模一样的

---------------------------------------------------------------------------------------------------
hover事件
$(selector).hover(handlerIn, handlerOut)
handlerIn(eventObject)：当鼠标指针进入元素时触发执行的事件函数
handlerOut(eventObject)：当鼠标指针离开元素时触发执行的事件函数
---------------------------------------------------------------------------------------------------
focusin事件 
方法一：$ele.focusin() 绑定$ele元素，不带任何参数一般是用来指定触发一个事件，一般用的比较少
eg:
<div id="test">点击触发<div>
$("ele").focusin(function(){
    alert('触发指定事件')
})
$("#test").mouseup(function(){
     $("ele").focusin()  //指定触发事件 
});

方法二：$ele.focusin( handler ) 绑定$ele元素，每次$ele元素触发点击操作会执行回调 handler函数
eg:
<div id="test">点击触发<div>
$("#test").focusin(function() {
    //this指向 div元素
});

方法三：$ele.focusin( [eventData ], handler ) 使用与方法二一致，不过可以接受一个数据参数，这样的处理是为了解决不同作用域下数据传递的问题
eg:
<div id="test">点击触发<div>
$("#test").focusin(11111,function(e) {
    //this指向 div元素
    //e.data  => 11111 传递数据
});

focusout事件
方法一：$ele.focusout() 绑定$ele元素，不带任何参数一般是用来指定触发一个事件，可能一般用的比较少
eg:
<div id="test">点击触发<div>
$("ele").focusout(function(){
    alert('触发指定事件')
})
$("#test").mouseup(function(){
     $("ele").focusout()  //指定触发事件 
});

方法二：$ele.focusout( handler ) 绑定$ele元素，每次$ele元素触发点击操作会执行回调 handler函数
eg:
<div id="test">点击触发<div>
$("#test").focusout(function() {
    //this指向 div元素
});

方法三：$ele.focusout( [eventData ], handler ) 使用与方法二一致，不过可以接受一个数据参数，这样的处理是为了解决不同作用域下数据传递的问题
eg:
<div id="test">点击触发<div>
$("#test").focusout(11111,function(e) {
    //this指向 div元素
    //e.data  => 11111 传递数据
});
*/

/*表单事件
blur与focus事件
表单处理事件focusin事件与focusout事件，同样用于处理表单焦点的事件还有blur与focus事件
它们之间的本质区别: 是否支持冒泡处理
---------------------------------------------------------------------------------------------------
change事件
input元素		监听value值的变化，当有改变时，失去焦点后触发change事件。对于单选按钮和复选框，当用户用鼠标做出选择时，该事件立即触发
select元素		对于下拉选择框，当用户用鼠标作出选择时，该事件立即触发
textarea元素		多行文本输入框，当有改变时，失去焦点后触发change事件
---------------------------------------------------------------------------------------------------
select事件
当 textarea 或文本类型的 input 元素中的文本被选择时，会发生 select 事件。
方法一：.select() 触发元素的select事件:
eg:
$("input").select();

方法二：$ele.select( handler(eventObject) )
eg:
<input id="test" value="文字选中"></input>
$("#test").select(function() { //响应文字选中回调
    //this指向 input元素 
});

方法三：$ele.select( [eventData ], handler(eventObject) ) 使用与方法二一致，不过可以接受一个数据参数，这样的处理是为了解决不同作用域下数据传递的问题
eg:
<input id="test" value="文字选中"></input>
$("#test").select(11111,function(e) {//响应文字选中回调
    //this指向 div元素 
   //e.data  => 11111 传递数据
});
---------------------------------------------------------------------------------------------------
submit事件
方法一：$ele.submit() 绑定$ele元素，不带任何参数一般是用来指定触发一个事件，用的比较少
eg:
<div id="test">点击触发<div>
$("ele").submit(function(){
    alert('触发指定事件')
})
$("#text").click(function(){
     $("ele").submit()  //指定触发事件 
});

方法二：$ele.submit( handler(eventObject) ) 绑定$ele元素，每次$ele元素触发点击操作会执行回调 handler函数
eg:
<form id="target" action="destination.html">
  <input type="submit" value="Go" />
</form>
$("#target").submit(function() { //绑定提交表单触发
    //this指向 from元素 
});

方法三：$ele.submit( [eventData ], handler(eventObject) ) 使用与方法二一致，不过可以接受一个数据参数，这样的处理是为了解决不同作用域下数据传递的问题
eg:
<form id="target" action="destination.html">
  <input type="submit" value="Go" />
</form>
$("#target").submit(11111,function(data) { //绑定提交表单触发
    //data => 1111 //传递的data数据
});

form元素是有默认提交表单的行为，如果通过submit处理的话，需要禁止浏览器的这个默认行为
传统的方式是调用事件对象  e.preventDefault() 来处理， jQuery中可以直接在函数中最后结尾return false即可
jQuery处理如下：
$("#target").submit(function(data) { 
   return false; //阻止默认行为，提交表单
});

*/

/*
键盘事件
keydown()与keyup()事件
keydown事件： 当用户在一个元素上第一次按下键盘上字母键的时候，就会触发它
//直接绑定事件
$elem.keydown( handler(eventObject) )
//传递参数
$elem.keydown( [eventData ], handler(eventObject) )
//手动触发已绑定的事件
$elem.keydown()

keyup事件：当用户在一个元素上第一次松手键盘上的键的时候，就会触发它。使用方法与keydown是一致的只是触发的条件是方法的

keydown是在键盘按下就会触发
keyup是在键盘松手就会触发
理论上它可以绑定到任何元素，但keydown/keyup事件只是发送到具有焦点的元素上，不同的浏览器中，可获得焦点的元素略有不同，但是表单元素总是能获取焦点，所以对于此事件类型表单元素是最合适的。
---------------------------------------------------------------------------------------------------
keypress()事件
当浏览器捕获键盘输入时，还提供了一个keypress的响应，这个跟keydown是非常相似

keypress事件与keydown和keyup的主要区别
只能捕获单个字符，不能捕获组合键
无法响应系统功能键（如delete，backspace）
不区分小键盘和主键盘的数字字符

KeyPress主要用来接收字母、数字等ANSI字符，而 KeyDown 和 KeyUP 事件过程可以处理任何不被 KeyPress 识别的击键。诸如：功能键（F1-F12）、编辑键、定位键以及任何这些键和键盘换档键的组合等。
*/


/*
on()的多事件绑定
基本用法：.on( events ,[ selector ] ,[ data ] )
eg:
$("#elem").click(function(){})  //快捷方式
$("#elem").on('click',function(){}) //on方式

多个事件绑定同一个函数
eg:
 $("#elem").on("mouseover mouseout",function(){ });

 多个事件绑定不同函数
 eg:
 $("#elem").on({
    mouseover:function(){},  
    mouseout:function(){}
});

将数据传递到处理程序
eg:
function greet( event ) {
  alert( "Hello " + event.data.name ); //Hello 慕课网
}
$( "button" ).on( "click", {
  name: "慕课网"
}, greet );


on()的高级用法

委托机制
.on( events ,[ selector ] ,[ data ], handler(eventObject) )
eg:
<div class="left">
    <p class="aaron">
        <a>目标节点</a> //点击在这个元素上
    </p>
</div>

$("div").on("click","p",fn)
事件绑定在最上层div元素上，当用户触发在a元素上，事件将往上冒泡，一直会冒泡在div元素上。如果提供了第二参数，那么事件在往上冒泡的过程中遇到了选择器匹配的元素，将会触发事件回调函数

卸载事件off()方法
---------------------------------------------------------------------------------------------------
eg:
绑定2个事件
$("elem").on("mousedown mouseup",fn)
删除一个事件
$("elem").off("mousedown")
删除所有事件
$("elem").off("mousedown mouseup")
快捷方式删除所有事件，这里不需要传递事件名了，节点上绑定的所有事件讲全部销毁
$("elem").off()
*/

/*
jQuery事件对象

作用
eg:

<ul>
    <li>点击：触发一</li>
    <li>点击：触发二</li>
    <li>点击：触发三</li>
    <li>点击：触发四</li>
</ul>

//多事件绑定一
$("ul").on('click',function(e){
           alert('触发的元素是内容是: ' + e.target.textContent)
 })

属性和方法
event.type：获取事件的类型
event.pageX 和 event.pageY：获取鼠标当前相对于页面的坐标
event.preventDefault() 方法：阻止默认行为
event.stopPropagation() 方法：阻止事件冒泡
event.which：获取在鼠标单击时，单击的是鼠标的哪个键
event.currentTarget : 在事件冒泡过程中的当前DOM元素

this和event.target的区别：js中事件是会冒泡的，所以this是可以变化的，但event.target不会变化，它永远是直接接受事件的目标DOM元素

.this和event.target都是dom对象
如果要使用jquey中的方法可以将他们转换为jquery对象。比如this和$(this)的使用、event.target和$(event.target)的使用；

jQuery自定义事件

trigger事件

根据绑定到匹配元素的给定的事件类型执行所有的处理程序和行为
eg:
$('#elem').on('click', function() {
    alert("触发系统事件")
 });
 $('#elem').trigger('click');

trigger除了能够触发浏览器事件，同时还支持自定义事件，并且自定义时间还支持传递参数
eg:
$('#elem').on('Aaron', function(event,arg1,arg2) {
    alert("自触自定义时间")
 });
$('#elem').trigger('Aaron',['参数1','参数2'])

trigger触发浏览器事件与自定义事件区别
自定义事件对象，是jQuery模拟原生实现的
自定义事件可以传递参数

triggerHandler事件
triggerHandler与trigger的用法是一样的。

不同之处：
triggerHandler不会触发浏览器的默认行为，.triggerHandler( "submit" )将不会调用表单上的.submit()
.trigger() 会影响所有与 jQuery 对象相匹配的元素，而 .triggerHandler() 仅影响第一个匹配到的元素
使用 .triggerHandler() 触发的事件，并不会在 DOM 树中向上冒泡。 如果它们不是由目标元素直接触发的，那么它就不会进行任何处理
与普通的方法返回 jQuery 对象(这样就能够使用链式用法)相反，.triggerHandler() 返回最后一个处理的事件的返回值。如果没有触发任何事件，会返回 undefined
*/