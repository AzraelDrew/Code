# Vue

## 第一章

``` javascript
<body>
    <div id="app">
        <input type="text">
        <p>{{title}}</p> <!-- vue特殊语法：会在html中查找data中的值与之匹配，如果匹配到就把想对应的值转给它 -->
        <p>{{yznaisy1}}</p>
    </div>
</body>
<script>
    new Vue({
        el: "#app",    <!-- 选择器 -->
        data: {
            title: "Hello Word",
            yznaisy: "yznaisy"
        }
    })
</script>
```

