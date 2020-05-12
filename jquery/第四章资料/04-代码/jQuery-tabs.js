/**
 * Created by itcast on 2018 12/31.
 */
(function ($) {
  /**
   * 给$的原型添加tabs方法
   * @param option.tabHeads          需要注册事件的页签们选择器
   * @param option.tabHeadsClass     触发事件的页面要添加的类
   * @param option.tabBodys          要显示的页面们选择器
   * @param option.tabBodysClass     索引一致要显示的页面要添加的类.
   */
  $.fn.tabs = function (option) {
    var $bigDiv = this; //把this先存进$bigDiv变量中.

    //通过参数传递过来的页签选择器,获取到这些页签. 给这些页面注册点击事件.
    $(this).find(option.tabHeads).on('click', function () {
      //给当前鼠标点击的这个页签添加option.tabHeadsClass类,其他的兄弟页签移除这个类.

      $(this).addClass(option.tabHeadsClass).siblings().removeClass(option.tabHeadsClass);

      //获取当前点击的页面的索引
      var idx = $(this).index();

      //获取索引一致的页面,给他添加option.tabBodysClass, 其他的兄弟页面移除这个类.
      $bigDiv.find(option.tabBodys).eq(idx).addClass(option.tabBodysClass).siblings().removeClass(option.tabBodysClass);

    });

    //返回值.
    return $bigDiv;

  }
}(window.jQuery));