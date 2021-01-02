> _添加仓库_

```
git remote add <本地仓库名称> <你的项目地址>
```

> _修改仓库名称_

```
git remote rename <原仓库名称> <新仓库名称>
```

> _修改仓库地址_

```
git remote set-uel <本地仓库名称> <仓库地址>
```

> _如果当前分支与多个主机存在追踪关系，则可以使用-u 选项指定一个默认主机，这样后面就可以不加任何参数使用 git push_

```
git push -u origin master
```

> _对工作区与暂存区的差异_

```
 git diff
```

> _对比暂存区与版本区的差异_

```
git giff --cached
```

> _对比 master 分支的工作区域版本区的差异_

```
git diff master
```

> _暂存区域版本区保持一致_

```
 git reset HEAD <file>
```

> _暂存区（暂存区没有找版本区）覆盖工作区的内容_

```
git checout <file>
```

> _删除暂存区的文件_

```
git rm <file> --cached
```

> _同时删除工作区和暂存区的文件_

```
git rm <file>
```

> _git commit -a -m "update my project"(第一次以后用)_

```
git add . git commit -m "update my project"
```

> _恢复版本区指定版本的内容到工作区_

```
git reset --hard <version>
```

> _查看引用版本号_

```
git reflog
```

> _查看分支_

```
git branch
```

> _创建分支_

```
git branch dev
```

> _切换分支_

```
git checkout dev
```

> _创建并切换分支_

```
git checkout -b dev
```

> _删除分支_

```
git branch -d dev
```

> _将 dev 合并到 master_

```
git merge dev
```

> _展示历史操作图_

```
git log --oneline --graph
```

> 删除远程仓库的文件或文件夹

```
git rm -r --cached filename or folder

git commit -m "delete filename"

git push
```

// 提交时转换为 LF，检出时转换为 CRLF
git config --global core.autocrlf true

// 提交时转换为 LF，检出时不转换
git config --global core.autocrlf input

// 提交检出均不转换
git config --global core.autocrlf false
