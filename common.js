/**
 *  获取滚动条位置
 * */
function getPageScroll() {
    // 当html文档头部包含有"文档类型声明"时,需要用 document.documentElement.scrollTop 获得正确的值
    // 没有 DOCTYPE  使用 document.body.scrollTop
    var pageScrollTop = window.pageYOffset  // 用于FF
        || document.documentElement.scrollTop
        || document.body.scrollTop
        || 0;
    return pageScrollTop;
}

/**
 * 类数组转换为数组
 * @param  类数组
 * @return 数组
 */
function toArray(obj){
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
