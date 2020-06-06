# sublime问题

## 出现以下情况

![](https://img-blog.csdnimg.cn/20200128150948905.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L25hdHVybHk=,size_16,color_FFFFFF,t_70)

- 由于PyV8没有下载下来

- 解决办法

  1. 去gitee把PyV8下载下来：https://gitee.com/yznaisy/pyv8-binaries.git

  2. 下载相对应的包将其解压

  3. 解压后有PyV8.pyd 和PyV8.py两个文件。然后新建一个PyV8的文件夹，放在Installed Packages目录下，。最快捷来到这个目录的方法是这样的，

     (Preferences – BrowserPackages)再返回上一级目录，再将其他的PyV8目录删除，重启解决如图：![](https://img-blog.csdnimg.cn/20200128151536510.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L25hdHVybHk=,size_16,color_FFFFFF,t_70)

     

