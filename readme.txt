http://www.nowcoder.com/ ���������
bootstrap ��Ӧʽ����
backbone
node.js
http://www.jikexueyuan.com/ ����ѧԺ

http://segmentfault.com/a/1190000002627927 / http://www.cnblogs.com/coco1s/p/4029708.html ���뿴 jsƪ

http://www.jb51.net/article/56847.htm ���뿴 cssƪ

1���¼�ί����ʲô?

�������¼�ð�ݵ�ԭ��,���Լ������������¼�,�����ĸ�Ԫ�ش���ִ��!

2���հ���ʲô,��ʲô����,��ҳ����ʲôӰ��

�հ������ܹ���ȡ���������ڲ������ĺ�����

3�������ֹ�¼�ð�ݺ�Ĭ���¼�

canceBubble   return false

4������jsonp��ԭ���Լ�Ϊʲô����������ajax

   ��̬����script��ǩ,�ص�����

   Ajax��ҳ����ˢ���������ݲ���

   ��������򵥵���������ΪJSͬԴ���Ե�����,a.com�����µ�JS�޷�����b.com��c.a.com�µĶ���

5��javascript�ı��ض������ö������������

   ���ض���Ϊarray obj regexp�ȿ���newʵ����

   ���ö���Ϊgload Math �Ȳ�����ʵ������

   ����Ϊ������Դ���document,window ��

6���ڹ���ģʽ�ʹ�ͳģʽ���������ƽʱ������xhtmlģʽ��

   �ڹ���ģʽ�� IE�Ŀ�=width+padding+margin, xhtmlģʽ=width

7��indexOf() ����ĳ��ָ�����ַ���ֵ���ַ������״γ��ֵ�λ��

8��JavaScript���ļ�����������
����: Number,Boolean,String,Null,undefined
����: Object,Array,Function

9��documen.write�� innerHTML������
document.writeֻ���ػ�����ҳ��
innerHTML�����ػ�ҳ���һ����

10�� ǰ�˿������Ż�����
��1�� ����http���������css spirit,data uri
��2�� JS��CSSԴ��ѹ��
��3�� ǰ��ģ�� JS+���ݣ���������HTML��ǩ���µĴ����˷ѣ�ǰ���ñ�������AJAX��������
     ÿ�β������ر������������󣬼����������
��4�� ��innerHTML����DOM����������DOM�����������Ż�javascript����
��5�� ��setTimeout������ҳ��ʧȥ��Ӧ
��6�� ��hash-table���Ż�����
��7�� ����Ҫ���õ���ʽ�ܶ�ʱ����className������ֱ�Ӳ���style
��8�� ����ȫ�ֱ���
��9�� ����DOM�ڵ���ҵĽ��
��10�� ����ʹ��CSS Expression
��11�� ͼƬԤ��
��12�� ������ҳ������岼����ʹ��table��tableҪ�����е�������ȫ����֮��Ż���ʾ��������ʾ��div+css������

11�� �����б�������(  AC  )
   A.word-break        B.letter-spacing        C.white-space       D.word-spacing

12��
font-style:italic;

font-family:"Lucida Grande",sans-serif;

font-size:1em;

font-weight:bold;

font-variant:small-caps;

font-variant:small-caps; ��������С�ʹ�д��ĸ��������ʾ�ı�,����ζ�����е�Сд��ĸ���ᱻת��Ϊ��д,
                         ��������ʹ��С�ʹ�д�������ĸ�������ı����,������ߴ��С��

line-height:140%;

font:italic bold small-caps 1em/140% "lucida Grande",sans-serif;

13������border:none�Լ�border:0�����𣬲�����ʹ�ý��顣
��border:none��ʾ�߿���ʽ��,border:0��ʾ�߿���Ϊ0;��������border:none,�������˱߿����ʾ,ʵ�ʾ��Ǳ߿���Ϊ0.
������߿�ʱ,���붨��߿����ʾ��ʽ.��Ϊ�߿�Ĭ����ʽΪ����ʾnone,���Խ����ñ߿���,������ʽ������,
�߿�Ŀ��Ҳ�Զ�������Ϊ0.

14��Ϊһ��ͼƬ���óɱ���ͼ������ñ���ͼ��������ͺ�����ƽ�̣������ĸ���ʵ�ָù��ܵģ� (��ѡ)
   A��no-repeat B��repeat C��repeat-x D��repeat-y
   ���㣺css�ı���background (repeat)

15����Ҫ����һ���������������������ʽΪ���߱߿���_______________ʵ�ָù��ܡ�
   ���㣺css������outline (outline-style: dashed) ע�ͣ�����涨�� !DOCTYPE���� IE8 ֧�� outline ���ԡ�

