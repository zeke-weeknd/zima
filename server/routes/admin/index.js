module.exports = app =>{
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const AdminUser = require('../../models/AdminUser')
    const router = express.Router({
        mergeParams: true//合并查询的路径，因为app.use()里面用到了resource（动态路径）,
                                        //它只能在use里面获取到，路由里面要用到的话，就需要这个属性
                                        //意思就是说，让router.post的方法里面能用到'/admin/api/rest/:resource'
                                        //这样就只需要在router.post获得不同的模型进行不同的操作，但接口还是那个接口
    })//express的子路由，实现增删改查的时候使用这个子路由

    // const Category = require('../../models/Category')



    //创建或者修改分类的接口
    router.post('/',async(request,response)=>{
        const model = await request.Model.create(request.body)
        response.send(model)
    })


    //修改分类的接口
    router.put('/:id',async(request,response)=>{
        const model = await request.Model.findByIdAndUpdate(request.params.id,request.body)
        response.send(model)
    })


    //显示分类列表的接口
    router.get('/',async(request,response)=>{
        const queryOptions = {}
        if(request.Model.modelName === 'Category'){
            queryOptions.populate = 'parent'
        }
        const items = await request.Model.find().setOptions(queryOptions)//这里的limit是显示查询条数的作用  
                                            //这里的populate是将关联字段查出来，不加这个的话，查出来的parent只是父级的id，加了这个parent就是一个对象
        response.send(items)
    })


    //查询分类信息的接口
    router.get('/:id',async(request,response)=>{
        const model = await request.Model.findById(request.params.id)
        response.send(model)
        console.log(model)
    })


    //删除分类的接口
    router.delete('/:id',async(request,response)=>{
        await request.Model.findByIdAndDelete(request.params.id,request.body)
        response.send({
            success: true
        })
    })

    //auth相当于一个登录授权的中间件，可以在不同的方法中使用
    const auth = require('../../middleware/auth')

    app.use('/admin/api/rest/:resource',auth(),async(request,response,next)=>{
        const modelName = require('inflection').classify(request.params.resource)
        request.Model = require(`../../models/${modelName}`)
        next()
    } ,router)





    //处理上传文件
    const multer = require('multer')
    const upload = multer({dest:__dirname+'/../../uploads'})
    app.post('/admin/api/upload',auth(),upload.single('file'),async(request,response,next)=>{
        const file = request.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        response.send(file)
    })



    //登录路由
    app.post('/admin/api/login',async(request,response)=>{
        const {username,password} = request.body//解构赋值

        //1.根据用户名找用户 
        const user = await AdminUser.findOne({
            username:username
        }).select('+password')//因为模型设计的时候默认是不把密码查出来的，所以这里要把密码带上

        assert(user, 422, '用户不存在')//判断user是否存在，如果不存在，抛出422状态码，err信息为‘用户不存在’，
                                      //效果等同下面的if判断语句
        // if(!user){
        //     //中断条件
        //     return response.status(422).send({
        //         message:'用户不存在'
        //     })
        // }
        //2.校验密码
        const isValue = require('bcrypt').compareSync(password,user.password)//compareSync比较铭文和密文是否匹配
        assert(isValue, 422, '密码不正确')
        // if(!isValue){
        //     return response.status(422).send({
        //         message:'密码不正确'
        //     })
        // }
        //3.返回token
        const token = jwt.sign({id:user._id},app.get('secret'))
        response.send({token})
    })



    //错误处理函数
    app.use(async(error,request,response,next)=>{
        // console.log(error)
        response.status(error.statusCode || 500).send({
            message:error.message
        })
    })
}