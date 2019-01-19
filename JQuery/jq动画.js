/*
隐藏元素/显示元素
$elem.hide()/$elem.show()
eg:
$("#a1").hide();
$("#a1").show();

.hide( options )/.show( options )
eg:
$("#a2").hide({
                duration: 3000,
                complete: function() {
                    alert('执行3000ms动画完毕')
                }
            })

 $("#a2").show({
                duration: 3000,
                complete: function() {
                    alert('执行3000ms动画完毕')
                }
            })

jQuery在做hide操作的时候，是会保存本身的元素的原始属性值，再之后通过对应的方法还原的时候还是初始值。
比如一个元素的display属性值为inline，那么隐藏再显示时，这个元素将再次显示inline。
一旦透明度 达到0，display样式属性将被设置为none，这个元素将不再在页面中影响布局

show与hide方法是修改的display属性，通过是visibility属性布局需要通过css方法单独设置
如果使用!important在你的样式中，比如display: none !important，如果你希望.show()方法正常工作，
必须使用.css('display', 'block !important')重写样式
如果让show与hide成为一个动画，那么默认执行动画会改变元素的高度，高度，透明度

toggle()隐藏切换
eg:
$("#a2").toggle();
如果元素是最初显示，它会被隐藏,如果隐藏的，它会显示出来。
------------------------------------------------------------------------------------------------------------------------
下拉动画slideDown / 上卷动画slideUp / 上卷下拉切换slideToggle
.slideDown()  / slideUp() / slideToggle()
.slideDown( [duration ] [, complete ] ) /  slideUp([duration ] [, complete ] ) / .slideToggle( [duration ] ,[ complete ] )

eg:
$("#a1").slideDown(3000); / $("elem").slideUp(3000); / $("#a1").slideToggle(3000);

 $("#a2").slideUp(3000,function(){
                alert('动画执行结束')
            });


下拉动画是从无到有，所以一开始元素是需要先隐藏起来的，可以设置display:none
如 果提供回调函数参数，callback会在动画完成的时候调用。将不同的动画串联在一起按顺序排列执行是非常有用的。
这个回调函数不设置任何参数，但是 this会设成将要执行动画的那个DOM元素，如果多个元素一起做动画效果，
那么要非常注意，回调函数会在每一个元素执行完动画后都执行一次，而不是这组 动画整体才执行一次

slideToggle:
display属性值保存在jQuery的数据缓存中，所以display可以方便以后可以恢复到其初始值
当一个隐藏动画后，高度值达到0的时候，display 样式属性被设置为none，以确保该元素不再影响页面布局
------------------------------------------------------------------------------------------------------------------------
淡出动画fadeOut / 淡入动画fadeIn / 淡入淡出切换fadeToggle / 淡入效果fadeTo
.fadeOut(); 
.fadeOut( [duration ], [ complete ] ) / .fadeIn( [duration ], [ complete ] ) / .fadeToggle( [duration ] / .fadeTo( duration, opacity ,callback) ,[ complete ] )
------------------------------------------------------------------------------------------------------------------------
动画animate
.animate( properties ,[ duration ], [ easing ], [ complete ] )
.animate( properties, options )
eg:
 $aaron.animate({
                 width  : "+=100px",
                 height : "+=100px"
            });

$aaron.animate({
                fontSize: "5em"
            }, 2000, function() {
                alert("动画 fontSize执行完毕!");
            });

 $aaron.animate({
                height: '50'
            }, {
                duration :2000,
                //每一步动画完成后调用的一个函数，
                //无论动画属性有多少，每个动画元素都执行单独的函数
                progress: function(now, fx) {
                   $aaron.text('进度:'+arguments[1])
                    // var data = fx.elem.id + ' ' + fx.prop + ': ' + now;
                    // alert(data)
                }
            })

 $aaron.animate({
                height: '50'
            }, {
                duration :2000,
                //每一个动画都会调用
                step: function(now, fx) {
                   $aaron.text('高度的改变值:'+now)
                }
            })

停止动画stop
.stop( [clearQueue ], [ jumpToEnd ] )
.stop( [queue ], [ clearQueue ] ,[ jumpToEnd ] )
------------------------------------------------------------------------------------------------------------------------
each方法
jQuery.each(array, callback )
jQuery.each( object, callback )

查找数组中的索引inArray
jQuery.inArray( value, array ,[ fromIndex ] )
eg:
$.inArray(5,[1,2,3,4,5,6,7]) //返回对应的索引：4

去空格神器trim方法
jQuery.trim()函数用于去除字符串两端的空白字符

DOM元素的获取get方法
.get( [index ] )
eg:
<a>1</a>
<a>2</a>
<a>3</a>

第二个a元素的查找: $(a).get(1)


DOM元素的获取index方法
.index()
.index( selector )
.index( element )

eg:
<ul>
    <a></a>
    <li id="test1">1</li>
    <li id="test2">2</li>
    <li id="test3">3</li>
</ul>

$("li").index(document.getElementById("test2")) //结果：1
$("li").index($("#test2"))//结果：1
 */