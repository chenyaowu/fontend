//创建元素节点：
$("<div></div>");
//创建为本节点：
$("<div>我是文本节点</div>");
//创建为属性节点：
$("<div id='test' class='aaron'>我是文本节点</div>");

/*DOM内部插入append()与appendTo()
向每个匹配的元素内部追加内容
append(content)
把所有匹配的元素追加到另一个、指定的元素元素集合中
appendTo(content)

append()前面是被插入的对象，后面是要在对象内插入的元素内容
appendTo()前面是要插入的元素内容，而后面是被插入的对象
*/
