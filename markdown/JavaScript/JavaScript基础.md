# JavaScript基础

- 赋值
- 运算
- 字符串
- 转义符
- 数组
- 函数

> 赋值

```javascript
var myVariable = 23  //可以是数值，字符串，数组，对象登任何值
```

> 运算

| 运算符 |        代码         | 简写 | 说明 |
| :----: | :-----------------: | :--: | :--: |
|   +    | var first = a + b;  | a+=b | 加法 |
|   -    | var second = a - b; | a-+b | 减法 |
|   *    | var third = a * b;  | a*=b | 乘法 |
|   /    | var fourth = a / b; | a/=b | 除法 |
|   %    | var fifth = a % 3;  | a%=b | 取余 |

```javascript
var a = 10;
var b = 3;
var first = a + b;  
//可以简写为a+=b
var second = a - b;
//可以简写为a-=b
var third = a * b;
//可以简写为a*=b
var fourth = a / b;
//可以简写为a/=b
var fifth = a % 3;
//可以简写为a%=b
a = a + 1;
//可以简写为a++
a = a - 1; 
//可以简写为a--
```

> 字符串

```javascript
//声明变量
var myVariable = "myData"  //使用引号
myVariablr[0];  //可以通过索引获取想对应的值
myVarialr.length   //获取长度
var myVariable1 = '"yznofcode" is javascrpit programmer'
//"yznofcode" is javascrpit programmer
var myVariable2 = "'yznofcode' is javascrpit programmer"
//'yznofcode' is javascrpit programmer
```

> 转义符

| 代码 |  说明  |
| :--: | :----: |
| \\'  | 单引号 |
| \\"  | 双引号 |
| \\\  | 反斜杠 |
|  \n  | 换行符 |
|  \r  | 回车符 |
|  \t  | 制表符 |
|  \b  |  退格  |
|  \f  | 换页符 |

> 数组

| 代码            | 说明                 |
| --------------- | -------------------- |
| Array.push()    | 在数组的末尾插入元素 |
| Array.pop()     | 移除数组末尾的元素   |
| Array.shift()   | 移除数组第一个元素   |
| Array.unshift() | 在数组的头部插入元素 |

> 函数

```javascript
var GlobalVariable = 20;  //全局变量
function functionMyName(param1,param2){  //使用function声明函数
    var functionVariable=10;  //在函数内声明的变量，只能在函数内调用
    globalVariable=10;  //没有使用关键字声明则为全局变量
}
functionMyName(); //调用函数
```

