module.exports = options => {
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const AdminUser = require('../models/AdminUser')
    return async(request,response,next)=>{
        const token = String(request.headers.authorization || '').split(' ').pop()
        assert(token,401,'请提供jwt token')
        const {id} = jwt.verify(token,request.app.get('secret'))
        assert(id,401,'无效的jwt token')
        request.user = await AdminUser.findById(id)
        // console.log(request.user)
        assert(request.user, 401,'请先登录')
        await next()
    }
        
}