# GIT安装

> 方法一（版本可能不是最新）

```
yum install git
```

> 方法二（安装任意版本）

- 解压git

```
[root@localhost ~]# tar -zxvf v2.26.2.tar.gz
```

- 提前安装可能所需的依赖

```
yum install curl-devel expat-devel gettext-devel openssl-devel zlibdevel gcc-c++ perl-ExtUtils-MakeMaker
```

- 编译安装git

```
[root@localhost ~]# cd git-2.26.2/ 
[root@localhost git-2.26.2]# make configure 
[root@localhost git-2.26.2]# ./configure --prefix=/usr/local/git 
[root@localhost git-2.26.2]# make profix=/usr/local/git
[root@localhost git-2.26.2]# make instal
```

- 配置环境变量

```
vim /etc/profile

尾部加⼊ Git 的 bin 路径配置即可 
export GIT_HOME=/usr/local/git
export PATH=$PATH:$GIT_HOME/bin

最后执⾏ source /etc/profile 使环境变量⽣效即可
```

- 查看安装结果

```
git --version
```

# JDK安装

> 卸载已有的openjdk（如果有)

- ⾸先查找已经安装的 OpenJDK 包

```
rpm -qa | grep java
```

- 接下来可以将 java 开头的安装包均卸载即可:

```
yum -y remove java-1.7.0-openjdk-1.7.0.141-2.6.10.5.el7.x86_64
```

> 创建目录解压

- 在 /usr/local/ 下创建 java ⽂件夹并进⼊

```
cd /usr/local/ 
mkdir java
cd java
```

- 将上⾯准备好的 JDK 安装包解压到 /usr/local/java 中即可

```
tar -zxvf /root/jdk-8u161-linux-x64.tar.gz -C ./
```

> 配置环境变量

- 编辑 /etc/profile ⽂件，在⽂件尾部加⼊如下 JDK 环境配置即可

```
JAVA_HOME=/usr/local/java/jdk1.8.0_161 CLASSPATH=$JAVA_HOME/lib/ 
PATH=$PATH:$JAVA_HOME/bin
export PATH JAVA_HOME CLASSPATH
```

- 然后执⾏如下命令让环境变量⽣效

```
source /etc/profile
```

> 验证JDK

```
java -version
javac
```

# NODE环境安装

> 创建⽬录并解压

- 在 /usr/local/ 下创建 node ⽂件夹并进⼊

```
cd /usr/local/ 
mkdir node
cd node
```

- 将 Node 的安装包解压到 /usr/local/node 中即可

```
tar -xJvf /root/node-v12.16.3-linux-x64.tar.xz C ./
```

> 配置NODE系统环境变量

- 编辑 ~/.bash_profile ⽂件，在⽂件末尾追加如下信息:

```
# Nodejs export PATH=/usr/local/node/node-v12.16.3-linux-x64/bin:$PATH
```

- 刷新环境变量，使之⽣效即可：

```
source ~/.bash_profile
```

> 检查安装结果

```
node -v 
npm version
npx -v
```

# MAVEN安装

> 创建⽬录并解压

- 创建 /opt/maven⽂件夹并进⼊

```
mkdir /opt/maven
cd /opt/maven
```

- 解压

```
tar zxvf apache-maven-3.6.3-bin.tar.gz
```

> 配置MAVEN加速镜像源

- 编辑修改 /opt/maven/apache-maven-3.6.3/conf/settings.xml ⽂件，在 <mirrors></mirrors> 标签对⾥添加如下内容即可：

```xml
<mirror>
    <id>alimaven</id> 
    <name>aliyun maven</name> 	<url>http://maven.aliyun.com/nexus/content/groups/public/</url> 
    <mirrorOf>central</mirrorOf>
</mirror>
```

> 配置环境变量

- 编辑修改 /etc/profile ⽂件，在⽂件尾部添加如下内容，配置 maven 的安装路径

```
export MAVEN_HOME=/opt/maven/apache-maven-3.6.3 export PATH=$MAVEN_HOME/bin:$PATH
```

- 刷新环境变量

```
source /etc/profile
```

> 验证安装

```
mvn –v 
maven
```

#  MYSQL安装

> 卸载系统⾃带的MARIADB（如果有）

- ⾸先查询已安装的 Mariadb 安装包：

```
rpm -qa|grep mariadb
```

- 将其均卸载之：

```
yum -y remove mariadb-server-5.5.56-2.el7.x86_64 
yum -y remove mariadb-5.5.56-2.el7.x86_64 
yum -y remove mariadb-devel-5.5.56-2.el7.x86_64
yum -y remove mariadb-libs-5.5.56-2.el7.x86_64
```

> 解压MYSQL安装包

- 将准备好的 MySQL 安装包解压到 /usr/local/ ⽬录，并重命名为 mysql

```
tar -zxvf /root/mysql-5.7.30-linux-glibc2.12-x86_64.tar.gz -C /usr/local/
mv mysql-5.7.30-linux-glibc2.12-x86_64 mysql
```

> 创建MYSQL⽤户和⽤户组

```
groupadd mysql 
useradd -g mysql mysql
```

