/**
 *  获取滚动条位置
 *  @return
 * */
function getPageScroll() {
    // 当html文档头部包含有"文档类型声明"时,需要用 document.documentElement.scrollTop 获得正确的值
    // 没有 DOCTYPE  使用 document.body.scrollTop    window.pageYOffset 用于FF
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

/**
 * 类数组转换为数组
 * @param  obj
 * @return Array arr
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
 * @param  obj
 * @return Boolean
 */
function isArray(obj) {
    return Object.prototype.toString.call(obj) === 'object Array';
}

/**
 * 数组去重
 * @param  arr
 * @return Array aResult
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

// 高效数组去重
Array.prototype.unique = function () {
    var r = [];
    for (var i = 0, l = this.length; i < l; i++) {
        for (var j = i + 1; j < l; j++)
            if (this[i] === this[j]) j = ++i;
        r.push(this[i]);
    }
    return r;
};


/**
 * 快速排序
 * @param  arr
 * @return Array
 */
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    var aLeft = [];
    var aRight = [];

    var oNum = Math.floor(arr.length / 2);
    var pivot = arr.splice(oNum, 1); // 剔除选中的"基准"

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
 * 判断是否是string
 * @param  str
 * @return Boolean
 */
function isString(str) {
    return (typeof str == "string" || str.constructor == String);
}

/**
 * 判断是否是JSON
 * @return Boolean
 */
function isJSON() {
    return typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
}

/**
 * 获取随机数
 * @param  start 开始(包括)
 * @param  end 结束(包括)
 * @return Number
 */
function getRandom(start, end) {
    var max = Math.max(start, end);
    var min = Math.min(start, end);

    var total = max - min + 1;
    return Math.floor(Math.random() * total + min);

}

/**
 * 获取当前浏览器路径上的参数值
 * @param  parm
 * @return String
 */
function parseQueryString(parm) {
    var sValue = location.search.match(new RegExp("[\?\&]" + parm + "=([^\&]*)(\&?)", "i"));
    return sValue ? decodeURIComponent(sValue[1]) : decodeURIComponent(sValue);
}

/**
 * 传入Url返回键值对
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
