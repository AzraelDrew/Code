/*
 * @Author       : yznaisy
 * @Date         : 2020-10-24 22:32:31
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-10-24 22:37:53
 */

class Lesson {
  data = [];
  init() {
    this.data = [{
      name: "js"
    }, {
      name: "vue.js"
    }]
  }
  get() {
    return this.data
  }
}

let obj = new Lesson();
obj.init();

export {
  obj
}
