const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    username:{type:String},
    select:false,//让密码不会被查出来，因为查出来是bcrypt加密过的散列，再保存会变成明文
    password:{
        type:String,set(value){//密码的散列，数据的安全性
            return require('bcrypt').hashSync(value,10)
        }
    }
})

module.exports = mongoose.model('AdminUser',schema)