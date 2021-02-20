## 打造php动态更新环境（live server）
打造本环境的目的主要是为了方便学习php语言，可以做到保存文件后，马上看到效果

### 1. 在浏览器端安装 live server,点击图标并做如下设置：
```
living reload 开启
I don't want proxy setup (recommended) 打勾
Actual Server Address: http://localhost/    # 这里填的是本地运行环境的地址，首先要配置好本地的php运行环境，否则无法工作
Live Server Address:  http://localhost:5500/index.php  # 5500 是live server默认的端口，index.php是我的一个页面

```
> 把网址直接填到浏览器中，htmlw文件可以打开，但是php只会跳出来让你下载，因为运行php文件是需要运行环境的
> 这个浏览器的插件其实就是，帮http://localhost:5500 目录下的*.php文件，自动的转到本地已经搭建好的localhost上，从而实现实时渲染

### 2. vs code 客户端安装 live server, 选中正在编辑的php文件,点下角的live server按钮，直到出现 Port: 5500端口成功启动并在浏览器中运行，这个时候就全部完成了，
可以在浏览器中打开 http://localhost/index.php 看看，完全同步的，编辑器这里保持一下，浏览器端自动更新

### 3.这里有一个不错的完整安装php运行环境的方法，可以参照本流程设置

========================================================

## Install Full Webserver Apache, PHP, MySQL, phpMyAdmin on | Ubuntu

Steps:

- $ sudo apt-get update
- $ sudo apt-get install apache2
- $ sudo apache2ctl configtest
- $ sudo nano /etc/apache2/apache2.conf

  > Add ServerName 在文档最尾部添加：

  ```
  ServerName 127.0.0.1

  ```

- $ sudo apache2ctl configtest
- $ sudo systemctl restart apache2
- $ sudo chmod 777 /var/www/html
- $ sudo apt-get install mysql-server
- $ sudo apt-get install php libapache2-mod-php php-mcrypt php-mysql
- $ sudo nano /etc/apache2/mods-enabled/dir.conf

> 在配置文件的第二行，把 index.php 放在最前面

- $ sudo systemctl restart apache2
- $ cd /var/www/html
- $ sudo nano index.php
- $ php phpinfo();
- $ sudo apt-get install phpmyadmin
- $ sudo nano /etc/apache2/apache2.conf

> Add 在行尾再添加一句

```
Include /etc/phpmyadmin/apache.conf
```

- $ sudo systemctl restart apache2

> Enjoy, video: https://www.youtube.com/watch?v=TKLPDbSqOPY&t=27s