16����css�У������Ҫ��ֹ���������ӵģ���__________________��ʵ�֡�
   ���㣺css������content (counter-increment : none)

17���ڱ�дcss��ʽ��ʱ�������Ҫ���ñ��������������֮��Ĳ��ף���_______________����ʾ��
   ���㣺css���б� (marker-offset)

18�����������һ���������ı��������ͷ�����_______________��ǩ��ʵ�֣��ñ�ǩ������ֵ��
   �ֱ���_____________��______________��
   ���㣺css���ı�Text ��text-layout-flow��horizontal��vertical-ideographic��

19������ͽ���URL��

�ش�:���ǿ���ʹ�����·���ʵ��URL�ı���ͽ��롣
encodeURIComponent(url) and decodeURIComponent(url)

20������:��ν����������ǰ�����˰�ť��

<script type="text/javascript">
$(document).ready(function() {
    window.history.forward(1);
    // OR
    window.history.forward(-1);
});
</script>


21��jQuery�������  http://www.cnblogs.com/HunXw/archive/2011/10/10/2205295.html

(1)each(callback)��ÿһ��ƥ���Ԫ����Ϊ��������ִ��һ������

(2)length/size()jQuery������Ԫ�صĸ���

(3)selector����ѡ���Ԫ�ص�ѡ����(���ڲ������)

(4)context����ѡ���Ԫ�ص�ʱ��Ԫ�����ڵ�DOM�ڵ�����(���ڲ������)

(5)eq(position)ȡ��Ԫ����ĳ��λ�õ�Ԫ��

(6)get()ȡ������ƥ��DOMԪ�ؼ���

(7)get(index)������ƥ���DOMԪ�ؼ�����ȡ������һ��ƥ���Ԫ��

(8)index(subject)�����������ʾ�Ķ���ƥ���Ԫ��,��������ӦԪ�ص�����ֵ


22���ڱ�дҳ���ʱ��,�����Ҫ��ȡָ��Ԫ���ڵ�ǰ���ڵ����ƫ��,��_________��ʵ��,�÷����ķ���ֵ����������
    �ֱ���________��__________��

   ����: jquery��css���� (offset,top,left)

23�� Jquery��ȡ��ǰ��Ļ�Ŀ�ȡ��߶�
<script type="text/javascript">
$(document).ready(function(){
    alert($(window).height()); //�������ǰ���ڿ�������߶�
    alert($(document).height()); //�������ǰ�����ĵ��ĸ߶�
    alert($(document.body).height());//�������ǰ�����ĵ�body�ĸ߶�
    alert($(document.body).outerHeight(true));//�������ǰ�����ĵ�body���ܸ߶� ����border padding margin
    alert($(window).width()); //�������ǰ���ڿ���������
    alert($(document).width());//�������ǰ�����ĵ�������
    alert($(document.body).width());//�������ǰ�����ĵ�body�ĸ߶�
    alert($(document.body).outerWidth(true));//�������ǰ�����ĵ�body���ܿ�� ����border padding margin
});
</script>

����$(window).height()=$(document).height()=
$(document.body).outerHeight()=$(document.body).height()+padding+margin+border


24����jquery��ָ��һ����,������ھ�ִ��ɾ������,��������ھ�ִ����ӹ��� C��toggleClass(class)

25��CDN�����ݷַ����磩��ʲô��
   �ڿ���Webҳ�棬������������֮һ��ҳ���ڿͻ��˵��Ե���Ӧ��ʱ��Խ�̣��û�����Խ�á�
   ����Լ�û�����Ĺؼ�����֮һ�����������Web�ļ���С������*.html��ͼƬ��*.js��*.css���ļ���
   Ϊ����󻯸��úͽ�Լ������CDNӦ�˶����������˼·�Ǿ����ܱܿ����������п���Ӱ�����ݴ����ٶȺ��ȶ��Ե�ƿ���ͻ��ڣ�
   ʹ���ݴ���ĸ��졢���ȶ�����Ŀ����ʹ�û��ɾͽ�ȡ���������ݣ���� Internet����ӵ����״��������û�������վ����Ӧ�ٶȡ�

�Ƽ�ʹ�ùٷ���CDN�ڵ㣬ʹ�ô������£�

<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

����Google�ṩ��jQuery CDN��

<script type="text/javascript"
    src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js">
</script>
ͬʱ΢��Ҳ�ṩ��jQuery CDN�Ľڵ㣺

<script type="text/javascript"
    src="http://ajax.microsoft.com/ajax/jquery/jquery-1.9.1.min.js">
