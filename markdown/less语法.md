变量(Variables)

``` css
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

编译为

``` css
#header {
  width: 10px;
  height: 20px;
}
```

- 嵌套

``` css
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

编译为

``` css
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

- 混合

``` csss
.a {
    width: 200px;
    height: 200px;
}

#menu a {
    color: red;
    .a();
}

#menu b {
    color: red;
    .a();
}
```

编译为

```css
.a {
  width: 200px;
  height: 200px;
}
#menu a {
  color: red;
  width: 200px;
  height: 200px;
}
#menu b {
  color: red;
  width: 200px;
  height: 200px;
}
```

- &符使用(&表示当前选择器的父级)

```css
.clearfix {
  display: block;
  zoom: 1;

  &:after {  //&表示.clearfix
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

- @规则嵌套和冒泡

```css
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
```

编译为

```css
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```

- 运算

```css
// 所有操作数被转换成相同的单位
@conversion-1: 5cm + 10mm; // 结果是 6cm
@conversion-2: 2 - 3cm - 5mm; // 结果是 -1.5cm

// conversion is impossible
@incompatible-units: 2 + 5px - 3cm; // 结果是 4px

// example with variables
@base: 5%;
@filler: @base * 2; // 结果是 10%
@other: @base + @filler; // 结果是 15%
@base: 2cm * 3mm; // 结果是 6cm
@color: #224488 / 2; //结果是 #112244
background-color: #112244 + #111; // 结果是 #223355
```

- calc()特例

```css
@var: 50vh/2;
width: calc(50% + (@var - 20px));  // 结果是 calc(50% + (25vh - 20px))
```

- 转义

```css
@min768: ~"(min-width: 768px)";
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
//注意，从Less3.5开始，可以简写为：
//在 Less 3.5+ 版本中，许多以前需要“引号转义”的情况就不再需要了
@min768: (min-width: 768px);
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```

编译为

```css
@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}
```

- 命名空间和访问符

有时，出于组织结构或仅仅是为了提供一些封装的目的，你希望对混合（mixins）进行分组。你可以用 Less 更直观地实现这一需求。假设你希望将一些混合（mixins）和变量置于 `#bundle` 之下，为了以后方便重用或分发：

```css
#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white;
    }
  }
  .tab { ... }
  .citation { ... }
}
```

现在，如果我们希望把 `.button` 类混合到 `#header a` 中，我们可以这样做：

```css
#header a {
  color: orange;
  #bundle.button();  // 还可以书写为 #bundle > .button 形式
}
```

- 映射

```css
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```

编译为

```css
.button {
  color: blue;
  border: 1px solid green;
}
```

- 作用域

```css
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}


@var: red;

#page {
  #header {
    color: @var; // white
  }
  @var: white;
}
```

