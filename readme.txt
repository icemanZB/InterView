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

8、JavaScript有哪几种数据类型
简单:Number，Boolean，String，Null，Undefined
复合:Object，Array，Function

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