</script>

26��JavaScript��IE�������Firefox������еĲ����ܽ�

    (1) HTML����� id ��Ϊ������������

        IE: HTML ����� ID ������Ϊ document ���������������ֱ��ʹ��
        Firefox: ��֧��
    �������: ʹ��document.getElementById ��� document.all

    (2) ����ؼ�ֻ��name,û��id, �� getElementById ʱ:

        IE: �����ҵ�����
        Firefox: ����NULL
    �������: ���пؼ���������ID����

    (3) Eval:

        IE: ֧��,���� eval(idName) ����ȡ�� id Ϊ idName �� HTML ����
        Firefox: ��֧��
    �������: ͳһʹ�� getElementById(idName) ���� eval(idName)

    (4) Event:

        IE: ��ȫ�ֶ���window.event
        Firefox: eventֻ�����¼��������ֳ�ʹ��,�ڵ��ú���ʱ����event���� function(ev){}
    �������: ʹ��֮ǰ��һ������������ж�,���ø��ġ�

    (5) ������������Ԫ����'$' ��Ϊʹ���»���'_'

    (6) �������������

        IE: ����ʹ��()��[]��ȡ���������
        Firefox: ֻ��ʹ��[]��ȡ���������

    �������: ͳһʹ��[]��ȡ���������
        ��: document.form.item("itemName") ����������Ϊ document.form.elements["elementName"]

    (7) ��������ĳ HTML ���� id ��ͬ������

        IE: ����ʹ���� HTML ���� id ��ͬ�ı�����
        Firefox: ����ʹ��
    �������: ����������ʱ,һ�ɼ��� var �Ա�������,������ IE ������������С�
            ����,��ò�Ҫȡ�� HTML ���� id ��ͬ�ı�����,�Լ��ٴ���

    (8) Event��λ����

        IE: ֧�� event.x �� event.y
        Firefox: ֧�� event.pageX �� event.pageY
    �������: ͳһʹ�� event.clientX �� event.clientY
            ������Firefox�� event.clientX �� event.pageX ��΢��Ĳ��(������ҳ���й�������ʱ��)
            ���������ʱ���ǵ�Ч�ġ����Ҫ��ȫһ��,�����ж���������ͺ��Ӧʹ�á�

    (9) ����������

        IE: parentElement parentElement.children
        Firefox: parentNode parentNode.childNodes
        childNodes���±�ĺ�����IE��Firefox�в�ͬ,Firefoxʹ��DOM�淶,childNodes�л����հ��ı��ڵ㡣
        һ�����ͨ��node.getElementsByTagName()���ر�������⡣
        ��html�нڵ�ȱʧʱ,IE��Firefox��parentNode�Ľ��Ͳ�ͬ������:

    <form>
        <table>
            <input/>
        </table>
    </form>
    IE: input.parentNode��ֵΪ�սڵ�
    Firefox: input.parentNode��ֵΪform
    �������: Firefox�нڵ�û��removeNode����,����ʹ�����·��� node.parentNode.removeChild(node)

    (10) const ����

        IE: ��֧�� const �ؼ��֡��� const constVar = 32; ��IE�������﷨����
        Firefox: ֧��
    �������: ��ʹ�� const �� var ���档

    (11) body ����

        IE: ��body��ǩ��ȫ������֮��Ŵ���
        Firefox: ��body��ǩû�б��������ȫ����֮ǰ�ʹ���

    (12) �Զ�����������

        IE: ����ʹ�û�ȡ�������Եķ�������ȡ�Զ�������,Ҳ����ʹ��getAttribute()��ȡ�Զ�������
        Firefox: ֻ��ʹ��getAttribute()��ȡ�Զ�������
    �������: ͳһͨ��getAttribute()��ȡ�Զ�������

    (13) event.srcElement����

        IE: even.srcElement
        Firefox: even.target
    �������: ʹ��ʱ�ж����������,���ø���

    (14) ģ̬�ͷ�ģ̬����

        IE: ֧��ģ̬�ͷ�ģ̬����
        Firefox: ��֧��
    �������: ֱ��ʹ��window.open(pageURL,name,parameters)��ʽ���´��ڡ�
            �����Ҫ���Ӵ����еĲ������ݻظ�����,�������Ӵ�����ʹ��window.opener�����ʸ����ڡ�

    (15) innerText

        IE: innerText
        Firefox: textContent

    (16) ���� obj.style.height = imgObj.height �����

        IE: ��Ч
        Firefox: ��Ч
        �������: ͳһʹ��obj.style.height = imgObj.height + 'px';