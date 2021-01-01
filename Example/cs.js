/*
 * @Author       : yznaisy
 * @Date         : 2020-07-02 22:45:50
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-09-22 16:41:07
 * @FilePath     : \Code\cs.js
 */
// let str1 = 'jspang.com';
// let gogo = function (str) {
// 	return `Hi ${str}`;
// };
// console.log(str1);


/* let colors
// let score = prompt("请输入成绩")
let score = 1200
let variants = [1200, 1350, 1500, 1700, 1900, 2050, 2200, 2600]
let colorsArr = ["red", "green", "black", "white", "cyan", "blue", "yellow"]
if (score) {
  let ras = []
  for (let key in variants) {
    ras.push(variants[key] >= score)
  }
  let ors = ras.indexOf(true)
  colors = colorsArr[ors]
  console.log(ras);
}
console.log(colors); */

var a = 1;

function fun() {
  "use strict";
  var a = 2;
  return this.a;
}
fun()