同时新建 /usr/local/mysql/data ⽬录，后续备⽤

> 修改MYSQL⽬录的归属⽤户

- [root@localhost mysql]# chown -R mysql:mysql ./

> 准备MYSQL的配置⽂件

- 在 /etc ⽬录下新建 my.cnf ⽂件

```
[root@localhost mysql]# touch /etc/my.cnf
```

- 写⼊如下简化配置：

```
[mysql] # 设置mysql客户端默认字符集 
default-character-set=utf8 socket=/var/lib/mysql/mysql.sock
[mysqld]
skip-name-resolve #设置3306端⼝ 
port = 3306 
socket=/var/lib/mysql/mysql.sock 
# 设置mysql的安装⽬录 
basedir=/usr/local/mysql 
# 设置mysql数据库的数据的存放⽬录 datadir=/usr/local/mysql/data 
# 允许最⼤连接数 
max_connections=200 
# 服务端使⽤的字符集默认为8⽐特编码的latin1字符集 
character-set-server=utf8 
# 创建新表时将使⽤的默认存储引擎
default-storage-engine=INNODB
lower_case_table_names=1 
max_allowed_packet=16M
```

- 同时使⽤如下命令创建 /var/lib/mysql ⽬录，并修改权限：

```
mkdir /var/lib/mysql 
chmod 777 /var/lib/mysql
```

> 正式开始安装MYSQL

- 执⾏如下命令正式开始安装：

```
cd /usr/local/mysql
./bin/mysqld --initialize --user=mysql --basedir=/usr/local/mysql -datadir=/usr/local/mysql/data
```

- 复制启动脚本到资源⽬录

```
[root@localhost mysql]# cp ./support-files/mysql.server /etc/init.d/mysqld
```

- 并修改 /etc/init.d/mysqld ，修改其 basedir 和 datadir 为实际对应⽬录：

```
basedir=/usr/local/mysql datadir=/usr/local/mysql/data
```

> 设置MYSQL系统服务并开启⾃启

- ⾸先增加 mysqld 服务控制脚本执⾏权限：

```
chmod +x /etc/init.d/mysqld
```

- 同时将 mysqld 服务加⼊到系统服务：

```
chkconfig --add mysqld
```

- 最后检查 mysqld 服务是否已经⽣效即可：

```
chkconfig --list mysqld
```

> 启动MYSQLD

```
service mysqld start
```

> 将 MYSQL 的 BIN ⽬录加⼊ PATH 环境变量

- 这样⽅便以后在任意⽬录上都可以使⽤ mysql 提供的命令。 编辑 ~/.bash_profile ⽂件，在⽂件末尾处追加如下信息:

```
export PATH=$PATH:/usr/local/mysql/bin
```

- 最后执⾏如下命令使环境变量⽣效

```
source ~/.bash_profile
```

> ⾸次登陆MYSQL

- 以 root 账户登录 mysql ，使⽤上⽂安装完成提示的密码进⾏登

```
mysql -u root -p
```

> 接下来修改ROOT账户密码

- 在mysql的命令⾏执⾏如下命令即可，密码可以换成你想⽤的密码即可：

```mysql
mysql>alter user user() identified by "111111"; mysql>flush privileges;
```

> 设置远程主机登录

```
mysql> use mysql; 
mysql> update user set user.Host='%' where user.User='root';
mysql> flush privileges;
```

# REDIS缓存安装部署

> 创建⽬录并解压

- 在 /usr/local/ 下创建 redis ⽂件夹并进⼊

```
cd /usr/local/ 
mkdir redis
cd redis
```

- 将 Redis 安装包解压到 /usr/local/redis 中即可

```
tar zxvf /root/redis-5.0.8.tar.gz -C ./
```

> 编译并安装

```
cd redis-5.0.8/ 
make && make install
```

> 将 REDIS 安装为系统服务并后台启动

- 进⼊ utils ⽬录，并执⾏如下脚本即可(默认设置一直回车)：

```
[root@localhost redis-5.0.8]# cd utils/ [root@localhost utils]# ./install_server.sh
```

> 查看REDIS服务启动情况

- 直接执⾏如下命令来查看Redis的启动结果：

```
systemctl status redis_6379.service


#Active:active(runing)  //正常
#Active:active(dead)  //  删除 /var/run/redis_6379.pid
```

> 启动REDIS客户端并测试

- 启动⾃带的 redis-cli 客户端，测试通过：

> 设置允许远程连接

- 编辑 redis 配置⽂件

```
vim /etc/redis/6379.conf
```

- 将 bind 127.0.0.1 修改为 0.0.0.0
- 然后重启 Redis 服务即可：

```
systemctl restart redis_6379.service
```

> 设置访问密码

- 编辑 redis 配置⽂件

```
vim /etc/redis/6379.conf
```

- 找到如下内容：

```
#requirepass foobared
```

- 去掉注释，将 foobared 修改为⾃⼰想要的密码，保存即可。

```
requirepass yznaisy
```

- 保存，重启 Redis 服务即可

```
systemctl restart redis_6379.service
```

