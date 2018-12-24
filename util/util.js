// 建立公共方法
export default{
  // 属性复制
  copyProperty: function (p, c) {
    c = c || {}
    for (var i in p) {
      // 属性i是否为p对象的自有属性
      if (p.hasOwnProperty(i)) {
        // 属性i是否为复杂类型
        if (typeof p[i] === 'object') {
          // 如果p[i]是数组，则创建一个新数组
          // 如果p[i]是普通对象，则创建一个新对象
          // c[i] = Array.isArray(p[i]) ? [] : {}
          c[i] = Array.isArray(p[i]) ? [] : p[i] != null ? {} : null
          // 递归拷贝复杂类型的属性
          this.copyProperty(p[i], c[i])
        } else {
          // 属性是基础类型时，直接拷贝
          c[i] = p[i]
        }
      }
    }
    return c
  },
  // PC端返回false
  isMobile: function () {
    var viewType = navigator.userAgent.toLowerCase()
    console.log(viewType)
    return viewType.match(/(phone|pad|pod|midp|iphone|ipod|iphone os|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|rv:1.2.3.4|ucweb|fennec|wosbrowser|browserng|webos|symbian|windows ce|windows mobile|windows phone)/i)
  }
}
