/**
 *  ��ȡ������λ��
 * */
function getPageScroll() {
    // ��html�ĵ�ͷ��������"�ĵ���������"ʱ,��Ҫ�� document.documentElement.scrollTop �����ȷ��ֵ
    // û�� DOCTYPE  ʹ�� document.body.scrollTop
    var pageScrollTop = window.pageYOffset  // ����FF
        || document.documentElement.scrollTop
        || document.body.scrollTop
        || 0;
    return pageScrollTop;
}

/**
 * ������ת��Ϊ����
 * @param  ������
 * @return ����
 */
function toArray(obj){
	try {
		// Array.prototype.slice.call(obj,0)
		return Array.prototype.slice.call(obj);
	} catch (e) {
		var arr = [];
		for (var i = 0, len = obj.length; i < len; i++) {
			// arr.push(s[i]);
			arr[i] = s[i]; // ������push��
		}
		return arr;
	}
}
