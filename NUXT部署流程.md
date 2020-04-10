#### 部署

> 1.  把本地文件的.nuxt,static,package.json,nuxt.config.js, startscript.js 放进 服务器目录文件夹。

> 2.  用 cmd 进入目录文件夹，安装依赖，npm install -production;

> 3.  pm2 全局安装： npm i pm2 -g

> 4.  pm2 启动 nuxt 项目 pm2 start startscript.js --watch 此时运行的是 http://localhost:3000;

> 如果需要修改端口,可在 nuxt.config.js 文件中添加

```
server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
```

> 5.  Nginx 配置 反向代理

```
server {
    listen 80;
    server_name www.chumanapp.com;

    location /chuman {
        proxy_pass http://127.0.0.1:3000/;
        proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

}
```
