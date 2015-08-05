/**
 *  获取滚动条位置
 * */
function getPageScroll() {
	// 当html文档头部包含有"文档类型声明"时,需要用 document.documentElement.scrollTop 获得正确的值
	// 没有 DOCTYPE  使用 document.body.scrollTop
	var pageScrollTop = window.pageYOffset // 用于FF
		|| document.documentElement.scrollTop || document.body.scrollTop || 0;
	return pageScrollTop;
}

/**
 * 类数组转换为数组
 * @param  类数组
 * @return 数组
 */
function toArray(obj) {
	try {
		// Array.prototype.slice.call(obj,0)
		return Array.prototype.slice.call(obj);
	} catch (e) {
		var arr = [];
		for (var i = 0, len = obj.length; i < len; i++) {
			// arr.push(s[i]);
			arr[i] = s[i]; // 这样比push快
		}
		return arr;
	}
}

/**
 * 判断是否是数组
 * @param  数组
 * @return Boolean
 */
function isArray(obj) {
	return Object.prototype.toString.call(obj) === 'object Array';
}

/**
 * 数组去重
 * @param  数组
 * @return 去重后的数组
 */
function arrayDistinct(arr) {
	var aResult = [];
	var json = {};
	for (var i = 0; i < arr.length; i++) {
		if (!json[arr[i]]) { // 判断json中是否有该元素，没有就添加到数组中
			aResult.push(arr[i]);
			json[arr[i]] = 1; // 赋值为1表示上面的判断是否添加到新的数组中
		}
	}
	return aResult; // JSON.stringify() 把数组转为json
}

/**
 * 快速排序
 * @param  数组
 * @return 排序后的数组
 */
function quickSort(arr) {
	if (arr.length <= 1) return arr;

	var aLeft = [];
	var aRight = [];

	var oNum = Math.floor(arr.length / 2);
	var pivot = arr.splice(oNum, 1);  // 剔除选中的"基准"

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			aLeft.push(arr[i]);
		} else {
			aRight.push(arr[i]);
		}
	}

	return quickSort(left).concat(pivot, quickSort(aRight));
}
