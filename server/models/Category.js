const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type:String},
    parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}//ref关联Category这个分类
})

module.exports = mongoose.model('Category',schema)