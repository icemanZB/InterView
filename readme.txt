http://www.nowcoder.com/ ���������
bootstrap ��Ӧʽ����
backbone
node.js
http://www.jikexueyuan.com/ ����ѧԺ

http://segmentfault.com/a/1190000002627927 / http://www.cnblogs.com/coco1s/p/4029708.html ���뿴 jsƪ

http://www.jb51.net/article/56847.htm ���뿴 cssƪ

1���¼�ί����ʲô?

�������¼�ð�ݵ�ԭ��,���Լ������������¼�,�����ĸ�Ԫ�ش���ִ��

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

6���ڹ���ģʽ�ʹ�ͳģʽ���������ƽʱ������xhtmlģʽ

   �ڹ���ģʽ�� IE�Ŀ�=width+padding+margin, xhtmlģʽ=width

7��indexOf() ����ĳ��ָ�����ַ���ֵ���ַ������״γ��ֵ�λ��

8��JavaScript���ļ�����������
����: Number,Boolean,String,Null,undefined
����: Object,Array,Function

9��document.write�� innerHTML������
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
    �������: ��ʹ�� const �� var ����

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

27��doctype(�ĵ�����)��������ʲô?��֪���������ĵ�����?

    <!DOCTYPE>����λ���ĵ��е���ǰ���λ��,����<html>��ǩ֮ǰ,�˱�ǩ�ɸ�֪������ĵ�ʹ������HTML��XHTML�淶��

    �ñ�ǩ���������� DTD ���ͣ��ֱ��ʾ�ϸ�汾�����ɰ汾�Լ����ڿ�ܵ� HTML �ĵ���
    HTML 4.01 �涨�������ĵ����ͣ�Strict��Transitional �Լ� Frameset��
    XHTML 1.0 �涨������ XML �ĵ����ͣ�Strict��Transitional �Լ� Frameset��
    Standards (��׼)ģʽ(Ҳ�����ϸ����ģʽ)���ڳ�����ѭ���±�׼����ҳ,��
    Quirks(����)ģʽ(Ҳ������ɢ����ģʽ���߼���ģʽ)���ڳ���Ϊ��ͳ���������Ƶ���ҳ��

28��css hacks

    CSS hack����_�� *�� +�� \9�� !important ֮��

    _width �����ie6

    *width,+width�����ie6,7

    color: red\9; /* IE8�Լ����°汾����� */

    !important ��IE�лᱻ���ӣ�ie6,7,8��ʶ��ie9+������ie9����ʶ���

29��http״̬��

    Web�������������߿ͻ���,������ʲô��,Ҳ����һ�ֿ��ٽ������ķ�ʽ��
    200��OK���������ɹ�����������
    301/302: Moved Permanently(�ض���),�����URL������,һ��������ת��,һ������ʱת�ơ�
             Response��Ӧ�ð���һ��Location URL, ˵����Դ����������λ�á�
    304��Not Modified(δ�޸�),�ͻ��Ļ�����Դ�����µ�,Ҫ�ͻ���ʹ�û��档
    404��HTTP/1.1 404 Not Found,�������޷��ҵ��������URL��
    501��Internal Server Error,����������һ������,ʹ���޷��������ṩ����
    503��Service Unavailable(δ�ṩ�˷���),������Ŀǰ�޷�Ϊ����������,����һ��ʱ��Ϳ��Իָ�����
    1XX��Ϣ��״̬�롣
    2XX�ɹ�״̬�롣
    3XX�ض���״̬�롣
    4XX�ͻ��˴���״̬�롣
    5XX����������״̬�롣

30���������CSS��ƥ��ԭ��

    �����CSSƥ�䲻�Ǵ����ҽ��в���,���Ǵ��ҵ�����в��ҡ�����֮ǰ˵��div#divBox p span.red{color:red;}
    ������Ĳ���˳������:�Ȳ��� html ������ class="red" �� span Ԫ��,�ҵ����ٲ����丸��Ԫ�����Ƿ���pԪ��
    ���ж� p �ĸ�Ԫ�����Ƿ��� id Ϊ divBox �� div Ԫ��,�����������CSSƥ���ϡ�
    ��������ҵ�����в��ҵĺô���Ϊ�˾�����˵�һЩ�޹ص���ʽ�����Ԫ�ء�
    firefox�����ֲ��ҷ�ʽΪ keyselector (�ؼ��ֲ�ѯ),��ν�Ĺؼ��־�����ʽ���������(���ұ�)�Ĺ���,�����key����span.red��

