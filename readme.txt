http://www.nowcoder.com/ 面试题测试
bootstrap 响应式布局
backbone
node.js

1、事件委托是什么?

让利用事件冒泡的原理,让自己的所触发的事件,让他的父元素代替执行!

2、闭包是什么，有什么特性，对页面有什么影响

闭包就是能够读取其他函数内部变量的函数。

3、如何阻止事件冒泡和默认事件

canceBubble   return false


4、解释jsonp的原理，以及为什么不是真正的ajax

   动态创建script标签，回调函数

   Ajax是页面无刷新请求数据操作

   跨域问题简单的理解就是因为JS同源策略的限制，a.com域名下的JS无法操作b.com或c.a.com下的对象

5、javascript的本地对象，内置对象和宿主对象

   本地对象为array obj regexp等可以new实例化

   内置对象为gload Math 等不可以实例化的

   宿主为浏览器自带的document,window 等

6、在怪异模式和传统模式下区别，这个平时都是用xhtml模式，

   在怪异模式下 IE的宽=width+padding+margin, xhtml模式=width

7、indexOf() 返回某个指定的字符串值在字符串中首次出现的位置

--------------------------------------------------------------
14、鼠标单击Button1后将Button1移动到Button2的后面<div> <input type=”button” id =”button1″ value=”1″ onclick=”???”> <input type=”button” id =”button2″ value=”2″ /”> </div>
<div>
   <input type="button" id ="button1" value="1" onclick="moveBtn(this);">
   <input type="button" id ="button2" value="2" />
</div>
<script type="text/javascript">
function moveBtn(obj) {//思路：先克隆一个，然后挂上，然后删除原来的那个
   var clone = obj.cloneNode(true);
   var parent = obj.parentNode;
   parent.appendChild(clone);
   parent.removeChild(obj);
}
</script>

15、JavaScript有哪几种数据类型
简单：Number，Boolean，String，Null，Undefined
复合：Object，Array，Function


16、JavaScript中如何对一个对象进行深度clone
function cloneObject(o) {
    if(!o || 'object' !== typeof o) {
        return o;
    }
    var c = 'function' === typeof o.pop ? [] : {};
    var p, v;
    for(p in o) {
        if(o.hasOwnProperty(p)) {
            v = o[p];
            if(v && 'object' === typeof v) {
                c[p] = Ext.ux.clone(v);
            }
            else {
                c[p] = v;
            }
        }
    }
    return c;
};

17、请实现，鼠标点击页面中的任意标签，alert该标签的名称．（注意兼容性）

<style>
div{ background:#0000FF;width:100px;height:100px;}
span{ background:#00FF00;width:100px;height:100px;}
p{ background:#FF0000;width:100px;height:100px;}
</style>
<script type="text/javascript">
document.onclick = function(evt){
 var e = window.event || evt;
 var tag = e["target"] || e["srcElement"];
 alert(tag.tagName);
};
</script>
<div id="div"><span>SPAN</span>DIV</div>
<span>SPAN</span>
<p>P</p>

18、请编写一个JavaScript函数 parseQueryString，它的用途是把URL参数解析为一个对象

19、ajax 底层？

20、documen.write和 innerHTML的区别
document.write只能重绘整个页面
innerHTML可以重绘页面的一部分

21、 前端开发的优化问题
（1） 减少http请求次数：css spirit,data uri
（2） JS，CSS源码压缩
（3） 前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数
（4） 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能
（5） 用setTimeout来避免页面失去响应
（6） 用hash-table来优化查找
（7） 当需要设置的样式很多时设置className而不是直接操作style
（8） 少用全局变量
（9） 缓存DOM节点查找的结果
（10） 避免使用CSS Expression
（11） 图片预载
（12） 避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢


22、 javascript基本数据类型的有？



