# Hadoop安装手册

## centos7安装

**centos7安装请参考Linux基础的书籍**

## 系统配置

- 配置时钟同步

​      使用Linux命令配置

​      首先进入超级用户，在命令行输入：su root

​      然后再输入：crontab -e

​      该命令是 vi 编辑命令，按 i 进入插入模式，按 Esc，然后键入:wq 保存退出

​      键入下面的一行代码，输入 i，进入插入模式（星号之间和前后都有空格）

```
0 1 * * * /usr/sbin/ntpdate cn.pool.ntp.org
```

- 配置主机名

  使用 gedit 编辑主机名，如果不可以使用 gedit，请直接使用 vi 编辑器（后面用到   	          gedit 的地方也同此处处理一致）

​      在命令行输入：

```
gedit /etc/sysconfig/network
```

​      配置信息如下：

```
NETWORKING=yes #启动网络
HOSTNAME=master #主机名
```

​      接着重启网络服务，输入：

```
service network restart
```

- 配置静态IP

​      VMWare 编辑菜单 --> 虚拟网络设置

​      删除VMnet8

​      添加VMnet8

​      修改模式为NAT

​      应用

​     修改配置文件：

```
gedit /etc/sysconfig/network-scripts/ifcfg-ens33 
```

​      将以下配置添加再文件中(文件已有的配置则将其修改，没有的进行添加)：

```
BOOTPROTO=static # 使用静态IP地址，默认为dhcp
ONBOOT=yes #是否开机启用,默认值为no
IPADDR=192.168.11.110 # 设置的静态IP地址
GATEWAY=192.168.11.2 # 网关地址
NETMASK=255.255.255.0 # 子网掩码
DNS1=8.8.8.8 # DNS服务器
```

​      保存后退出

​      保存后退出

​      保存后退出

​      接着重启网络服务，输入：

```
service network restart
```

