http://www.nowcoder.com/ 面试题测试
bootstrap 响应式布局
backbone
node.js
http://www.jikexueyuan.com/ 极客学院

http://segmentfault.com/a/1190000002627927 / http://www.cnblogs.com/coco1s/p/4029708.html 必须看 js篇

http://www.jb51.net/article/56847.htm 必须看 css篇

1、事件委托是什么?

让利用事件冒泡的原理,让自己的所触发的事件,让他的父元素代替执行

2、闭包是什么,有什么特性,对页面有什么影响

闭包允许一个函数定义在另一个外部函数的作用域内，即便作用域内的其他东西都消失了，它仍可以访问该外部函数内的变量。

3、如何阻止事件冒泡和默认事件

cancelBubble   return false

4、解释 jsonP 的原理，以及为什么不是真正的ajax

   动态创建script标签,回调函数

   Ajax是页面无刷新请求数据操作

   跨域问题简单的理解就是因为JS同源策略的限制,a.com域名下的JS无法操作b.com或c.a.com下的对象

5、javascript的本地对象，内置对象和宿主对象

   本地对象为array obj regexp等可以new实例化

   内置对象为 Global Math 等不可以实例化的

   宿主为浏览器自带的 document,window 等

6、在怪异模式和传统模式下区别，这个平时都是用xhtml模式

   在怪异模式下 IE的宽=width+padding+margin, xhtml模式=width

7、indexOf() 返回某个指定的字符串值在字符串中首次出现的位置

8、JavaScript有哪几种数据类型
基本: Number,Boolean,String,Null,undefined
引用: Object,Array,Function

9、document.write和 innerHTML的区别
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

font-variant:small-caps; 属性设置小型大写字母的字体显示文本,这意味着所有的小写字母均会被转换为大写,
                         但是所有使用小型大写字体的字母与其余文本相比,其字体尺寸更小。

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
   考点：css的轮廓outline (outline-style: dashed) 注释：如果规定了 !DOCTYPE，则 IE8 支持 outline 属性。

16、在css中，如果想要阻止计数器增加的，用__________________来实现。
   考点：css的内容content (counter-increment : none)

17、在编写css样式的时候，如果想要设置标记容器和主容器之间的补白，用_______________来表示。
   考点：css的列表 (marker-offset)

18、如果想设置一个对象内文本的流动和方向，用_______________标签来实现，该标签有两个值，
   分别是_____________、______________。
   考点：css的文本Text （text-layout-flow，horizontal、vertical-ideographic）

19、编码和解码URL？

回答:我们可以使用以下方法实现URL的编码和解码。
encodeURIComponent(url) and decodeURIComponent(url)

20、问题:如何禁用浏览器的前进后退按钮？

<script type="text/javascript">
$(document).ready(function() {
    window.history.forward(1);
    // OR
    window.history.forward(-1);
});
</script>


21、jQuery对象访问  http://www.cnblogs.com/HunXw/archive/2011/10/10/2205295.html

(1)each(callback)以每一个匹配的元素作为上下文来执行一个函数

(2)length/size()jQuery对象中元素的个数

(3)selector返回选择此元素的选择器(用于插件开发)

(4)context返回选择此元素的时此元素所在的DOM节点内容(用于插件开发)

(5)eq(position)取得元素中某个位置的元素

(6)get()取得所有匹配DOM元素集合

(7)get(index)在所有匹配的DOM元素集合中取得其中一个匹配的元素

(8)index(subject)搜索与参数表示的对象匹配的元素,并返回相应元素的索引值


22、在编写页面的时候,如果想要获取指定元素在当前窗口的相对偏移,用_________来实现,该方法的返回值有两个属性
    分别是________和__________。

   考点: jquery的css处理 (offset,top,left)

23、 Jquery获取当前屏幕的宽度、高度
<script type="text/javascript">
$(document).ready(function(){
    alert($(window).height()); //浏览器当前窗口可视区域高度
    alert($(document).height()); //浏览器当前窗口文档的高度
    alert($(document.body).height());//浏览器当前窗口文档body的高度
    alert($(document.body).outerHeight(true));//浏览器当前窗口文档body的总高度 包括border padding margin
    alert($(window).width()); //浏览器当前窗口可视区域宽度
    alert($(document).width());//浏览器当前窗口文档对象宽度
    alert($(document.body).width());//浏览器当前窗口文档body的高度
    alert($(document.body).outerWidth(true));//浏览器当前窗口文档body的总宽度 包括border padding margin
});
</script>

