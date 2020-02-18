# zima项目记录

## 2020.2.3初始化项目
- 1.在github上新建一个项目，新增LICENSE.md开发者协议，选择的是MIT协议，具体协议内容可以百度；新增.gitignore文件，选择node可以自动生成忽略更新的规则
- 2.在vscode中初始化项目，新增server文件，存放后台代码;
                        用 vue create web创建web文件夹存放前端项目（需要先安装vue/cli）；
                        用 vue create admin创建admin存放后台管理页面

## 2020.2.4 admin后台管理页面的主界面初始化
- 1.在admin中安装elementUl npm instal --save element-ui
- 2.在项目中添加elementUI vue add element
- 3.安装路由器 vue add router
- 4.在view中新建首页文件Main.vue用来当作首页的页面，在elementUI中找到组件直接复制过来用，需要用<template>进行包裹
- 5.修改router.js中的路由路径，先在index.js头部声明引入 import Main form Main.vue

## 2020.2.5 管理后台
- 1.创建分类
    客户端（admin）：

    ① 新建一个显示新增分类的页面（组件）CategoryEdit.vue
    ② 修改Main.vue中显示新增分类操作的页面组件，用router-view包裹起来
    ③ 修改路由器，在router中的index.js中的路由规则中新增children属性，添加CategoryEdit组件的路径，记得先import一下
    ④安装axois，在http.js中用axois.create新建请求路径，接口名称为admin/api,加上这个规则后，在前端发送请求时直接写接口名，不用写完整的请求路径
    ⑤使用async和await来使这个异步请求变成同步请求

    服务端（server）：

    ①在server中安装express，这里express要装5.0版本的所以用@next，原因是后面用http-assert必须要5.0否则不支持async的异常处理，别问我怎么知道的,安装mongoose和cors（允许跨域请求）
    ②在server中引入express，创建app（可以看成是整个后台程序，就是一个app应用），通过app.listen('3000',()=>{})打开端口号为3000的服务
    ③创建plugins文件夹存放插件，在这个文件夹里面新建连接数据路的插件db.js
    ④创建数据库的模板schema，新建model文件夹存放Category.js
    ⑤创建路由，创建router文件夹，在里面放路由文件，写相应的路由规则（子路由）
    ⑥在子路由中新增post方法（前端通过post方法提交的请求都回到这里）
     其中，获取前端发送来的数据是request.body，是json格式的数据，app需要先在程序入口（外面的index.js）使用app.use(express.json())转化为json格式的数据
     ** 这里出现一个跨域问题，，使用app.use(require('cors')解决跨域问题，
## 2020.2.6

 **bug记录**
 1.在Main.vue中设置子页面的子路由时，使用elementUI是在最外面的标签添加router属性<el-menu router></el-menu>里面的子标签使用index属性实现跳转，要注意的是在路径前面加上/，不然每次点击路径都会叠加，页面出错

2.在vue页面中发送请求的时候，最好用反引号将请求路径包裹起来，这样才能识别路径后面带的参数

    ①实现增删改查

## 2020.2.7

    ①实现通用CRUD接口
        npm i inflection安装inflection工具转换大小写
    ②制作其他分类（admin侧边栏）

## 2020.2.8
    ①上传图片npm i multer 处理上传文件的中间件（express无法处理上传文件的数据）
## 2020.2.10
 **bug记录**
created生命周期函数不能写在methods里面！
## 2020.2.11
①用户密码加密
②登陆页面
③axios响应拦截实现通用错误处理
④用户登录和验证
⑤assert做条件判断

## 2020.2.12
用户访问限制和客户端的路由限制beforEach((to,from,next)=>{})

## 2020.2.12
前端页面

## 2020.2.13
工具类

## 2020.2.14
flex布局
