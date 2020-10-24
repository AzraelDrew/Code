<!--
 * @Author       : yznaisy
 * @Date         : 2020-06-24 16:26:21
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-06-24 17:04:10
 * @FilePath     : \Code\markdown\node\npm.md
-->

# 换源

> npm config set registry https://registry.npm.taobao.org

# 查看 config

> npm config list

# 本地安装

> npm install <package> #局部安装
> npm install <package> #全局安装

# 项目安装

> 在想对应的文件夹里面安装

# 查看已经安装的包

```
npm list -g --depth=0
#  -g 为全局
#  -–depth 表示深度，我们使用的模块会有依赖，深度为零的时候，不会显示依赖模块
```

