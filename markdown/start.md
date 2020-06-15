> 验证java

```
java -version
```

> 验证node

```
node -v
npm version
npx -v
```

> 验证maven

```
mvn -v
```

> 验证redis

```
status redis_6379.service
systemctl restart redis_6379.service
```

> 验证rabbitmq

```
systemctl start rabbitmq-server.service
rabbitmq-plugins enable rabbitmq_management  //开启web可视化界面
端口:15672
add_user codesheep 123456
set_user_tags codesheep administrator    //必须为管理员
```

> 验证tomcat

```
service tomcat start 
service tomcat stop    //必须在bin/setclasspath.sh中设置jdk和jre的路径

```

> 验证nginx

```
nginx
nginx -s stop
nginx -s reload //重新加载
```

> 验证docker

```
systemctl start docker.service
systemctl restart docker.service
docker version
```

> 验证mysql