​	  ping www.baidu.com 或者ping你电脑的IP看是否能ping通，如果使用以上放还不能成功可以点击此[链接](https://www.bilibili.com/video/BV1bA411b7vs)

​	  如图表示成功：

  ![](ping-baidu.png)



- 配置hosts列表

​      使用gedit命令编辑hosts看列表：

```
gedit /etc/hosts
```

​      将下面三行添加到/etc/hosts 文件中：

```
192.168.11.110 master
192.168.11.120 slave1
192.168.11.130 slave2
```

​      (slave1和slave2可以在现在配置也可以在克隆后再配置)master和slave1、slave2代	  表你的主机名

​	  接着重启网络服务，输入：service network restart

- 关闭防火墙

```
systemctl stop firewalld.service   //临时关闭防火墙
systemctl disable firewalld.service  //开机禁用防火墙
```



## 安装jdk

- 使用xshell上传jdk压缩包并解压

​      xshell使用可参考这个网站：[xshell使用](https://blog.csdn.net/qust_gosuccess/article/details/86003565)

​      解压jdk：tar -xvf 你的jdk文件

- 配置环境变量

  (/etc/profile ~/.bashrc ~/.bash_profile )

  随便选择一个上述文件夹使用gedit命令进行编辑,这里以~/.bash_profile为例(后面所有的环境配置都必须配置再你现在配置的文件下)将以下配置添加或覆盖在当前文件：

  ```
  export JAVA_HOME=/home/yznaisy/hadoop/jdk1.8.0_141
  export PATH=$JAVA_HOME/bin:$PATH
  ```

  使用source命令来使你的配置文件立即生效，如：

  ```
  source ~/.bash_profile
  ```

- 测试java安装

  使用java -version来测试jdk是否安装成功

  如图表示成功：

  ![](java-version.png)

##  克隆

- 关机

- 右键-->管理-->克隆

- 克隆完成后需要修改你的IP地址及主机名

## 设置免密登录

- 设置免密登录

  都必须再普通用户下进行下面的操作(如果是安装在root下就就在root下)

  在终端生成密钥，命令如下（一路点击回车生成密钥）：

  ```
  ssh-keygen -t rsa 
  ```

- 复制公钥文件

  ```
  cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
  ```

- 修改 authorized_keys 文件的权限，命令如下：

  ```
  chmod 600 ~/.ssh/authorized_keys
  ```

- 将三台主机都按上面的操作生成密钥，然后将slave1和slave2 authorized_keys文件中的内容

  复制在master的authorized_keys文件中（(注意不是覆盖) 

  然后使用命令将master上的authorized_keys文件发送到slave1和slave2上，命令如下：

  ```
  scp -r ~/.ssh/authorized_keys yznaisy@slave:~/
  ```

- 验证免密登录,命令如下：

  ssh slave1

## 安装Hadoop

- 上传解压Hadoop
              将解压后的文件夹重命名为hadoop，如：

  ```
  mv hadoop-2.7.7 hadoop
  ```

              使用cd命令进入的Hadoop文件夹如：

  ```
  cd /hadoop-2.7.7/etc/hadoop
  ```

  

- 配置Hadoop文件
     1. hadoop-env.sh
                        使用gedit对文件进行编辑：
                           在文件中找到：

        ```
        export JAVA_HOME=${JAVA_HOME}
        ```

                        将其修改为：

        ```
        export JAVA_HOME=/home/yznaisy/hadoop/jdk1.8.0_141
        ```

                        然后保存文件。

     2. yarn-env.sh
                        在文件的靠前的部分找到下面的一行代码：

                           将这行代码修改为下面的代码（将#号去掉）

        ```
        # export JAVA_HOME=/home/y/libexec/jdk1.6.0/
        ```

                        然后保存文件。

  3. core-site.xml 
                                       用下面的代码替换 core-site.xml 中的内容：
  
  4. ```
        <?xml version="1.0" encoding="UTF-8"?>
        <?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
        <!--
          Licensed under the Apache License, Version 2.0 (the "License");
          you may not use this file except in compliance with the License.
          You may obtain a copy of the License at
        
            http://www.apache.org/licenses/LICENSE-2.0
        
          Unless required by applicable law or agreed to in writing, software
          distributed under the License is distributed on an "AS IS" BASIS,
          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
          See the License for the specific language governing permissions and
          limitations under the License. See accompanying LICENSE file.
        -->
        
        <!-- Put site-specific property overrides in this file. -->
        
        <configuration>
         <property>
         <name>fs.defaultFS</name>
         <value>hdfs://master:9000</value>
         </property>
         <property>
         <name>hadoop.tmp.dir</name>
         <value>/home/yznaisy/hadoop/hadoopdata</value>
         </property>
        
        </configuration>
        ```

  5. hdfs-site.xml
                        用下面的代码替换 hdfs-site.xml 中的内容：

        ```
        <?xml version="1.0" encoding="UTF-8"?>
        <?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
        <!--
          Licensed under the Apache License, Version 2.0 (the "License");
          you may not use this file except in compliance with the License.
          You may obtain a copy of the License at
        
            http://www.apache.org/licenses/LICENSE-2.0
        
          Unless required by applicable law or agreed to in writing, software
          distributed under the License is distributed on an "AS IS" BASIS,
          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
          See the License for the specific language governing permissions and
          limitations under the License. See accompanying LICENSE file.
        -->
        
        <!-- Put site-specific property overrides in this file. -->
        
        <configuration>
         <property>
         <name>dfs.replication</name>
         <value>1</value>
         </property>
        </configuration>
        ```

  6.   yarn-site.xml
                        用下面的代码替换yarn-site.xml中的内容:

        ```
        <?xml version="1.0"?>
        <!--
          Licensed under the Apache License, Version 2.0 (the "License");
          you may not use this file except in compliance with the License.
          You may obtain a copy of the License at
        
            http://www.apache.org/licenses/LICENSE-2.0
        
          Unless required by applicable law or agreed to in writing, software
          distributed under the License is distributed on an "AS IS" BASIS,
          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
          See the License for the specific language governing permissions and
          limitations under the License. See accompanying LICENSE file.
        -->
        <configuration>
        
        <!-- Site specific YARN configuration properties -->
        
        <property>
        <name>yarn.nodemanager.aux-services</name>
        <value>mapreduce_shuffle</value>
        </property>
        <property>
         <name>yarn.resourcemanager.address</name>
         <value>master:18040</value>
         </property>
        <property>
         <name>yarn.resourcemanager.scheduler.address</name>
         <value>master:18030</value>
         </property>
        <property>
         <name>yarn.resourcemanager.resource-tracker.address</name>
         <value>master:18025</value>
         </property>
        <property>
         <name>yarn.resourcemanager.admin.address</name>
         <value>master:18141</value>
         </property>
        <property>
         <name>yarn.resourcemanager.webapp.address</name>
         <value>master:18088</value>
         </property>
        </configuration>
        ```

  7.   mapred-site.xml
                        复制mapred-site-template.xml 文件：
                        cp mapred-site.xml.template mapred-site.xml 
                        用下面的代码替换 mapred-site.xml 中的内容:

        ```
        <?xml version="1.0"?>
        <?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
        <!--
          Licensed under the Apache License, Version 2.0 (the "License");
          you may not use this file except in compliance with the License.
          You may obtain a copy of the License at
        
            http://www.apache.org/licenses/LICENSE-2.0
        
          Unless required by applicable law or agreed to in writing, software
          distributed under the License is distributed on an "AS IS" BASIS,
          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
          See the License for the specific language governing permissions and
          limitations under the License. See accompanying LICENSE file.
        -->
        
        <!-- Put site-specific property overrides in this file. -->
        
        <configuration>
        
        <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
        </property>
        </configuration>
        ```

  8. slaves
                        使用 gedit 编辑：
                        用下面的代码替换 slaves 中的内容：

        ```
        slave1
        slave2
        ```

        

  9. 配置环境变量
                        在你刚才配置环境变量的文件中添加如下配置：

        ```
        export HADOOP_HOME=/home/yznaisy/hadoop/hadoop
        export PATH=$HADOOP_HOME/bin:$HADOOP_HOME/sbin:$PATH
        ```

                         将配置好的Hadoop文件和环境变量发送到slave1和slave2

  9. 创建数据目录
                 使用mkdir来创建目录，如：mkdir /home/yznaisy/hadoop/hadoopdata 这个路径与你配置hadoop文件的路径相同(注意三台主机都需要创建目录)
                 格式化文件系统

  10. 格式化文件系统

      ```
      hdfs namenode -foramt
      ```

      

  11. 启动Hadoop
                      进入Hadoop安装目录使用命令来启动Hadoop，命令如下：
      
```
      ./sbin/start-all.sh
      ```
    
  12. 查看hadoop是否启动
                      使用jps查看进程
  
                    Web UI 查看集群是否成功启动
                      在 master 上启动 Firefox 浏览器，在浏览器地址栏中输入输入 http://master:50070/，检查
                      namenode 和 datanode 是否正常。UI 页面如下图所示。
  
                      

## 安装Hive

- 上传解压hive

- 修改hive配置文件

  1. 进入hive/conf/文件下首先复制hive-default.xml.template到hive-default.xml作为全局配置文件

  2. 同目录下创建hive-site.xml作为可覆盖配置文件

  3. 编辑hive-site.xml文件,添加如下内容:

     ```
     <?xml version="1.0" encoding="UTF-8" standalone="no"?>
     <?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
     <configuration>
       <property>
         <name>javax.jdo.option.ConnectionURL</name>
         <value>jdbc:mysql://localhost:3306/hive?createDatabaseIfNotExist=true&amp;useSSL=true</value>
         <description>JDBC connect string for a JDBC metastore</description>
       </property>
       <property>
         <name>javax.jdo.option.ConnectionDriverName</name>
         <value>com.mysql.jdbc.Driver</value>
         <description>Driver class name for a JDBC metastore</description>
       </property>
       <property>
         <name>javax.jdo.option.ConnectionUserName</name>
         <value>hive</value>
         <description>username to use against metastore database</description>
       </property>
       <property>
         <name>javax.jdo.option.ConnectionPassword</name>
         <value>yznaisy</value>
         <description>password to use against metastore database</description>
       </property>
     </configuration>
     ```

- 连接mysql
  
1. 将mysql-connector-java-x.x.x-bin.jar复制在hive/lib/目录下
  
- 配置环境变量

  ```
  export HIVE_HOME=/home/yznaisy/hadoop/hive
  export PATH=$PATH:$HIVE_HOME/bin
  export HADOOP_HOME=/home/yznaisy/hadoop/hadoop
  ```

  不要启动hive，还需要安装MySQL！！！！

  不要启动hive，还需要安装MySQL！！！！

  不要启动hive，还需要安装MySQL！！！！

## 安装Mysql 

- 下载MySQL

  1. 下载命令：

     ```
     wget https://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm
     ```

- 安装MySQL

  1. 然后进行repo的安装

     ```
     rpm -ivh mysql57-community-release-el7-9.noarch.rpm
     ```

     ​	    执行完成后会在/etc/yum.repos.d/目录下生成两个repo文件mysql-	  community.repo mysql-          community-source.repo

  2. 使用yum命令即可完成安装

     ​        注意：必须进入到 /etc/yum.repos.d/目录后再执行以下脚本

     ​        安装命令：

     ```
     yum install mysql-server
     ```

  3. 设置开机自启动

     ```
     systemctl enable mysqld
     ```

     ​        启动msyql：

     ```
     systemctl start mysqld
     ```

  4. 初始化MySQL

     ```
     mysql_secure_installation（能回车的回车）
     ```

- 修改mysql密码

  ​        重置密码的第一步就是跳过MySQL的密码认证过程，方法如下：

  ​        \#vim /etc/my.cnf(注：windows下修改的是my.ini)

  ​        在[mysqld]后面任意一行添加“skip-grant-tables”用来跳过密码验证的过程，退出保存即可

  ​        重启mysql：

  ```
   systemctl restart mysqld
  ```

  ​        免密登录：

  ```
  mysql -u root -p
  ```

  ​        进入数据库：

  ```
  use mysql
  ```

  ​        修改root密码，命令如下：

  ```
  update user set authentication_string = password('这里输入新密码'),password_last_changed=now() where user='root';
  ```

  ​        退出mysql数据库：

  ```
  quit;
  ```

  ​        再次修改配置文件：vi /etc/my.cnf 删除 skip-grant-tables 保存退出

  ​        重启mysql服务即可

- 登录mysql

  ​        然后执行 mysql -uroot -p ，输入上面的到的密码进入，用该密码登录后，必须马上修改新的密码，不然会报如下错误：

  ​        mysql> use mysql;

  ​        ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement. 

  ​        错误信息为：在执行此语句之前，必须使用ALTER USER语句重置密码。

  ​        如果你想要设置一个简单的测试密码的话，比如设置为123456，会提示这个错误，报错的意思就是你的密码不符合要求

  ​        mysql> alter user 'root'@'localhost' identified by '123456';

  ​        ERROR 1819 (HY000): Your password does not satisfy the current policy requirements

  ​        错误信息为：您的密码不符合当前的策略要求

  ​        查看 mysql 初始的密码策略，

  ​        输入语句 “ SHOW VARIABLES LIKE 'validate_password%'; ” 进行查看

  ​        首先需要设置密码的验证强度等级，设置 validate_password_policy 的全局参数为 LOW 即可，

  ​        输入设值语句 “ 

  ```
  set global validate_password_policy=LOW;
  ```

   ” 进行设值，

  ​        当前密码长度为 8 ，如果不介意的话就不用修改了，按照通用的来讲，设置为 6 位的密码，设置 validate_password_length 的全局参数为 6 即可，

  ​        输入设值语句 “ 

  ```
  set global validate_password_length=6;
  ```

   ” 进行设值，

  ​        现在可以为 mysql 设置简单密码了，只要满足六位的长度即可，

  ​        输入修改语句 “ 

  ```
  ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
  ```

   ” 可以看到修改成功，表示密码策略修改成功了！！

- 新建hive数据库

  ```
  create database hive; 
  ```

  ​        \#这个hive数据库与hive-site.xml中localhost:3306/hive的hive对应，用来保存hive元数据

- 允许MySQL接入hive

  ```
  grant all on *.* to hive@localhost identified by 'hive'; 
  ```

  ​        \#将所有数据库的所有表的所有权限赋给hive用户，后面的hive是配置hive-site.xml中配置的连接密码

  ```
  flush privileges; 
  ```

  ​        \#刷新mysql系统权限关系表

- 启动hive

  ​        启动hive前一定初始化元数据！！！

  ​        启动hive前一定初始化元数据！！！

  ​        启动hive前一定初始化元数据！！！

  ​        命令如下：

  ```
   schematool -dbType mysql -initSchema
  ```

  ​        还需要启动metastore:

  ```
   hive --service metastore &
  ```

  ​        然后就可以启动hive了

- 测试hive

  ​        在hive交互式执行环境中使用sql语句查询数据库:

  ```
  show databases;
  ```

  ​        如图表示成功：

  ![](hive-show.png)

## 安装zookeeper

- 上传解压zookeeper

- 修改zookeeper配置文件

  1. 将zoo_sample.cfg修改为zoo.cfg

     ​        编辑zoo.cfg，在最后添加下列代码

     ```
     dataDir=/home/yznaisy/hadoop/zookeeper/data
     dataLogDir=/home/yznaisy/hadoop/zookeeper/datalog
     server.1=master:2888:3888
     server.2=slave1:2888:3888
     server.3=slave2:2888:3888
     ```

  2.  在zookeeper安装目录下创建文件夹：

     ```
     mkdir data
     mkdir datalog
     在master上： 
     echo 1 > data/myid
     在slave1上：
     echo 2 > data/myid
     在slave2上： 
     echo 3 > data/myid
     ```

- 配置环境变量：

  ```
  export ZOOKEEPER_HOME=/home/yznaisy/hadoop/zookeeper
  export PATH=$PATH:$ZOOKEEPER_HOME/bin
  ```

  ​        将配置好的zookeeper文件和环境变量发送到slave1和slave2

- 测试zookeeper是否安装成功

  ​        进入zookeeper安装目录

  ```
  ./bin/zkServer.sh start
  ./bin/zkServer.sh status 
  ```

##  安装Hbase

- 上传解压hbase

- 修改hbase配置文件

  1. 编辑regionservers在文件中添加：

     ```
     master
     slave1
     slave2
     ```

  2. 修改hbase-site.xml：

     ​	内容如下

     ```
     <?xml version="1.0"?>
     <?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
     <!--
     /**
      *
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *     http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
     -->
     <configuration>
     
     <property>
     	<name>hbase.tmp.dir</name>
     	<value>/var/hbase</value>
     </property>
     <property>
     	<name>hbase.rootdir</name>
     	<value>hdfs://master:9000/hbase</value>
     </property>
     <property>
     	<name>hbase.cluster.distributed</name>
     	<value>true</value>
     </property>
     <property>
     	<name>hbase.zookeeper.quorum</name>
     	<value>master,slave1,slave2</value>
     </property>
     <property>
     	<name>hbase.zookeeper.property.dataDir</name>
     	<value>/home/yznaisy/hadoop/zookeeper</value>
     </property>
     <property>
     	<name>hbase.master.info.port</name>
     	<value>60010</value>
     </property>
     </configuration>
     ```

  3. 修改hbase-env.sh：

     ​        在hbase-env.sh中添加如下两行:

     ```
     export JAVA_HOME=/home/yznaisy/hadoop/hadoop/jdk1.8.0_141
     export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
     ```

     ​        找到如下代码将前面的#号去掉:

     ```
     #export HBASE MANAGES ZK=true
     ```

- 配置环境变量

  ```
  export HBASE_HOME=/home/yznaisy/hadoop/hbase
  export HBASE_CLASSPATH=$HBASE_HOME/conf
  export HBASE_LOG_DIR=$HBASE_HOME/logs
  export PATH=$PATH:$HBASE_HOME/bi
  ```

  ​        将配置好的Hbase文件和环境变量发送到slave1和slave2

- 启动Hbase

  ​        进入Hbase目录下

  ```
  ./bin/start-habse.sh
  ```

  ​        jps查看进程

  ​        关闭Hbase

  ```
  ./bin/stop-hbase.sh
  ```

  ​        查看Web UI 如同表示成功：

##  安装Spark

- 上传解压spark

- 修改spark配置文件

  1. 进入spark/conf/目录下将spark-env.sh.template更名为spark-env.sh

     ​        编辑spark-env.sh，在最下方添加如下代码：

     ```
     export JAVA_HOME=/home/yznaisy/hadoop/jdk1.8.0_141<
     export SPARK_MASTER_HOST=master
     export SPARK_MASTER_PORT=7077
     ```

  2. 同目录下将slaves.template更名为slaves

     ​        编辑slaves,使用如下代码覆盖原来的代码:

     ```
     master
     slave1
     slave2
     ```

     ​        将配置好的Spark文件和环境变量发送到slave1和slave2

- 配置环境变量

  ```
  export SPARK_HOME=/home/yznaisy/hadoop/spark
  export PATH=$PATH:$SPARK_HOME/bin
  ```

- 启动Spark

  ​        启动Spark之前必须启动Hadoop

  ```
  ./bin/stop-hbase.sh
  ```

  ​        查看Web UI 如同表示成功：

##  安装Scala

- 上传解压scala

- 配置环境变量

  ```
  export PATH=$PATH:/home/yznaisy/hadoop/scala/bin
  ```

- 启动Scala

  ​        直接在终端输入scala

  ​		输入

  ```scala
  1+2;  //res0 :Int=3  表示成功
  ```

  

##  安装Sqoop

- 上传解压sqoop

- 修改sqoop配置文件

  1. 配置sqoop文件

  ​        将sqoop-env-template.sh更名为sqoop-env.sh

  ```
  cp  sqoop-env-template.sh sqoop-env.sh
  ```

  ​        编辑sqoop-env.sh，在最后添加如下代码：

  ```
  export HADOOP_COMMON_HOME=/home/yznaisy/hadoop/hadoop
  export HADOOP_MAPRED_HOME=/home/yznaisy/hadoop/hadoop
  export HBASE_HOME=/home/yznaisy/hadoop/hbase
  export HIVE_HOME=/home/yznaisy/hadoop/hive
  export ZOOKEEPER_HOME=/home/yznaisy/hadoop/zookeeper
  export ZOOCFGDIR=/home/yznaisy/hadoop/zookeeper/conf
  ```

  

  2. 连接mysql

     ​        将mysql-connector-java-x.x.x-bin.jar复制在sqoop/bin/目录下

- 配置环境变量

  ```
  export SQOOP_HOME=/home/yznaisy/hadoop/sqoop
  export PATH=$PATH:$SBT_HOME/bin:$SQOOP_HOME/bin
  export CLASSPATH=$CLASSPATH:$SQOOP_HOME/lib
  ```

  

- 证安装是否成功

  ```
  sqoop version
  ```

  

