> 第一步

```
#用户配置
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

> 第二步

```
#生成密钥
ssh-keygen -t rsa -C "你的邮箱"  然后一直回车
```

> 第三步

```
#克隆或者初始化仓库
#初始化仓库
git init    #在当前目录下输入此代码就会将当前仓库初始化
#克隆
git clone 仓库地址
```

> 第四步

```
#将修改后的文件添加到暂存区
#将单个文件添加到暂存区
git add 文件名  
#将修改过的所有文件添加到暂存区
git add . 
```

> 第五步

```
#将暂存区的文件提交到本地仓库
git commit -m "你的备注信息"
```

> 第五步

```
#设置仓库地址
git remote add 本地仓库名称 你的仓库地址
```



> 第五步

```
#将本地仓库推送到服务器

#提交到默认仓库
git push 

#提交到指定仓库
git push 你的仓库地址
```



