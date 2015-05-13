http://www.nowcoder.com/ 面试题测试
bootstrap 响应式布局
backbone
node.js
http://www.jikexueyuan.com/ 极客学院

http://segmentfault.com/a/1190000002627927 / http://www.cnblogs.com/coco1s/p/4029708.html 必须看 js篇

http://www.jb51.net/article/56847.htm 必须看 css篇

1、事件委托是什么?

让利用事件冒泡的原理,让自己的所触发的事件,让他的父元素代替执行!

2、闭包是什么,有什么特性,对页面有什么影响

闭包就是能够读取其他函数内部变量的函数。

3、如何阻止事件冒泡和默认事件

canceBubble   return false

4、解释jsonp的原理，以及为什么不是真正的ajax

   动态创建script标签,回调函数

   Ajax是页面无刷新请求数据操作

   跨域问题简单的理解就是因为JS同源策略的限制,a.com域名下的JS无法操作b.com或c.a.com下的对象

5、javascript的本地对象，内置对象和宿主对象

   本地对象为array obj regexp等可以new实例化

   内置对象为gload Math 等不可以实例化的

   宿主为浏览器自带的document,window 等

6、在怪异模式和传统模式下区别，这个平时都是用xhtml模式，

   在怪异模式下 IE的宽=width+padding+margin, xhtml模式=width

7、indexOf() 返回某个指定的字符串值在字符串中首次出现的位置

8、JavaScript有哪几种数据类型
基本: Number,Boolean,String,Null,undefined
复合: Object,Array,Function

9、documen.write和 innerHTML的区别
document.write只能重绘整个页面
innerHTML可以重绘页面的一部分

10、 前端开发的优化问题
（1） 减少http请求次数：css spirit,data uri
（2） JS，CSS源码压缩
（3） 前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，
     每次操作本地变量，不用请求，减少请求次数
（4） 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能
（5） 用setTimeout来避免页面失去响应
（6） 用hash-table来优化查找
（7） 当需要设置的样式很多时设置className而不是直接操作style
（8） 少用全局变量
（9） 缓存DOM节点查找的结果
（10） 避免使用CSS Expression
（11） 图片预载
（12） 避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢

11、 不换行必须设置(  AC  )
   A.word-break        B.letter-spacing        C.white-space       D.word-spacing

12、
font-style:italic;

font-family:"Lucida Grande",sans-serif;

font-size:1em;

font-weight:bold;

font-variant:small-caps;

line-height:140%;

font:italic bold small-caps 1em/140% "lucida Grande",sans-serif;

13、简述border:none以及border:0的区别，并给出使用建议。
答：border:none表示边框样式无,border:0表示边框宽度为0;当定义了border:none,即隐藏了边框的显示,实际就是边框宽度为0.
当定义边框时,必须定义边框的显示样式.因为边框默认样式为不显示none,所以仅设置边框宽度,由于样式不存在,
边框的宽度也自动被设置为0.

14、为一个图片设置成背景图像后，设置背景图像在纵向和横向上平铺，下面哪个是实现该功能的？ (单选)
   A、no-repeat B、repeat C、repeat-x D、repeat-y
   考点：css的背景background (repeat)

15、想要设置一个对象外的线条轮廓的样式为虚线边框，用_______________实现该功能。
   考点：css的轮廓outline (outline-style: dashed)

16、在css中，如果想要阻止计数器增加的，用__________________来实现。
   考点：css的内容content (counter-increment : none)

17、在编写css样式的时候，如果想要设置标记容器和主容器之间的补白，用_______________来表示。
   考点：css的列表 (marker-offset)

18、如果想设置一个对象内文本的流动和方向，用_______________标签来实现，该标签有两个值，
   分别是_____________、______________。
   考点：css的文本Text （text-layout-flow，horizontal、vertical-ideographic）


