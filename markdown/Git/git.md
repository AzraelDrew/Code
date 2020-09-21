> 生成公钥

```
  ssh-keygen -t rsa -C "740161192@qq.com"，这个邮箱是公司的邮箱，然后一直回车， 然后你就可以在你的用户目录下查看到公私钥对，直接粘贴公钥到你的公司git账号的公钥里就行了；
```

>生成私钥

```
ssh-keygen -t rsa -C "740161192@qq.com" -f company_rsa， -f 表示指定的公私钥对文件名，
```

> 平台映射

- 在.ssh目录下生成config文件

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







> 删除github账号密码

- 打开cmd，输入命令：`rundll32.exe keymgr.dll,KRShowKeyMgr`
- 将 github 相关的条目删除





