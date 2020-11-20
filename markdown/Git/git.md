> 生成公钥

```
  ssh-keygen -t rsa -C "740161192@qq.com"，这个邮箱是公司的邮箱，然后一直回车， 然后你就可以在你的用户目录下查看到公私钥对，直接粘贴公钥到你的公司git账号的公钥里就行了；
```

> 生成私钥

```
ssh-keygen -t rsa -C "740161192@qq.com" -f company_rsa， -f 表示指定的公私钥对文件名，
```

> 平台映射

- 在.ssh 目录下生成 config 文件

```
Host github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_github
Host gitee.com
    HostName gitee.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_gitee
```

> 验证

```
 ssh -T git@github.com
```

> 删除 github 账号密码

- 打开 cmd，输入命令：`rundll32.exe keymgr.dll,KRShowKeyMgr`
- 将 github 相关的条目删除

> git 中文乱码

- 在 git 的安装路径下找到 etc 里的 bash.bashrc，文件末尾添加

```
export LANG="zh_CN.UTF-8"
export LC_ALL="zh_CN.UTF-8"
```
