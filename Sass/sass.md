> 手动编译

```shell

#单文件编译
sass input.scss index.css

#单文件监听
sass --watch input.scss:output.css
#多文件监听  google

#编译格式
sass --watch input.scss:output.css --style compact

#--style表示解析后的css是什么排版格式;
#sass内置有四种编译格式:nested``expanded``compact``compressed
```

> vscode自动编译

安装[Formatter Hero](https://marketplace.visualstudio.com/items?itemName=Wscats.qf)扩展

打开或关闭自动编译

![](https://user-images.githubusercontent.com/17243165/103136646-1cdf5280-46fd-11eb-94a3-f78534835427.png)

> 基本语法

```scss
//变量声明
$nav_color: #F90;   //$nav_color的值为#F90  

//可以用空格或者逗号分割多个属性值
$basic_border: 1px solid black;

$plain-font: "Myriad Pro"、Myriad;


//使用变量
$nav_color: #F90;  //可全局使用
nav {
  $width: 100px;   //只在nav可以使用
  width: $width;
  color: $nav_color;
  border: 1px solid $nav_color;   //多个属性值也可以使用变量
}


//在变量中使用变量
$highlight_color: #F90;
$highlight_border: 1px solid $highlight_color;  //变量中使用变量
.selected {
  border: $highlight_border;
}


//嵌套规则
#content {
  article {
    h1 { color: #333 }
    p { margin-bottom: 1.4em }
  }
  aside { background-color: #EEE }
}


//父选择器表示符&
article a {
  color: blue;
  &:hover { color: red }   //此处的&为a标签
}


#content aside {
  color: red;
  body.ie & { color: green }
}
/*编译后*/
#content aside {color: red};
body.ie #content aside { color: green }


//群组选择器的嵌套
.container {
  h1, h2, h3 {margin-bottom: .8em}
}
nav, aside {
  a {color: blue}
}
/*编译后*/
.container h1, .container h2, .container h3 { margin-bottom: .8em }
nav a, aside a {color: blue}


//子选择器
div > p{   //只能选择作为某元素儿子元素的元素（直接子元素），不包括孙元素、曾孙元素等等等
  border: 1px solid #ccc
}


//相邻选择器
header + p { font-size: 1.1em }


//兄弟选择器（~），又称匹配选择器
div ~ p{   //选择所有跟在div后的同层p元素，不管它们之间隔了多少其他元素：
  border-top: 1px dashed #ccc
}

article {
  ~ article { border-top: 1px dashed #ccc }
  > section { background: #eee }
  dl > {
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + & { margin-top: 0 }
}
/*编译后*/
article ~ article { border-top: 1px dashed #ccc }
article > footer { background: #eee }
article dl > dt { color: #333 }
article dl > dd { color: #555 }
nav + article { margin-top: 0 }


//嵌套属性
nav {
  border: 1px solid #ccc {
    left: 0px;
    right: 0px;
  }
}
/*编译后*/
nav {
  border: 1px solid #ccc;
  border-left: 0px;
  border-right: 0px;
}


//静默注释

// 这种注释内容不会出现在生成的css文件中
/* 这种注释内容会出现在生成的css文件中 */



//混合器  使用时尽量语义化为避免重复使用混合器,名字尽量简短

@mixin rounded_corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded_corners;
}
/*编译后*/
notice {
  background-color: green;
  border: 2px solid #00aa00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}


//混合器中的CSS规则   

//混合器中不仅可以包含属性，也可以包含css规则，包含选择器和选择器中的属性，如下代码:
@mixin no-bullets {
  list-style: none;
  li {
    list-style-image: none;
    list-style-type: none;
    margin-left: 0px;
  }
}

//当一个包含css规则的混合器通过@include包含在一个父规则中时，在混合器中的规则最终会生成父规则中的嵌套规则
ul.plain {
  color: #444;
  @include no-bullets;
}
/*编译后*/
ul.plain {
  color: #444;
  list-style: none;
}
ul.plain li {
  list-style-image: none;
  list-style-type: none;
  margin-left: 0px;
}


//给混合器传参
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
a {
  @include link-colors(blue, red, green);
}
/*编译后*/
a { color: blue; }
a:hover { color: red; }
a:visited { color: green; }


//当你@include混合器时，有时候可能会很难区分每个参数是什么意思，参数之间是一个什么样的顺序。为了解决这个问题，sass允许通过语法$name: value的形式指定每个参数的值。这种形式的传参，参数顺序就不必再在乎了，只需要保证没有漏掉参数即可：
a {
    @include link-colors(
      $normal: blue,
      $visited: green,
      $hover: red
  );
}



//混合器默认参数值
@mixin link-colors(
    $normal,
    $hover: $normal,
    $visited: $normal
  )
{
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
//如果像下边这样调用：@include link-colors(red) $hover和$visited也会被自动赋值为red。



//使用选择器继承来精简CSS

//通过选择器继承继承样式
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
//在上边的代码中，.seriousError将会继承样式表中任何位置处为.error定义的所有样式。以class="seriousError" 修饰的html元素最终的展示效果就好像是class="seriousError error"
```

