http://www.nowcoder.com/ ���������
bootstrap ��Ӧʽ����
backbone
node.js

1���¼�ί����ʲô?

�������¼�ð�ݵ�ԭ��,���Լ������������¼�,�����ĸ�Ԫ�ش���ִ��!

2���հ���ʲô����ʲô���ԣ���ҳ����ʲôӰ��

�հ������ܹ���ȡ���������ڲ������ĺ�����

3�������ֹ�¼�ð�ݺ�Ĭ���¼�

canceBubble   return false


4������jsonp��ԭ���Լ�Ϊʲô����������ajax

   ��̬����script��ǩ���ص�����

   Ajax��ҳ����ˢ���������ݲ���

   ��������򵥵���������ΪJSͬԴ���Ե����ƣ�a.com�����µ�JS�޷�����b.com��c.a.com�µĶ���

5��javascript�ı��ض������ö������������

   ���ض���Ϊarray obj regexp�ȿ���newʵ����

   ���ö���Ϊgload Math �Ȳ�����ʵ������

   ����Ϊ������Դ���document,window ��

6���ڹ���ģʽ�ʹ�ͳģʽ���������ƽʱ������xhtmlģʽ��

   �ڹ���ģʽ�� IE�Ŀ�=width+padding+margin, xhtmlģʽ=width

7��indexOf() ����ĳ��ָ�����ַ���ֵ���ַ������״γ��ֵ�λ��

--------------------------------------------------------------
14����굥��Button1��Button1�ƶ���Button2�ĺ���<div> <input type=��button�� id =��button1�� value=��1�� onclick=��???��> <input type=��button�� id =��button2�� value=��2�� /��> </div>
<div>
   <input type="button" id ="button1" value="1" onclick="moveBtn(this);">
   <input type="button" id ="button2" value="2" />
</div>
<script type="text/javascript">
function moveBtn(obj) {//˼·���ȿ�¡һ����Ȼ����ϣ�Ȼ��ɾ��ԭ�����Ǹ�
   var clone = obj.cloneNode(true);
   var parent = obj.parentNode;
   parent.appendChild(clone);
   parent.removeChild(obj);
}
</script>

15��JavaScript���ļ�����������
�򵥣�Number��Boolean��String��Null��Undefined
���ϣ�Object��Array��Function


16��JavaScript����ζ�һ������������clone
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

17����ʵ�֣������ҳ���е������ǩ��alert�ñ�ǩ�����ƣ���ע������ԣ�

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

18�����дһ��JavaScript���� parseQueryString��������;�ǰ�URL��������Ϊһ������

19��ajax �ײ㣿

20��documen.write�� innerHTML������
document.writeֻ���ػ�����ҳ��
innerHTML�����ػ�ҳ���һ����

21�� ǰ�˿������Ż�����
��1�� ����http���������css spirit,data uri
��2�� JS��CSSԴ��ѹ��
��3�� ǰ��ģ�� JS+���ݣ���������HTML��ǩ���µĴ����˷ѣ�ǰ���ñ�������AJAX��������ÿ�β������ر������������󣬼����������
��4�� ��innerHTML����DOM����������DOM�����������Ż�javascript����
��5�� ��setTimeout������ҳ��ʧȥ��Ӧ
��6�� ��hash-table���Ż�����
��7�� ����Ҫ���õ���ʽ�ܶ�ʱ����className������ֱ�Ӳ���style
��8�� ����ȫ�ֱ���
��9�� ����DOM�ڵ���ҵĽ��
��10�� ����ʹ��CSS Expression
��11�� ͼƬԤ��
��12�� ������ҳ������岼����ʹ��table��tableҪ�����е�������ȫ����֮��Ż���ʾ��������ʾ��div+css������


22�� javascript�����������͵��У�



