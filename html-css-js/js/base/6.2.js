/*
 * @Author       : yznaisy
 * @Date         : 2020-05-12 13:57:18
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-30 14:29:55
 * @FilePath     : \Code\html-css-js\js\base\6.2.js
 */
{
  let $ = (window.$ = {});
  $.web = "hdcms";
  let url = "hdcms.com"; //url和site没有开发给$所以在外部访问不到，只能通过getUrl()
  let site = "后盾人";
  $.getUrl = function () {
    return url;
  };
}
