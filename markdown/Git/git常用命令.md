> *添加仓库*

```
git remote add <本地仓库名称> <你的项目地址>
```

> *修改仓库名称*

```
git remote rename <原仓库名称> <新仓库名称>
```

> *修改仓库地址*

```
git remote set-uel <本地仓库名称> <仓库地址>
```

> *如果当前分支与多个主机存在追踪关系，则可以使用-u 选项指定一个默认主机，这样后面就可以不加任何参数使用 git push*

``` 
git push -u origin master
```

> *对工作区与暂存区的差异*

```
 git diff
```

> *对比暂存区与版本区的差异*

```
git giff --cached
```

> *对比 master 分支的工作区域版本区的差异*

```
git diff master
```

> *暂存区域版本区保持一致*

``` 
 git reset HEAD <file>
```

> *暂存区（暂存区没有找版本区）覆盖工作区的内容*

```
git checout <file>
```

>  *删除暂存区的文件*

``` 
git rm <file> --cached
```



> *同时删除工作区和暂存区的文件*

```
git rm <file>
```

> *git commit -a -m "update my project"(第一次以后用)*

```
git add . git commit -m "update my project"
```

> *恢复版本区指定版本的内容到工作区*

```
git reset --hard <version>
```

> *查看引用版本号*

``` 
git reflog
```

> *查看分支*

```
git branch 
```

> *创建分支*

```
git branch dev
```

> *切换分支*

```
git checkout dev
```

> *创建并切换分支*

```
git checkout -b dev
```

> *删除分支*

```
git branch -d dev
```

> *将 dev 合并到 master*

```
git merge dev
```

> *展示历史操作图*

```
git log --oneline --graph
```

