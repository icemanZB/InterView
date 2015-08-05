/**
 *  ��ȡ������λ��
 * */
function getPageScroll() {
	// ��html�ĵ�ͷ��������"�ĵ���������"ʱ,��Ҫ�� document.documentElement.scrollTop �����ȷ��ֵ
	// û�� DOCTYPE  ʹ�� document.body.scrollTop
	var pageScrollTop = window.pageYOffset // ����FF
		|| document.documentElement.scrollTop || document.body.scrollTop || 0;
	return pageScrollTop;
}

/**
 * ������ת��Ϊ����
 * @param  ������
 * @return ����
 */
function toArray(obj) {
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

/**
 * �ж��Ƿ�������
 * @param  ����
 * @return Boolean
 */
function isArray(obj) {
	return Object.prototype.toString.call(obj) === 'object Array';
}

/**
 * ����ȥ��
 * @param  ����
 * @return ȥ�غ������
 */
function arrayDistinct(arr) {
	var aResult = [];
	var json = {};
	for (var i = 0; i < arr.length; i++) {
		if (!json[arr[i]]) { // �ж�json���Ƿ��и�Ԫ�أ�û�о���ӵ�������
			aResult.push(arr[i]);
			json[arr[i]] = 1; // ��ֵΪ1��ʾ������ж��Ƿ���ӵ��µ�������
		}
	}
	return aResult; // JSON.stringify() ������תΪjson
}

/**
 * ��������
 * @param  ����
 * @return ����������
 */
function quickSort(arr) {
	if (arr.length <= 1) return arr;

	var aLeft = [];
	var aRight = [];

	var oNum = Math.floor(arr.length / 2);
	var pivot = arr.splice(oNum, 1);  // �޳�ѡ�е�"��׼"

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			aLeft.push(arr[i]);
		} else {
			aRight.push(arr[i]);
		}
	}

	return quickSort(left).concat(pivot, quickSort(aRight));
}