其中$(window).height()=$(document).height()=
$(document.body).outerHeight()=$(document.body).height()+padding+margin+border


24、在jquery中指定一个类,如果存在就执行删除功能,如果不存在就执行添加功能 C、toggleClass(class)

25、CDN（内容分发网络）是什么？
   在开发Web页面，考虑最多的问题之一是页面在客户端电脑的响应：时间越短，用户体验越好。
   而制约用户体验的关键因素之一是浏览器下载Web文件大小，包括*.html、图片、*.js、*.css等文件。
   为了最大化复用和节约带宽，故CDN应运而生：其基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，
   使内容传输的更快、更稳定。其目的是使用户可就近取得所需内容，解决 Internet网络拥挤的状况，提高用户访问网站的响应速度。

推荐使用官方的CDN节点，使用代码如下：

<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

还有Google提供的jQuery CDN：

<script type="text/javascript"
    src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js">
</script>
同时微软也提供了jQuery CDN的节点：

<script type="text/javascript"
    src="http://ajax.microsoft.com/ajax/jquery/jquery-1.9.1.min.js">
</script>

26、JavaScript在IE浏览器和Firefox浏览器中的差异总结

    (1) HTML对象的 id 作为对象名的问题

        IE: HTML 对象的 ID 可以作为 document 的下属对象变量名直接使用
        Firefox: 不支持
    解决方法: 使用document.getElementById 替代 document.all

    (2) 如果控件只有name,没有id, 用 getElementById 时:

        IE: 可以找到对象
        Firefox: 返回NULL
    解决方法: 所有控件必须设置ID属性

    (3) Eval:

        IE: 支持,利用 eval(idName) 可以取得 id 为 idName 的 HTML 对象
        Firefox: 不支持
    解决方法: 统一使用 getElementById(idName) 代替 eval(idName)

    (4) Event:

        IE: 用全局对象window.event
        Firefox: event只能在事件发生的现场使用,在调用函数时传入event对象 function(ev){}
    解决方法: 使用之前做一下浏览器类型判断,各用各的。

    (5) 对象名称中美元符号'$' 改为使用下划线'_'

    (6) 集合类对象问题

        IE: 可以使用()或[]获取集合类对象
        Firefox: 只能使用[]获取集合类对象

    解决方法: 统一使用[]获取集合类对象。
        例: document.form.item("itemName") 这样的语句改为 document.form.elements["elementName"]

    (7) 变量名与某 HTML 对象 id 相同的问题

        IE: 不能使用与 HTML 对象 id 相同的变量名
        Firefox: 可以使用
    解决方法: 在声明变量时,一律加上 var 以避免歧义,这样在 IE 中亦可正常运行。
            此外,最好不要取与 HTML 对象 id 相同的变量名,以减少错误。

    (8) Event定位问题

        IE: 支持 event.x 和 event.y
        Firefox: 支持 event.pageX 和 event.pageY
    解决方法: 统一使用 event.clientX 和 event.clientY
            但是在Firefox中 event.clientX 与 event.pageX 有微妙的差别(当整个页面有滚动条的时候)
            不过大多数时候是等效的。如果要完全一样,可以判断浏览器类型后对应使用。

    (9) 父结点的问题

        IE: parentElement parentElement.children
        Firefox: parentNode parentNode.childNodes
        childNodes的下标的含义在IE和Firefox中不同,Firefox使用DOM规范,childNodes中会插入空白文本节点。
        一般可以通过node.getElementsByTagName()来回避这个问题。
        当html中节点缺失时,IE和Firefox对parentNode的解释不同。例如:

    <form>
        <table>
            <input/>
        </table>
    </form>
    IE: input.parentNode的值为空节点
    Firefox: input.parentNode的值为form
    解决方法: Firefox中节点没有removeNode方法,必须使用如下方法 node.parentNode.removeChild(node)

    (10) const 问题

        IE: 不支持 const 关键字。如 const constVar = 32; 在IE中这是语法错误
        Firefox: 支持
    解决方法: 不使用 const 以 var 代替

    (11) body 对象

        IE: 在body标签完全被读入之后才存在
        Firefox: 在body标签没有被浏览器完全读入之前就存在

    (12) 自定义属性问题

        IE: 可以使用获取常规属性的方法来获取自定义属性,也可以使用getAttribute()获取自定义属性
        Firefox: 只能使用getAttribute()获取自定义属性
    解决方法: 统一通过getAttribute()获取自定义属性

    (13) event.srcElement问题

        IE: even.srcElement
        Firefox: even.target
    解决方法: 使用时判断浏览器类型,各用各的

    (14) 模态和非模态窗口

        IE: 支持模态和非模态窗口
        Firefox: 不支持
    解决方法: 直接使用window.open(pageURL,name,parameters)方式打开新窗口。
            如果需要将子窗口中的参数传递回父窗口,可以在子窗口中使用window.opener来访问父窗口。

    (15) innerText

        IE: innerText
        Firefox: textContent

    (16) 类似 obj.style.height = imgObj.height 的语句

        IE: 有效
        Firefox: 无效
        解决方法: 统一使用obj.style.height = imgObj.height + 'px';

