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

