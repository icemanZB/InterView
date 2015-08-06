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
	var pivot = arr.splice(oNum, 1); // �޳�ѡ�е�"��׼"

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			aLeft.push(arr[i]);
		} else {
			aRight.push(arr[i]);
		}
	}

	return quickSort(left).concat(pivot, quickSort(aRight));
}

/**
 * �ж��Ƿ���string
 * @param  str
 * @return Boolean
 */
function isString(str) {
	return (typeof str == "string" || str.constructor == String);
}

/**
 * �ж��Ƿ���JSON
 * @return Boolean
 */
function isJSON() {
	return typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
}

/**
 * ��ȡ�����
 * @param  ��ʼ(����)
 * @param  ����(����)
 * @return ����
 */
function getRandom(start, end) {
	var max = Math.max(start, end);
	var min = Math.min(start, end);

	var total = max - min + 1;
	return Math.floor(Math.random() * total + min);

}

/**
 * ��ȡ��ǰ�����·���ϵĲ���ֵ
 * @param  key
 * @return value
 */
function parseQueryString(parm) {
	var sValue = location.search.match(new RegExp("[\?\&]" + parm + "=([^\&]*)(\&?)", "i"));
	return sValue ? decodeURI(sValue[1]) : decodeURI(sValue);
}

/**
 * ����Url���ؼ�ֵ��
 * @param  url
 * @return object
 */
function parseUrlQueryString(url) {
	var str = url.split("?")[1],
		items = str.split("&");
	var result = {},
			arr = [];
	for (var i = 0; i < items.length; i++) {
		arr = items[i].split("=");
		result[arr[0]] = arr[1];
	}

	return result;
}