27、doctype(文档类型)的作用是什么?你知道多少种文档类型?

    <!DOCTYPE>声明位于文档中的最前面的位置,处于<html>标签之前,此标签可告知浏览器文档使用哪种HTML或XHTML规范。

    该标签可声明三种 DTD 类型，分别表示严格版本、过渡版本以及基于框架的 HTML 文档。
    HTML 4.01 规定了三种文档类型：Strict、Transitional 以及 Frameset。
    XHTML 1.0 规定了三种 XML 文档类型：Strict、Transitional 以及 Frameset。
    Standards (标准)模式(也就是严格呈现模式)用于呈现遵循最新标准的网页,而
    Quirks(包容)模式(也就是松散呈现模式或者兼容模式)用于呈现为传统浏览器而设计的网页。

28、css hacks

    CSS hack技巧_， *， +， \9， !important 之类

    _width 针对于ie6

    *width,+width针对于ie6,7

    color: red\9; /* IE8以及以下版本浏览器 */

    !important 在IE中会被忽视，ie6,7,8不识别，ie9+（包括ie9）是识别的

29、http状态码

    Web服务器用来告诉客户端,发生了什么事,也就是一种快速解决问题的方式。
    200：OK，服务器成功处理了请求。
    301/302: Moved Permanently(重定向),请求的URL已移走,一个是永久转移,一个是临时转移。
             Response中应该包含一个Location URL, 说明资源现在所处的位置。
    304：Not Modified(未修改),客户的缓存资源是最新的,要客户端使用缓存。
    404：HTTP/1.1 404 Not Found,服务器无法找到所请求的URL。
    501：Internal Server Error,服务器遇到一个错误,使其无法对请求提供服务。
    503：Service Unavailable(未提供此服务),服务器目前无法为请求服务服务,但过一段时间就可以恢复服务。
    1XX信息性状态码。
    2XX成功状态码。
    3XX重定向状态码。
    4XX客户端错误状态码。
    5XX服务器错误状态码。

30、浏览器对CSS的匹配原理

    浏览器CSS匹配不是从左到右进行查找,而是从右到左进行查找。比如之前说的div#divBox p span.red{color:red;}
    浏览器的查找顺序如下:先查找 html 中所有 class="red" 的 span 元素,找到后再查找其父辈元素中是否有p元素
    再判断 p 的父元素中是否有 id 为 divBox 的 div 元素,如果都存在则CSS匹配上。
    浏览器从右到左进行查找的好处是为了尽早过滤掉一些无关的样式规则和元素。
    firefox称这种查找方式为 keyselector (关键字查询),所谓的关键字就是样式规则中最后(最右边)的规则,上面的key就是span.red。

