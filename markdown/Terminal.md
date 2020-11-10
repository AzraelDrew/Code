# Terminal美化



#### 保证运行本地脚本的执行

```
set-executionpolicy remotesigned -scope currentuser
```

#### 安装scoop

```
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```

#### 安装oh-my-posh

```
# 1. 安装 choco
Set-ExecutionPolicy Bypass -Scope Process -Force; 
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

# 2. 安装ConEmu
choco install ConEmu

# 3. 安装 posh-git 和 oh-my-posh
Install-Module posh-git -Scope CurrentUser
Install-Module oh-my-posh -Scope CurrentUser
```

#### 切换主题

```
# 安装微软官方颜色工具
scoop install colortool

# 查看已安装主题
colortool -s

# 设置主题
colortool  OneHalfDark.itermcolors
```

#### 优化ls命令的样式

```
Install-Module Get-ChildItemColor
```

#### 添加到右键菜单

```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt]
@="Terminal"
"Icon"="D:\\Terminal\\icon\\cmd.ico"

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt\command]
@="C:\\Users\\Azrael\\AppData\\Local\\Microsoft\\WindowsApps\\wt.exe"

```



