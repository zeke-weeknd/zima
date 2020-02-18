const express = require('express')
const app = express()

app.set('secret','abcdefg')

app.use(require('cors')())//加载跨域模块
app.use(express.json())//为了使子路由中（routes/admin/index.js）的request.body的数据可以使用

app.use('/uploads',express.static(__dirname+'/uploads'))//让uploads里面的文件可以被访问



require('./plugins/db')(app)//连接数据库

require('./routes/admin')(app)//使用子路由

app.listen('3000',()=>{
    console.log('http://localhost:3000')
})