31、HTML与XHTML——二者有什么区别

   1. 所有的标记都必须要有一个相应的结束标记
   2. 所有标签的元素和属性的名字都必须使用小写
   3. 所有的XML标记都必须合理嵌套
   4. 所有的属性必须用引号 "" 括起来
   5. 把所有 < 和 & 特殊符号用编码表示
   6. 给所有属性赋一个值
   7. 不要在注释内容中使 "–"
   8. 图片必须有说明文字

32、CSS中 link 和 @import 的区别

  (1) link 属于 HTML 标签,而@import是CSS提供的
  (2) 页面被加载的时,link 会同时被加载,而 @import 引用的 CSS 会等到页面被加载完再加载
  (3) import 只在 IE5 以上才能识别,而 link 是 HTML 标签,无兼容问题
  (4) link 方式的样式的权重高于 @import 的权重

33、position的absolute与fixed共同点与不同点
    共同点：
        1. 改变行内元素的呈现方式,display 被置为block
        2. 让元素脱离普通流,不占据空间
        3. 默认会覆盖到非定位元素上
    不同点:
    absolute 的"根元素"是可以设置的,而 fixed 的"根元素"固定为浏览器窗口
    当你滚动网页,fixed元素与浏览器窗口之间的距离是不变的

34、IE盒子模型和标准W3C盒子模型的区别

    可以看到 IE 盒子模型的范围也包括 margin、border、padding、content 和 标准 W3C 盒子模型不同的是:

    IE 盒子模型的 content 部分包含了 border 和 padding
    W3C盒子模型的 content 部分不包含其他部分

35、瀑布流布局 或者 流式布局 是否有了解

    瀑布流布局: 采用绝对定位来给每张图片或者模块定位
    流式布局: 采用浮动式给模块定位,可以做出响应式布局

36、子元素选择器 和后代选择器元素有什么区别

css选择器中的 '>' 如果不希望选择任意的后代元素,而是只选择某个元素的子元素,使用子元素选择器(Child selector)
E > F 子元素选择器,匹配所有E元素的子元素F
<style type="text/css">
	h1 > strong {color:red;}  /* 就只有第一个h1下面的strong文字变红 */
	h1 strong { color:blue;}  /* h1 下的所有strong都会变红 */
</style>
<h1>
	This is <strong>very</strong> <strong>very</strong> important.
</h1>
<h1>This is
	<em>really
		<strong>very</strong>
	</em> important.
</h1>

37、 offsetTop 和 style.top 的区别

    offsetHeight:为计算后盒子的整体高度,是动态获取值 style.top:为绝对定位后的 top 值
    offsetTop: 盒子顶部相对定位父级顶部的高度 如果父级没有定位,那就相对于整个页面
    offsetTop 只能获取到有定位的父级

    1、offsetTop 返回的是数字,而 style.top 返回的是字符串,除了数字外还带有单位: px
    2、offsetTop 只读 而 style.top 可读写
    3、如果没有给 HTML 元素指定过 top 样式,则 style.top 返回的是空字符串。

38、jQuery中的.height()、.innerHeight()和.outerHeight()

    .height() 是没有计算过的  不包括padding,不包括边框
    获取计算后的整个高度  aLi.outerHeight() = offsetHeight
    .innerHeight()  包括 padding 但不包括 border  document.getElementById("div1").clientHeight
    .outerHeight()  包括 padding 和 border  还可以接受一个参数,该参数代表是否计算外边距,如果为 true 则表示计算外边距


39、数据类型转换

   []+1+3  //结果为13
   [1]+3   //结果为13
   null+1+3  //结果为4

   转换成数字
   +x //使用一个一元的加号运算符，这是最快的方法
   x-0 或 x*1 //另一种形式
   Number(x)  //使用不带new的数字构造函数进行转换

   对象和函数总是被转换成NaN, undefined 也会被转换成 NaN, 但 null会被转换成0
   alert(+[]);  //结果为0
   alert(+[1]); //结果为1
   alert(+[1,2]); //结果为NaN
   alert(+new Array(1)); //结果为0
   alert(+new Array(1,2)); //结果为NaN