31��HTML��XHTML����������ʲô����

   1. ���еı�Ƕ�����Ҫ��һ����Ӧ�Ľ������
   2. ���б�ǩ��Ԫ�غ����Ե����ֶ�����ʹ��Сд
   3. ���е�XML��Ƕ��������Ƕ��
   4. ���е����Ա��������� "" ������
   5. ������ < �� & ��������ñ����ʾ
   6. ���������Ը�һ��ֵ
   7. ��Ҫ��ע��������ʹ "�C"
   8. ͼƬ������˵������

32��CSS�� link �� @import ������

  (1) link ���� HTML ��ǩ,��@import��CSS�ṩ��
  (2) ҳ�汻���ص�ʱ,link ��ͬʱ������,�� @import ���õ� CSS ��ȵ�ҳ�汻�������ټ���
  (3) import ֻ�� IE5 ���ϲ���ʶ��,�� link �� HTML ��ǩ,�޼�������
  (4) link ��ʽ����ʽ��Ȩ�ظ��� @import ��Ȩ��

33��position��absolute��fixed��ͬ���벻ͬ��
    ��ͬ�㣺
        1. �ı�����Ԫ�صĳ��ַ�ʽ,display ����Ϊblock
        2. ��Ԫ��������ͨ��,��ռ�ݿռ�
        3. Ĭ�ϻḲ�ǵ��Ƕ�λԪ����
    ��ͬ��:
    absolute ��"��Ԫ��"�ǿ������õ�,�� fixed ��"��Ԫ��"�̶�Ϊ���������
    ���������ҳ,fixedԪ�������������֮��ľ����ǲ����

34��IE����ģ�ͺͱ�׼W3C����ģ�͵�����

    ���Կ��� IE ����ģ�͵ķ�ΧҲ���� margin��border��padding��content �� ��׼ W3C ����ģ�Ͳ�ͬ����:

    IE ����ģ�͵� content ���ְ����� border �� padding
    W3C����ģ�͵� content ���ֲ�������������

35���ٲ������� ���� ��ʽ���� �Ƿ����˽�

    �ٲ�������: ���þ��Զ�λ����ÿ��ͼƬ����ģ�鶨λ
    ��ʽ����: ���ø���ʽ��ģ�鶨λ,����������Ӧʽ����

36����Ԫ��ѡ���� �ͺ��ѡ����Ԫ����ʲô����

cssѡ�����е� '>' �����ϣ��ѡ������ĺ��Ԫ��,����ֻѡ��ĳ��Ԫ�ص���Ԫ��,ʹ����Ԫ��ѡ����(Child selector)
E > F ��Ԫ��ѡ����,ƥ������EԪ�ص���Ԫ��F
<style type="text/css">
	h1 > strong {color:red;}  /* ��ֻ�е�һ��h1�����strong���ֱ�� */
	h1 strong { color:blue;}  /* h1 �µ�����strong������ */
</style>
<h1>
	This is <strong>very</strong> <strong>very</strong> important.
</h1>
<h1>This is
	<em>really
		<strong>very</strong>
	</em> important.
</h1>

37�� offsetTop �� style.top ������

    offsetHeight:Ϊ�������ӵ�����߶�,�Ƕ�̬��ȡֵ style.top:Ϊ���Զ�λ��� top ֵ
    offsetTop: ���Ӷ�����Զ�λ���������ĸ߶� �������û�ж�λ,�Ǿ����������ҳ��
    offsetTop ֻ�ܻ�ȡ���ж�λ�ĸ���

    1��offsetTop ���ص�������,�� style.top ���ص����ַ���,���������⻹���е�λ: px
    2��offsetTop ֻ�� �� style.top �ɶ�д
    3�����û�и� HTML Ԫ��ָ���� top ��ʽ,�� style.top ���ص��ǿ��ַ�����

38��jQuery�е�.height()��.innerHeight()��.outerHeight()

    .height() ��û�м������  ������padding,�������߿�
    ��ȡ�����������߶�  aLi.outerHeight() = offsetHeight
    .innerHeight()  ���� padding �������� border  document.getElementById("div1").clientHeight
    .outerHeight()  ���� padding �� border  �����Խ���һ������,�ò��������Ƿ������߾�,���Ϊ true ���ʾ������߾�


39����������ת��

   []+1+3  //���Ϊ13
   [1]+3   //���Ϊ13
   null+1+3  //���Ϊ4

   ת��������
   +x //ʹ��һ��һԪ�ļӺ���������������ķ���
   x-0 �� x*1 //��һ����ʽ
   Number(x)  //ʹ�ò���new�����ֹ��캯������ת��

   ����ͺ������Ǳ�ת����NaN, undefined Ҳ�ᱻת���� NaN, �� null�ᱻת����0
   alert(+[]);  //���Ϊ0
   alert(+[1]); //���Ϊ1
   alert(+[1,2]); //���ΪNaN
   alert(+new Array(1)); //���Ϊ0
   alert(+new Array(1,2)); //���ΪNaN

