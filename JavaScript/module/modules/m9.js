/*
 * @Author       : yznaisy
 * @Date         : 2020-09-17 23:46:54
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-10-24 23:51:19
 */
let site = "后盾人";

function show() {
  return "show function";
}
class User {
  static render() {
    return "user static render";
  }
}
// 导出别名
export {
  site as hd, show, User
};