40、javascript怎样选中一个checkbox，怎样设置它无效？
    document.all.cb1[0].disabled = true;
    document.getElementById("check1").disabled=true;

41、form中的input可以设置为readonly和disable，请问2者有什么区别？
    readonly不可编辑,但可以选择和复制;值可以传递到后台
    disabled不能编辑,不能复制,不能选择;值不可以传递到后台

42、for(i=0, j=0; i<10, j<6; i++, j++){
     k = i + j;
   }

   i与j都是从0 到5 执行了6次

   第1次：k=i+j=0+0
   第2次：k=i+j=1+1
   第3次：k=i+j=2+2
   第4次：k=i+j=3+3
   第5次：k=i+j=4+4
   第6次：k=i+j=5+5

   第6次执行完之后，i++, j++，此时i=6,j=6,因为j=6不再小于6，所以for循环结束

   此时k=i+j=5+5保持不变，即k=10

   结果：10

43、XMLHttpRequest对象是什么？
   XmlHttp提供客户端同 http服务器通讯的协议。客户端可以通过XmlHttp对象
   向http服务器发送请求并使用微软XML文档对象模型处理回应

44、下面有关javascript内部对象的描述，正确的有？  ( A、B、C、D )
    A、History 对象包含用户（在浏览器窗口中）访问过的 URL
    B、Location 对象包含有关当前 URL 的信息
    C、Window 对象表示浏览器中打开的窗口
    D、Navigator 对象包含有关浏览器的信息

45、下面关于IE、FF下面脚本的区别描述错误的是？   ( B、D )
    A、innerText IE支持，FIREFOX不支持
    B、document.createElement FIREFOX支持，IE不支持
    C、setAttribute('class'，'styleClass') FIREFOX支持，IE不支持
    D、用setAttribute设置事件 FIREFOX不支持，IE支持

    解析 ： IE并不是不支持 setAttribute 这个函数,而是不支持用setAttribute设置某些属性
           例如对象属性、集合属性、事件属性，也就是说用 setAttribute 设置 style 和 onclick 这些属性在IE中是行不通的。
           为达到兼容各种浏览器的效果，可以用点符号法来设置Element的对象属性、集合属性和事件属性

46、什么是变量提升(Variable Hoisting) ?
    变量提升指的是,无论是哪里的变量在一个范围内声明的,那么JavaScript引擎会将这个声明移到范围的顶部。
    如果在函数中间声明一个变量,例如在某一行中赋值一个变量
    function foo()
    {
        // 此处省略若干代码
        var a = "abc";
    }

    实际上会这样运行代码：

    function foo()
    {
        var a;
        // 此处省略若干代码
        a = "abc";
    }

47、new关键字做了什么？
    创建一个新的对象,这个对象的类型是object
    设置这个新的对象的内部、可访问性和[[prototype]]属性为构造函数(指prototype.construtor所指向的构造函数)中设置的
    执行构造函数,当this关键字被提及的时候,使用新创建的对象的属性;
    返回新创建的对象(除非构造方法中返回的是"无原型")
    当用new的时候,函数内部的this是一个新的对象,如果不用new,也就是把它当成一个普通的函数执行,它的 this 是 window

48、jQuery/Zepto 区别
    1、Zepto 的 animate 方法参数说明
      $("data-userid='123123123'").animate({ opacity : 0},{duration:'slow'});
      duration : 'slow' 是无效的，需要修改为 duration : 600
    2、Zepto 的each 方法只能遍历 数组，不能遍历JSON对象
    3、Zepto 是根据标准浏览器写的，所以对于节点尺寸的方法只提供 width() 和 height()
    4、Zepto 的选择器表达式: [name=value]  中 value 必须用 双引号 "  or 单引号 ' 括起来
       例如执行：$('[data-userid=123123123]') 结果：Error: SyntaxError: DOM Exception 12
       解决办法： $('[data-userid="123123123]"') or $("[data-userid='123123123']")
    5、 Zepto 对象 不能自定义事件
        例如执行： $({}).bind('cust', function(){}); 结果：  TypeError: Object has no method 'addEventListener'
        解决办法是创建一个脱离文档流的节点作为事件对象：
        例如： $('').bind('cust', function(){});