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

